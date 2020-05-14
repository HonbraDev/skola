/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});

document.getElementById("btn-start").onclick = function() {
    document.getElementById("main").classList.add("show");
}

document.getElementById("btn-back").onclick = function() {
    document.getElementById("main").classList.remove("show");
}

document.getElementById("mainframe").onload = function() {
    document.getElementById("btn-start").style.display = "block";
    document.getElementById("main-loader").style.display = "none";
}

var cacheName = "mapa-skoly";
var filesToCache = [];