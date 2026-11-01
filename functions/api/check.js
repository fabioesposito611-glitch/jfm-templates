// Controllo per il proprietario: /api/check?admin=TOKEN[&b=CODICE] — verifica collegamento a Hospitable
import { stay, romeToday, hosp } from "../_lib.js";
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  if (!env.ADMIN_TOKEN || url.searchParams.get("admin") !== env.ADMIN_TOKEN) return new Response("no", { status: 403 });
  const out = { today: romeToday(), token: !!env.HOSPITABLE_TOKEN, codes: !!env.CODES };
  try {
    const j = await hosp(env, "/properties?per_page=50");
    out.properties = (j.data || []).map(p => ({ id: p.id, name: p.name }));
  } catch (e) { out.error = String(e); }
  const b = url.searchParams.get("b");
  if (b) { out.laterani = await stay(env, b, "lat"); out.colosseum = await stay(env, b, "col"); }
  return new Response(JSON.stringify(out, null, 2), { headers: { "Content-Type": "application/json" } });
}
