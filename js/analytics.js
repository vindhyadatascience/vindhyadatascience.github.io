// Google Analytics 4. Loaded by index.html and by each standalone static page
// under public/, so the measurement ID lives in exactly one place.
//
// The tag is skipped anywhere that isn't a real visitor. `npm run build` runs
// Puppeteer against a local preview server to prerender the SPA, and `make up`
// serves the site on localhost, so without this guard every build and every
// local page load would register as a pageview.
(function () {
  var MEASUREMENT_ID = 'G-FLK09F2C24';

  var host = location.hostname;
  var isLocal =
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host === '[::1]' ||
    host === '' ||
    host.endsWith('.local');

  if (isLocal || navigator.webdriver) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
})();
