const CACHE="jfm-colosseum-20261026201627";
const FILES=["./", "index.html", "config.json", "manifest.webmanifest", "img/c_box_a.webp", "img/c_boxcode.webp", "img/c_boxopen.webp", "img/c_door_a.webp", "img/c_entry.webp", "img/c_keypad_a.webp", "img/c_lift1_a.webp", "img/c_lift2.webp", "img/c_portone_a.webp", "img/c_st1_a.webp", "img/c_st2_a.webp", "img/c_st3_a.webp", "img/c_st5.webp", "img/c_street_a.webp", "img/logo.png", "img/qr-guide.svg", "img/qr-review.svg", "img/qr-site.svg", "img/icon-192.png", "img/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET") return;
  if(u.pathname.endsWith("config.json")){ e.respondWith(fetch(e.request).then(r=>{const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); return r;}).catch(()=>caches.match(e.request))); return; }
  if(u.pathname.startsWith("/api/")) return;
  if(e.request.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith("index.html")){ e.respondWith(fetch(e.request).then(r=>{ if(r.ok&&!r.redirected){const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp));} return r;}).catch(()=>caches.match(e.request).then(m=>m||caches.match("./")))); return; }
  e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{ if(r.ok&&(u.origin===location.origin||u.hostname.includes("gstatic")||u.hostname.includes("googleapis")||u.hostname.includes("gstatic"))&&!u.pathname.endsWith(".mp4")){const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp));} return r;})));
});
