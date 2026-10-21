// Le guide si aprono solo con una prenotazione attiva (o come proprietario). Altrimenti: pagina di saluto.
import { HOUSES, cookies, isAdmin, stay, houseOf } from "./_lib.js";
const SLUG = { lat: "laterani", col: "colosseum" };
const PID = { lat: "ChIJx2THlBphLxMRUs6Aznzy12g", col: "ChIJ1dGmxCZhLxMR4xTyDV0QUow" };

export async function onRequest(ctx) {
  const { request, env } = ctx;
  const url = new URL(request.url);
  // link universale dei messaggi Lodgify: guida.jfmitalia.com/?b=NUMERO -> la casa giusta
  const bRoot = url.searchParams.get("b");
  if ((url.pathname === "/" || url.pathname === "/recensione" || url.pathname === "/recensione/") && bRoot) {
    const h = await houseOf(env, bRoot);
    if (!h) return farewell("");
    if (url.pathname.startsWith("/recensione")) return Response.redirect("https://search.google.com/local/writereview?placeid=" + PID[h], 302);
    return new Response(null, { status: 302, headers: { Location: "/" + SLUG[h] + "/?b=" + bRoot + url.hash, "Cache-Control": "no-store" } });
  }
  if (url.pathname === "/") return farewell("");
  const m = url.pathname.match(/^\/(laterani|colosseum)(\/|$)/);
  if (!m) return ctx.next();
  const slug = m[1], house = HOUSES[slug];

  // accesso proprietario: link segreto una volta, poi cookie per un anno
  const adminQ = url.searchParams.get("admin");
  if (adminQ && env.ADMIN_TOKEN && adminQ === env.ADMIN_TOKEN) {
    const r = new Response(null, { status: 302, headers: { Location: "/" + slug + "/" } });
    r.headers.append("Set-Cookie", `jfm_admin=${env.ADMIN_TOKEN}; Path=/; Max-Age=31536000; Secure; HttpOnly; SameSite=Lax`);
    return r;
  }
  if (isAdmin(env, request)) return ctx.next();

  const c = cookies(request);
  const bQ = url.searchParams.get("b");
  const b = bQ || c["jfm_b_" + house];
  if (!b) return farewell(slug);
  const s = await stay(env, b, house);
  if (s.phase !== "before" && s.phase !== "during") {
    const r = farewell(slug);
    r.headers.append("Set-Cookie", `jfm_b_${house}=; Path=/; Max-Age=0; Secure; SameSite=Lax`);
    return r;
  }
  const res = await ctx.next();
  const out = new Response(res.body, res);
  out.headers.set("Cache-Control", "no-store");
  if (bQ) out.headers.append("Set-Cookie", `jfm_b_${house}=${bQ}; Path=/; Max-Age=${60 * 60 * 24 * 60}; Secure; SameSite=Lax`);
  return out;
}
function farewell(slug) {
  return new Response(null, { status: 302, headers: { Location: "/grazie/" + (slug ? "?h=" + slug : ""), "Cache-Control": "no-store" } });
}
