'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b1a2968a4242f34f2c319954236e7d00",
"assets/assets/drawer/bell.png": "555432b96d652fa4ddd370f5eea88b09",
"assets/assets/drawer/fav.png": "60898c0bcbf101a291e7103f765f5518",
"assets/assets/drawer/home.png": "6eb244cde3d1b2fa158787dee0ce949e",
"assets/assets/drawer/home1.png": "bf3c877956f050e0903bde13fd8e2a93",
"assets/assets/drawer/logout.png": "a862a395f244811592e8c1df6323c505",
"assets/assets/drawer/msg.png": "16310054d179471c49b91775414c415a",
"assets/assets/drawer/privacy.png": "a7d904069130a53265fc40e2a64d4b66",
"assets/assets/drawer/profile.png": "bec39522abacc4531fa7595d3384b65e",
"assets/assets/drawer/setting.png": "d46e57cfc2cc2c92962a8a53d172dbc6",
"assets/assets/drawer/term.png": "ddf67c3793d020ec6a9df52a37206e13",
"assets/assets/feature/built.png": "771f759f24a2946100733480ed108137",
"assets/assets/feature/cool.png": "40dd2b8e8255387b870fa030b9b8db21",
"assets/assets/feature/heat.png": "72242dca5751724a91c7b9de8177658b",
"assets/assets/feature/lot.png": "41cec3287a46ea7ff7c8da1f21b72268",
"assets/assets/feature/park.png": "1ad2095b929074c5dca261d1b1a355d4",
"assets/assets/feature/type.png": "9fc59983317aec7700c8f420c99b8761",
"assets/assets/icons/age.png": "37e2ea120abb4147c34c3900a68ed2cf",
"assets/assets/icons/camera.png": "9a654a9c450889eead188db0a3aebdba",
"assets/assets/icons/cross.png": "1cf335d6f6599cca8fff05cb87cb90a7",
"assets/assets/icons/drawer.png": "53995d7f9620e4f6aaaca29444dce6b3",
"assets/assets/icons/editp.png": "23985704d03bcc321db3914747f12c0a",
"assets/assets/icons/emoji.png": "1205a6a4b3cf0ac3e4981d63c0f1a66c",
"assets/assets/icons/filter.png": "afd1efd373d4f9a2da838b3c3329adab",
"assets/assets/icons/filter.svg": "9ad7680558883193a0b97415275eb192",
"assets/assets/icons/gender.png": "8b3ab6e9fdcff371c893283e1255e94c",
"assets/assets/icons/goal.png": "7938dd72b17522a8d74d673040fd711a",
"assets/assets/icons/heart.png": "88aed0009b2d8e50819432f4b78168d7",
"assets/assets/icons/hob.png": "612149c01ec6c3859d44fae072bbc5ec",
"assets/assets/icons/home1.png": "bf3c877956f050e0903bde13fd8e2a93",
"assets/assets/icons/knife.png": "da1f365c9db822027fe151f644da1de0",
"assets/assets/icons/link.png": "1ab2efb431b7b788beb2f18a0a3dc931",
"assets/assets/icons/logo.png": "e0edd4406c67e97949b25ad10cf15fa3",
"assets/assets/icons/logw.png": "3a7bdf361bd1e3490e2377039116564c",
"assets/assets/icons/map.png": "b12c62554bdb9da6827d526c49adf81a",
"assets/assets/icons/mic.png": "233e4f78b4d8b8304c19ea1a093f790b",
"assets/assets/icons/msg.png": "16310054d179471c49b91775414c415a",
"assets/assets/icons/p1.png": "6116d98a8e29a401c7924cc67db337e0",
"assets/assets/icons/phone.jpg": "b33ae4086e40587ab343f0bc894c8950",
"assets/assets/icons/pin.png": "73c0cad6963f0e713c15390b11c09faf",
"assets/assets/icons/pin3.png": "9c30ab4df6182e03071b7dac8cfca7ce",
"assets/assets/icons/search.png": "5b6ccd7314831ca217c7b134e2ff69e4",
"assets/assets/icons/send.png": "64280c4c783d72d102cf13f96429590c",
"assets/assets/icons/splash.png": "81c605d8b10dfd59b49e489b4d3241e3",
"assets/assets/images/b1.png": "c93ef8c68fe8ef20ae67db7cf688e500",
"assets/assets/images/b2.png": "2f4e193804321ade3959dc1a42a00583",
"assets/assets/images/b3.png": "434bb92117c3aeab1f4fb8a5e02b1392",
"assets/assets/images/blshade.png": "c7720423d006858133cb3c245f61fd75",
"assets/assets/images/botoom.png": "b75b07c080c4cebd9869a8ce14efada4",
"assets/assets/images/bshade.png": "54a74c1b3c7d5991e8717402f094f475",
"assets/assets/images/c1.png": "ac58268d6d9af1280a4a109feaf554d5",
"assets/assets/images/c2.png": "17a488da7018eefa6e2aeab52e377bd0",
"assets/assets/images/draw.png": "8e80133286a802eafa5d11b7ed1d9ac6",
"assets/assets/images/img2.jpg": "178d5531593a7a8bcb3d578dabdd9654",
"assets/assets/images/phone1.jpg": "afb572efd237f028809bac86dc5258bf",
"assets/assets/images/s2.png": "ba53fd8622ae9693b0987a80d1882431",
"assets/assets/images/set.png": "f02e01590372bdce7154982cdf57007c",
"assets/assets/images/setting.png": "30f84d4eee395e7eade972369edb31e1",
"assets/assets/images/testG.png": "067f2cf86e10f13aaa895819c5a3d6d5",
"assets/assets/images/top.png": "dc43263f77583a5d1840515e920afc2d",
"assets/assets/info/appICon.png": "405ee2b79c2b3f80e5b5c7c5af4510c2",
"assets/assets/info/bath.png": "1e9590163e95e8d4e9e2c76e192f291a",
"assets/assets/info/bed.png": "7c4069f677f1ea5ac3f810e125418f6d",
"assets/assets/info/pin.png": "9e11e56f1e3110c8f5cc0f4b08d6c661",
"assets/assets/info/price.png": "3d32d73fbbb1c4e57a1395fdf74bf13d",
"assets/assets/info/school.png": "aeee9f482b9502504068b2fe60d00eed",
"assets/assets/info/sqr.png": "3803a42f675720c7eb330375f2b8aea5",
"assets/assets/interior/base.png": "aec20f818fb72a7c99b2c1bf8266ec29",
"assets/assets/interior/floor.png": "42bea3f7d5e0fdd06b594869f3aaa294",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9b716acd33a5e705b216da39a3e8b85f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c05fef76f10d17efa7fc8ccbc2a09500",
"/": "c05fef76f10d17efa7fc8ccbc2a09500",
"main.dart.js": "61e93e0a5219e4a01f4459d2b0238a07",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"version.json": "53304d9c409c9520799cc313771fe16c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
