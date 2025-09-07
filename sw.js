const CACHE_NAME = 'times-table-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/play.html',
  '/highscores.html',
  '/instructions.html',
  '/options.html',
  '/block0/block0.html',
  '/block0/practice.html',
  '/block0/easy.html',
  '/block0/medium.html',
  '/block0/hard.html',
  '/block0/veryHard.html',
  '/block0/impossible.html',
  '/block0/block0HighScores.html',
  '/block0/block0Info.html',
  '/block1/block1.html',
  '/block1/level1_1.html',
  '/block1/level1_2.html',
  '/block1/level1_3.html',
  '/block1/level1_4.html',
  '/block1/level1_5.html',
  '/block1/level1_6.html',
  '/block1/level1_7.html',
  '/block1/level1_8.html',
  '/block1/level1_9.html',
  '/block1/level1_10.html',
  '/block1/block1HighScores.html',
  '/block1/block1Info.html',
  '/block2/block2.html',
  '/block2/level2_1.html',
  '/block2/level2_2.html',
  '/block2/level2_3.html',
  '/block2/level2_4.html',
  '/block2/level2_5.html',
  '/block2/level2_6.html',
  '/block2/level2_7.html',
  '/block2/level2_8.html',
  '/block2/level2_9.html',
  '/block2/level2_10.html',
  '/block2/block2HighScores.html',
  '/block2/block2Info.html',
  '/styles/default.css',
  '/js/localStorage.js',
  '/js/deviceReady.js',
  '/js/database.js',
  '/js/databaseBlock2.js',
  '/js/guessAndRandomNumber.js',
  '/js/timing.js',
  '/js/timingDown.js',
  '/js/createTable.js',
  '/pictures/background.png',
  '/pictures/background2.png',
  '/pictures/highscoreslogo.png',
  '/pictures/instructionslogo.png',
  '/pictures/infologo.png',
  '/pictures/optionslogo.png',
  '/pictures/logo.png',
  '/icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
