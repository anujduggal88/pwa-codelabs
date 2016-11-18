#Step-1: App Shell Architecture
*App Shell is minimal HTML, CSS, Javascript required to power the user interface of Progressive Web App.*

App shell architecture separates the core application infrastructure and UI from the data. All of the UI and infrastructure is cached locally using a service worker so that on subsequent loads, the Progressive Web App only needs to retrieve the necessary data, instead of having to load everything.

This allows you to focus on speed, giving your Progressive Web App similar properties to native apps: instant loading and regular updates, all without the need of an app store.

##Implementation
The first step is to break the design down into its core components.
<br/>
####You need to think:
* What needs to be on screen immediately?
* What other UI components are key to our app?
* What supporting resources are needed for the app shell? For example images, JavaScript, styles, etc.

##Running
Now that you've got the core HTML, styles and JavaScript, it's time to run the app.

####Open [127.0.0.1:8888/step-1](http://127.0.0.1:8888/step-1) in your chrome browser.
<br/>
Reload your app. The result should be a nicely formatted screen with header and menu options.

##Troubleshooting
If you do not see the app as expected, try:
* Reload the page
* Clear the cache and reload the page again
