#Step-3: Intercept Network Requests
Service workers provide the ability to intercept requests made from our Progressive Web App and handle them within the service worker. That means we can determine how we want to handle the request and potentially serve our own cached response.

##Implementation
To see the App Shell loading from the cache and Service Worker intercepting network requests, do the following:
* Serve App Shell from Cache.
* Evaluate network requests that trigger fetch event. Respond with a file if it is available in cache or use fetch to get a copy from network in the 'fetch' event listener:
```sh
self.addEventListener('fetch', function(event) {
  // Do something interesting with the fetch here
});
```

##Running
You can see how network requests are intercepted by Service Worker.

####Open [127.0.0.1:8888/step-3](http://127.0.0.1:8888/step-3) in your chrome browser.

Reload your page and then go to the *Cache Storage* pane on the *Application panel* of DevTools. Expand the section and you should see the name of your app shell cache listed on the left-hand side. When you click on your app shell cache you can see all of the resources that it has currently cached.

##Troubleshooting
If you do not see the app as expected, try:
* Reload the page
* Clear the cache and reload the page again
