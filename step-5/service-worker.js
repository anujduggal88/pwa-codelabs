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

//Adding 'activate' event listener
self.addEventListener('activate', function (event) {
	console.info("[ACTIVATE]");

	// TODO: REMOVE OLD AND OTHER UNWANTED CACHES

  //Remove old cache-v1 and other unwanted caches
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cache) {
          console.log(cache)
          if (cache !== cacheName) {     //cacheName = 'cache-v1'
            return caches.delete(cache); //Deleting the cache
          }
        })
      );
    })
  );
});

//Adding 'fetch' event listener
self.addEventListener('fetch', function (event) {
	console.info("[FETCH] Event Request: ", event.request.url);

  var request = event.request;

  //Tell the browser to wait for network request and respond with below
  event.respondWith(
    //If request is already in cache, return it
    caches.match(request).then(function(response) {
      if (response) {
				console.log("[FETCH] Service Worker returning from Cache");
        return response;
      }

      //else add the request to cache and return the response
      return fetch(request).then(function(response) {
				console.log("[FETCH] Service Worker returning from Network");

				// User is Online but wrong URL and page not found
	      if(response.status === 404){
	        // Page Not Found - Return Custom Error Message:
	        return new Response('Whooops! You\'re looking for something that doesn\'t exist. Page not found!');
	      }

        var responseToCache = response.clone(); //Cloning the response stream in order to add it to cache
        caches.open(cacheName).then(
          function(cache) {
            cache.put(request, responseToCache); //Adding to cache
          });

        return response;
      });
    })
  );
});
