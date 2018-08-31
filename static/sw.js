importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.04e667eb4ffbe0bea7d3.js",
    "revision": "6bdb20c953f2a596708a62c42becee5d"
  },
  {
    "url": "/_nuxt/layouts_default.5fa9248eb74284b07dfe.js",
    "revision": "7a1cf40f793adbeeda00507188721bcf"
  },
  {
    "url": "/_nuxt/manifest.1dd6e3b91b8b2ccce92e.js",
    "revision": "a39d078972757548e09b41393cd059a3"
  },
  {
    "url": "/_nuxt/pages_index.008a88b8f69f06e14d0f.js",
    "revision": "b025a9c268b54a8e5a2a1ff3f1c27f7a"
  },
  {
    "url": "/_nuxt/vendor.d2a931d89a3bbf907444.js",
    "revision": "ae90268813d4042d55d7d138dd5af405"
  }
], {
  "cacheId": "newz-nigeria",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





