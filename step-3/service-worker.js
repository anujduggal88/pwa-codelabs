var cacheName = 'cache-v2'; //Cache Name

//Files to cache
var filesToCache = [
	'./index.html',
	'./index.html?utm=homescreen', //Query strings are treated as seperate page
	'./css/styles.css',
  './js/menu.js',
	'./js/app.js',
	'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' //3rd party resource
];

//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('Event: Install');

  event.waitUntil(
  	//Open the cache
  	caches.open(cacheName)
  		.then(function (cache) {
  			//Adding the files to cache
  			return cache.addAll(filesToCache)
  				.then(function () {
  					console.log("[INSTALL] Files cached");
  				})
  		})
  		.catch(function (err) {
  			console.warn("[INSTALL] Error while caching ", err);
  		})
	);
});

// TODO: IMPLEMENT ACTIVATE EVENT LISTENER
self.addEventListener('activate', function (event) {
	console.info("[ACTIVATE]");

	// TODO: REMOVE OLD AND OTHER UNWANTED CACHES

});

// TODO: IMPLEMENT FETCH EVENT LISTENER
self.addEventListener('fetch', function (event) {
	console.info("[FETCH] Event Request: ", event.request.url);

	// TODO: INTERCEPT NETWORK REQUESTS AND RESPOND FROM CACHE IF AVAILABLE

});
