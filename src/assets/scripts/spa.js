var onPageLoad = function () {};

/**
 * Fetch the HTML for the href that is passed in.
 *
 * @param  {String} href
 * @return {void}
 */
function fetchHTML(href) {
   fetch('/api' + href)
       .then(function (response) { return response.text(); })
       .then(function (body) {
           document.querySelector('.inner-wrapper')
               .innerHTML = body;

           onPageLoad();
       });
}

/**
 * Set up everything that is needed for a single page application.

 * @return {void}
 */
function spa(callback) {
    var anchors = document.querySelectorAll('a[href^="/"]');

    onPageLoad = callback;

    Array.prototype.forEach.call(anchors, function (anchor) {
        anchor.addEventListener('click', function (event) {
            var href = event.currentTarget.getAttribute('href');

            history.pushState(null, null, href);
            fetchHTML(href);

            event.preventDefault();
        });
    });

    window.addEventListener('popstate', function () {
        fetchHTML(window.location.pathname);
    });
}

module.exports = spa;
