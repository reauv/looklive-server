/**
 * Set the classes on the appearence page.
 *
 * @return {void}
 */
function appearance() {
    var firstIndicator;
    var indicators = document.querySelectorAll('.product-indicator');
    var firstProduct = document.querySelector('.appearance__item__product');

    if (!/appearance/.test(window.location.href)) {
        return;
    }

    firstIndicator = document.querySelector(
        '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
    );

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

module.exports = appearance;
