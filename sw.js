this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
								'/',							
								'img/menu-open-icon-24px.svg',
								'img/menu-close-icon-24px.svg',
								'img/list-icon-24px.svg',
								'img/grid-icon-24px.svg',	
								'img/check-icon-24px.svg',
								'img/favicon-16x16.png',
								'img/favicon-32x32.png',
								'img/apple-touch-icon.png',
								'img/icon-72x72.png',	
								'img/icon-96x96.png',
								'img/icon-128x128.png',	
								'img/icon-144x144.png',
								'img/icon-152x152.png',	
								'img/icon-192x192.png',	
								'img/icon-384x384.png',
								'img/icon-512x512.png',	
								'img/maskable_icon.png',
								'img/picture_1x1.svg',								
								'img/hero-bg.svg',
								'manifest.json'								
            ])
            .then(function() {
                console.log('Success! App is available offline!');
            })
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            return response || fetch(event.request);
        })
    );
});
