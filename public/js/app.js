(function () {
    'use strict';

    /**
     * Invoked when the page is ready.
     *
     * @param  {Function} fn
     * @return {void}
     */
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    /**
     * Set the classes on the appearence page.
     *
     * @return {void}
     */
    function appearance() {
        if (!/appearance/.test(window.location.href)) {
            return;
        }

        var firstProduct = document.querySelector('.appearance__item__product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('is-active');
        firstIndicator.classList.add('is-active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.is-active')
                    .classList.remove('is-active');

                document
                    .querySelector('.is-active')
                    .classList.remove('is-active');

                document
                    .querySelector('.appearance__item__product[data-uuid="' + id + '"]')
                    .classList.add('is-active');

                event.currentTarget.classList.add('is-active');
            });
        });
    }

    /**
     * Set up everything that is needed for a single page application.

     * @return {void}
     */
    function spa() {
        var anchors = document.querySelectorAll('a[href^="/"]');

        Array.prototype.forEach.call(anchors, function (anchor) {
            anchor.addEventListener('click', function (event) {
                event.preventDefault();

                var href = event.currentTarget.getAttribute('href');
                history.pushState(null, null, href);
                fetchHTML(href);
            });
        });

        window.addEventListener('popstate', function() {
            fetchHTML(window.location.pathname);
        });
    }

    /**
     * Fetch the HTML for the href that is passed in.
     *
     * @param  {String} href
     * @return {void}
     */
    function fetchHTML(href) {
       fetch('http://0.0.0.0:3000/api' + href)
           .then(function(response) { return response.text(); })
           .then(function(body) {
               document.querySelector('.inner-wrapper')
                   .innerHTML = body;

               onPageLoad();
           });
    }

    /**
     * Logic that should be invoked on every page load. Also from changing URL
     * with pushstate/popstate.
     *
     * @return {void}
     */
    function onPageLoad() {
        spa();
        appearance();
    }

    ready(onPageLoad);
}());

