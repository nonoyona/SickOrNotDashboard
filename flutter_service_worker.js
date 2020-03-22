'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "0bfec88102a00cbb1df41f9973687b8c",
"/assets\assets\login.png": "73a63b54b105ad9360238e246ae5f73d",
"/assets\assets\login.svg": "dfa03c586e2ee0e9e4f7291b42c69fcd",
"/assets\assets\logo.png": "513603bebfdc81d7d5d165e00b7fdff3",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "cef18b10727843aeedad7e9491951017",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "34f52b591f82384e03a04d852ac883fc",
"/main.dart.js": "c1c1dcd39bfc4dff4fc26be86cef0987",
"/manifest.json": "f407f886ee8fca2375c76c23694a980e",
"/web.zip": "f0ff0edc551d046ddc7c7525d9b822c4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
