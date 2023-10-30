const VERSION = "v1";
//se añade evento para que invoque cuando se instale el serviceWorker
//Self es como el this pero especifico para los serviceWorker
self.addEventListener("install", (event) => {
  //Esperar hasta que el precache se completo
  event.waitUntil(precache());
});

//Cuando haya una peticion ir al cache para devolver una respuesta
self.addEventListener("fetch", (event) => {
  //extrar petición
  const request = event.request;

  //Solo se van a responder peticiones GET
  if (request.method !== "GET") {
    return;
  }

  //Buscar en cache
  event.respondWith(cachedResponse(request));

  // solucina error: Failed to execute 'put' on 'Cache': Partial response (status code 206)
  if (event.request.headers.has("range")) {
    return;
  }
  //Solciona error: TypeError when opening Chrome extension
  if (
    event.request.url.startsWith("chrome-extension") ||
    event.request.url.includes("extension") ||
    !(event.request.url.indexOf("http") === 0)
  ) {
    return;
  }
  //Actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  //Abir cache. Instancia de cache.
  const cache = await caches.open(VERSION);
  //se añaden los recursos
  //Como se esta usando parse los recursos quedan en la carpeta dist con otros nombres por eso se comentarean las lineas
  return cache.addAll([
    /* "./",
    "./index.html",
    "./assets/index.js",
    "./assets/MediaPlayer.js",
    "./assets/plugins/AutoPlay.js",
    "./assets/plugins/AutoPause.js",
    "./assets/index.css",
    "./assets/video.mp4",*/
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  //revisar si el cache tiene una copia asociada al request
  const response = await cache.match(request);
  //Si el response es undefine se debe retornar el recurso de la internet
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  //Buscar copia actualizada en internet
  const response = await fetch(request);
  //Añadir nuevo contenido al cache
  return cache.put(request, response);
}
