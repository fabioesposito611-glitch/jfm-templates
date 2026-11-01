// Funzioni comuni: verifica prenotazione su Hospitable e fasi del soggiorno
// Secret richiesti: HOSPITABLE_TOKEN (Personal Access Token, permesso Read), CODES, ADMIN_TOKEN
// Facoltativi: PROP_LAT, PROP_COL (UUID delle proprietà su Hospitable), HOSPITABLE_BASE
export const HOUSES = { laterani: "lat", colosseum: "col" };
const NAMES = { lat: /laterani/i, col: /colosseum/i };
export const CODE_RE = /^[A-Za-z0-9-]{4,40}$/; // codice prenotazione: Airbnb HM..., Booking numerico, dirette

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
export async function hosp(env, path) {
  const base = env.HOSPITABLE_BASE || "https://public.api.hospitable.com/v2";
  const r = await fetch(base + path, { headers: { "Authorization": "Bearer " + env.HOSPITABLE_TOKEN, "Accept": "application/json" } });
  if (!r.ok) throw new Error("hospitable " + r.status);
  return r.json();
}
let PROPS = null; // { uuid: "lat"|"col" }
export async function properties(env) {
  if (PROPS) return PROPS;
  PROPS = {};
  if (env.PROP_LAT) PROPS[env.PROP_LAT] = "lat";
  if (env.PROP_COL) PROPS[env.PROP_COL] = "col";
  if (!env.PROP_LAT || !env.PROP_COL) {
    const j = await hosp(env, "/properties?per_page=50");
    for (const p of (j.data || [])) for (const k in NAMES)
      if (NAMES[k].test((p.name || "") + " " + (p.public_name || ""))) PROPS[p.id] = k;
  }
  return PROPS;
}
// Cerca la prenotazione per codice (platform_id) tra le due case
async function find(env, code) {
  const cache = caches.default, ckey = new Request("https://cache.jfm/stay/" + encodeURIComponent(code));
  const hit = await cache.match(ckey);
  if (hit) return hit.json();
  const props = await properties(env);
  const qs = Object.keys(props).map(id => "properties[]=" + encodeURIComponent(id)).join("&");
  const j = await hosp(env, "/reservations?" + qs + "&platform_id=" + encodeURIComponent(code) + "&per_page=10");
  const r = (j.data || [])[0];
  let b = null;
  if (r) {
    const pid = r.property_id || (r.properties && r.properties[0] && r.properties[0].id) || (r.property && r.property.id);
    let house = props[pid] || null;
    if (!house && Object.keys(props).length) { // la risposta non riporta la proprietà: interroga casa per casa
      for (const [id, k] of Object.entries(props)) {
        const jj = await hosp(env, "/reservations?properties[]=" + encodeURIComponent(id) + "&platform_id=" + encodeURIComponent(code) + "&per_page=1");
        if ((jj.data || []).length) { house = k; break; }
      }
    }
    const cat = (r.reservation_status && r.reservation_status.current && r.reservation_status.current.category) || r.status || "";
    b = { arrival: String(r.arrival_date).slice(0, 10), departure: String(r.departure_date).slice(0, 10), status: cat, house };
  }
  await cache.put(ckey, new Response(JSON.stringify(b), { headers: { "Cache-Control": "max-age=600" } }));
  return b;
}
// Da codice prenotazione a casa ("lat"/"col"), senza controllare le date
export async function houseOf(env, code) {
  if (!CODE_RE.test(String(code || "")) || !env.HOSPITABLE_TOKEN) return null;
  try { const b = await find(env, code); return b ? b.house : null; } catch (e) { return null; }
}
// Restituisce {phase:"before"|"during"|"after"|"invalid", arrival, departure}
export async function stay(env, code, house) {
  if (!CODE_RE.test(String(code || ""))) return { phase: "invalid" };
  if (!env.HOSPITABLE_TOKEN) return { phase: "invalid", reason: "no-key" };
  let b;
  try { b = await find(env, code); } catch (e) { return { phase: "invalid", reason: String(e.message) }; }
  if (!b) return { phase: "invalid", reason: "not-found" };
  if (/cancel|declin|expired|not_accepted/i.test(b.status)) return { phase: "invalid", reason: "status" };
  if (b.house !== house) return { phase: "invalid", reason: "house" };
  const t = romeToday();
  // i codici si vedono dal giorno prima dell'arrivo fino al giorno della partenza
  const d = new Date(b.arrival + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() - 1);
  const codesFrom = d.toISOString().slice(0, 10);
  const phase = t < codesFrom ? "before" : t <= b.departure ? "during" : "after";
  return { phase, arrival: b.arrival, departure: b.departure };
}
export function codesFor(env, house) {
  try { return JSON.parse(env.CODES || "{}")[house] || null; } catch (e) { return null; }
}
