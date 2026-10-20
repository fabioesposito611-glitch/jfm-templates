const CACHE="jfm-colosseum-20261021003549";
const FILES=["./", "index.html", "config.json", "manifest.webmanifest", "img/c_box.webp", "img/c_boxcode.webp", "img/c_boxopen.webp", "img/c_door.webp", "img/c_entry.webp", "img/c_keypad.webp", "img/c_lift1.webp", "img/c_lift2.webp", "img/c_portone.webp", "img/c_st1.webp", "img/c_st2.webp", "img/c_st3.webp", "img/c_st5.webp", "img/c_street.webp", "img/logo.png", "img/qr-guide.svg", "img/qr-review.svg", "img/qr-site.svg", "img/icon-192.png", "img/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET") return;
  if(u.pathname.endsWith("config.json")){ e.respondWith(fetch(e.request).then(r=>{const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); return r;}).catch(()=>caches.match(e.request))); return; }
  e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{ if(r.ok&&(u.origin===location.origin||u.hostname.includes("gstatic")||u.hostname.includes("googleapis")||u.hostname.includes("gstatic"))&&!u.pathname.endsWith(".mp4")){const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp));} return r;})));
});
