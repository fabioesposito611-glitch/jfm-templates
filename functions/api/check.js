// Controllo per il proprietario: /api/check?admin=TOKEN[&b=CODICE] — verifica collegamento a Hospitable
import { stay, romeToday, hosp, adminToken, parseCodes } from "../_lib.js";
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const given = url.searchParams.get("admin") || "";
  const tok = adminToken(env);
  if (!tok || given !== tok) {
    // diagnosi senza rivelare valori: quali segreti esistono e quanto sono lunghi
    const diag = {
      esito: "no",
      progetto: url.hostname,
      ADMIN_TOKEN_presente: !!env.ADMIN_TOKEN,
      ADMIN_TOKEN_lunghezza: env.ADMIN_TOKEN ? String(env.ADMIN_TOKEN).length : 0,
      ADMIN_TOKEN_spazi: env.ADMIN_TOKEN ? String(env.ADMIN_TOKEN) !== String(env.ADMIN_TOKEN).trim() : false,
      lunghezza_nel_link: given.length,
      CODES_presente: !!env.CODES,
      HOSPITABLE_TOKEN_presente: !!env.HOSPITABLE_TOKEN,
      chiave_trovata_lunghezza: tok.length,
      nomi_segreti_visti: Object.keys(env || {}).filter(k => typeof env[k] === "string")
    };
    return new Response(JSON.stringify(diag, null, 2), { status: 403, headers: { "Content-Type": "application/json" } });
  }
  const pc = parseCodes(env);
  const out = { today: romeToday(), token: !!env.HOSPITABLE_TOKEN, codes: !!env.CODES, codici_leggibili: !!pc, case_con_codici: pc ? Object.keys(pc) : [], campi_codici: pc ? Object.fromEntries(Object.entries(pc).map(([k, v]) => [k, Object.keys(v || {})])) : {} };
  try {
    const j = await hosp(env, "/properties?per_page=50");
    out.properties = (j.data || []).map(p => ({ id: p.id, name: p.name }));
  } catch (e) { out.error = String(e); }
  const b = url.searchParams.get("b");
  if (b) { out.laterani = await stay(env, b, "lat"); out.colosseum = await stay(env, b, "col"); }
  return new Response(JSON.stringify(out, null, 2), { headers: { "Content-Type": "application/json" } });
}
