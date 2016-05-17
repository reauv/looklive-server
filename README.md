# LookLive server
https://performance.rovansteen.nl

## Progressive web app - Research

What is a progressive web app? A progressive web app is an application that runs
in a browser that uses modern web features to enhance the experience of the user.
It combines the best parts of websites with the best parts of native apps, for example
it can load fast on slow networks, has an icon on the dashboard of the user's phone and
is able to send push notifications.

A good progressive web application fits the following requirements:
- Progressive: the application works for everyone, regardless of browser and device.
The better the browser/device the more the experience can be enhanced. But the core feature should work everywhere.
- Responsive: The application runs well on any form factor: small-, medium- and bigsized devices.
- Connectivity independent: The application does not require a connection to be available, or fast. It should be able to provide you with something when you're offline or have bad reception.
- Up-to-date: The app should always try to give you the last, fresh content.
- Installable: The user should be able to 'keep' the application on his device.
- Linkable: The application can be send around easily with a link and requires no installation.
- Discoverable: The application should be searchable by crawlers and support deep linking
- Safe: The application must use HTTPS to secure the connection between the user and the application/server

For a platflorm to support progressive web applications it basically has to implement two things:
- Service worker: A service worker works as a middleware between the browser and the application
and allows to cache, fetch things in the background etc. and give the application the power to manage
things outside being active in the browser.
- Manifest: The manifest file allows the application to specify things the system has to take care of,
like installation banners, icons, theme colors, orientation, notifications & permissions.

Unfortunately the support is not really good right now, Chrome, Firefox & Opera support service worker,
Edge is working on it, but Safari is really behind on this one. C'mon Apple!
The manifest file right now is only supported in Chrome & Opera, so much work to do there.


#### Sources:
- https://remysharp.com/2016/03/18/progressive-web-apps-the-long-game
- https://developers.google.com/web/progressive-web-apps?hl=en
- https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
- https://developer.chrome.com/apps/manifest
- http://developer.telerik.com/featured/what-progressive-web-apps-mean-for-the-web/
- https://jakearchibald.github.io/isserviceworkerready/

## Taskmanagers

A taskmanager is a tool that can run various tasks in the background or before deploying
to make some tedious tasks easier to do, like compiling SCSS to CSS or optimizing assets.

There are various tasks manager that I've worked with like Grunt, Rake, Make, Webpack & NPM.
They all have their up & downsides, but for most 'static websites' I tend to use Gulp.
For larger Node & JS applications I like to use NPM & Webpack.

The reason I prefer Gulp above Grunt is that the API is much more like a spoken language
and makes your task file much easier to reason about.

I went and looked at two other tasks tools I haven't used to see if they can convience me to
trade Gulp in for one of them.

### Broccoli
Broccoli describes itself as follwing:
> A fast, reliable asset pipeline, supporting constant-time rebuilds and compact build definitions.

After scrolling through some example code & the API I am not really liking it, it feels really
devious and compared to Gulp it's not elegant and self explanatory at all. They philosophy that
you export a tree from the broccoli is not something that really makes sense to me.

https://github.com/broccolijs/broccoli

### Mimosa
Mimosa works more out of the box, allowing you to just specify modules you want to use that 'just works'
if you have your files in the correct directory structure. It allows you to configure this so it fits
your project. I think Mimosa can get you up to speed really quickly but the downside is that it's
not an asset pipeline tool so it's not as flexible as Gulp or Grunt.

http://mimosa.io/index.html

Both didn't convience me that they are a better choice than Gulp. Also the big community of Gulp
plays a large part in the decision to stick with Gulp.








