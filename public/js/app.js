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

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });
}());

