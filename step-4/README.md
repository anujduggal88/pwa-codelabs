#Step-4: Fetch API and Offline
The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

Service workers provide the ability to intercept these requests made from our Progressive Web App using FETCH API and handle them within the service worker. We cache the response and load it offline.

##Implementation
To use FETCH API:
* Implement fetch() in *js/app.js*.
* Read through the json object received from the Github API using FETCH API.

##Running
You can see the data returned from Github API using FETCH API.

####Open [127.0.0.1:8888/step-4](http://127.0.0.1:8888/step-4) in your chrome browser.

Reload your page and then go to the *Cache Storage* pane on the *Application panel* of DevTools. Expand the section and you should see the name of your app shell cache listed on the left-hand side. When you click on your app shell cache you can see all of the resources that it has currently cached and loading offline.

##Troubleshooting
If you do not see the app as expected, try:
* Reload the page
* Clear the cache and reload the page again
