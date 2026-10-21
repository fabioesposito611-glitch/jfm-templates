const CACHE="jfm-laterani-20261021021054";
const FILES=["./", "index.html", "config.json", "manifest.webmanifest", "img/l_boxclosed.webp", "img/l_boxes_a.webp", "img/l_boxopen.webp", "img/l_btn2_a.webp", "img/l_code_a.webp", "img/l_gate2.webp", "img/l_gate_a.webp", "img/l_gates_a.webp", "img/l_keys_lift_a.webp", "img/l_keys_stairs_a.webp", "img/l_lift_a.webp", "img/l_liftclose.webp", "img/l_liftin.webp", "img/l_open3_a.webp", "img/l_path1_a.webp", "img/l_path2_a.webp", "img/l_railing_a.webp", "img/l_scalac_a.webp", "img/l_st1_a.webp", "img/l_st2_a.webp", "img/l_st3_a.webp", "img/l_st4_a.webp", "img/logo.png", "img/qr-guide.svg", "img/qr-review.svg", "img/qr-site.svg", "img/icon-192.png", "img/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET") return;
  if(u.pathname.endsWith("config.json")){ e.respondWith(fetch(e.request).then(r=>{const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); return r;}).catch(()=>caches.match(e.request))); return; }
  e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{ if(r.ok&&(u.origin===location.origin||u.hostname.includes("gstatic")||u.hostname.includes("googleapis")||u.hostname.includes("gstatic"))&&!u.pathname.endsWith(".mp4")){const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp));} return r;})));
});
