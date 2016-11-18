#Step-2: Service Worker
*Service Worker is the 'Network Interceptor'. It's a programmable network proxy under your control.*

This is an event driven script which runs in the background and sits in between your application and the browser. It can intercept and handle the network requests for the registered domain.

##Implementation
We need to register a Service Worker if it's available. This is the first step to make the app work offline. This script allows background functionality without the need for an open web page or user interaction.

####This takes two simple steps:
* Tell the browser to register the JavaScript file as the service worker.
* Create a JavaScript file containing the service worker.

##Running
Your registered Service Worker in action can be seen as:

####Open [127.0.0.1:8888/step-2](http://127.0.0.1:8888/step-2) in your chrome browser.
<br/>
Reload your app and see the console upon subsequent reloads.

##Troubleshooting
If you do not see the app as expected, try:
* Reload the page
* Clear the cache and reload the page again
