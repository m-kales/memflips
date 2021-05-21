const memFlips = "memFlips"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/assets/beaver.svg",
  "/assets/blank.svg",
  "/assets/cheetah.svg",
  "/assets/chicken.svg",
  "/assets/crocodile.svg",
  "/assets/dog.svg",
  "/assets/duck.svg",
  "/assets/horse.svg",
  "/assets/lion.svg",
  "/assets/panda.svg",
  "/assets/parrot.svg",
  "/assets/pig.svg",
  "/assets/rabbit.svg",
  "/assets/sheep.svg",
  "/assets/snail.svg",
  "/assets/turtle.svg",
  "/assets/white.svg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(memFlips).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })