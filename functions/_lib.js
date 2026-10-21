// Funzioni comuni: verifica prenotazione su Lodgify e fasi del soggiorno
export const HOUSES = { laterani: "lat", colosseum: "col" };
const NAMES = { lat: /laterani/i, col: /colosseum/i };

export function cookies(req) {
  const out = {};
  (req.headers.get("Cookie") || "").split(";").forEach(p => {
    const i = p.indexOf("="); if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim());
  });
  return out;
}
export function romeToday() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Rome" }).format(new Date()); // YYYY-MM-DD
}
export function isAdmin(env, req) {
  return !!env.ADMIN_TOKEN && cookies(req).jfm_admin === env.ADMIN_TOKEN;
}
async function lodgify(env, path) {
  const base = env.LODGIFY_BASE || "https://api.lodgify.com";
  const r = await fetch(base + path, { headers: { "X-ApiKey": env.LODGIFY_KEY, "Accept": "application/json" } });
  if (!r.ok) throw new Error("lodgify " + r.status);
  return r.json();
}
let PROPS = null;
async function propertyKey(env, propertyId) {
  // mappa id proprietà -> casa: prima dalle variabili, altrimenti dal nome su Lodgify
  if (env.PROP_LAT && String(propertyId) === String(env.PROP_LAT)) return "lat";
  if (env.PROP_COL && String(propertyId) === String(env.PROP_COL)) return "col";
  if (!PROPS) {
    const j = await lodgify(env, "/v2/properties?size=50");
    const list = Array.isArray(j) ? j : (j.items || j.data || []);
    PROPS = {};
    for (const p of list) for (const k in NAMES) if (NAMES[k].test(p.name || "")) PROPS[p.id] = k;
  }
  return PROPS[propertyId] || null;
}
// Da numero di prenotazione a casa ("lat"/"col"), senza controllare le date
export async function houseOf(env, bookingId) {
  if (!/^\d{1,12}$/.test(String(bookingId || "")) || !env.LODGIFY_KEY) return null;
  try { const b = await lodgify(env, "/v2/reservations/bookings/" + bookingId); return await propertyKey(env, b.property_id); }
  catch (e) { return null; }
}
// Restituisce {phase:"before"|"during"|"after"|"invalid", arrival, departure}
export async function stay(env, bookingId, house) {
  if (!/^\d{1,12}$/.test(String(bookingId || ""))) return { phase: "invalid" };
  if (!env.LODGIFY_KEY) return { phase: "invalid", reason: "no-key" };
  const cache = caches.default, ckey = new Request("https://cache.jfm/stay/" + bookingId);
  let b = null;
  const hit = await cache.match(ckey);
  if (hit) b = await hit.json();
  else {
    try { b = await lodgify(env, "/v2/reservations/bookings/" + bookingId); }
    catch (e) { return { phase: "invalid", reason: String(e.message) }; }
    b = { arrival: String(b.arrival).slice(0, 10), departure: String(b.departure).slice(0, 10), status: b.status, property_id: b.property_id };
    await cache.put(ckey, new Response(JSON.stringify(b), { headers: { "Cache-Control": "max-age=600" } }));
  }
  if (b.status && !/booked/i.test(b.status)) return { phase: "invalid", reason: "status" };
  const k = await propertyKey(env, b.property_id).catch(() => null);
  if (k !== house) return { phase: "invalid", reason: "house" };
  const t = romeToday();
  const phase = t < b.arrival ? "before" : t <= b.departure ? "during" : "after";
  return { phase, arrival: b.arrival, departure: b.departure };
}
export function codesFor(env, house) {
  try { return JSON.parse(env.CODES || "{}")[house] || null; } catch (e) { return null; }
}
