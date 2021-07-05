const staticShoaiybSysa = "shoaiyb-sysa-site-v1";
const assets = [
  "/",
  "/../.",
  "/index.html",
  "/404.html",
  "/assets/images/logo.svg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticShoaiybSysa).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
