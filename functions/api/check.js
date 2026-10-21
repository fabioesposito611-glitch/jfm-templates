// Controllo per il proprietario: /api/check?admin=TOKEN[&b=NUMERO] — verifica collegamento a Lodgify
import { stay, romeToday } from "../_lib.js";
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  if (!env.ADMIN_TOKEN || url.searchParams.get("admin") !== env.ADMIN_TOKEN) return new Response("no", { status: 403 });
  const out = { today: romeToday(), key: !!env.LODGIFY_KEY, codes: !!env.CODES };
  try {
    const r = await fetch((env.LODGIFY_BASE || "https://api.lodgify.com") + "/v2/properties?size=50", { headers: { "X-ApiKey": env.LODGIFY_KEY || "" } });
    out.lodgify_status = r.status;
    const j = await r.json().catch(() => null);
    const list = Array.isArray(j) ? j : (j && (j.items || j.data)) || [];
    out.properties = list.map(p => ({ id: p.id, name: p.name }));
  } catch (e) { out.error = String(e); }
  const b = url.searchParams.get("b");
  if (b) { out.laterani = await stay(env, b, "lat"); out.colosseum = await stay(env, b, "col"); }
  return new Response(JSON.stringify(out, null, 2), { headers: { "Content-Type": "application/json" } });
}
