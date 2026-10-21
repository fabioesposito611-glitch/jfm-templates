// La guida chiede qui: in che fase è il soggiorno? E, solo durante il soggiorno, i codici.
import { HOUSES, cookies, isAdmin, stay, codesFor } from "../_lib.js";

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("h"), house = HOUSES[slug];
  const json = (o, st = 200) => new Response(JSON.stringify(o), { status: st, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
  if (!house) return json({ phase: "invalid" }, 400);
  if (isAdmin(env, request)) return json({ phase: "admin", codes: codesFor(env, house) });
  const b = url.searchParams.get("b") || cookies(request)["jfm_b_" + house];
  const s = await stay(env, b, house);
  if (s.phase === "during") s.codes = codesFor(env, house);
  delete s.reason;
  return json(s);
}
