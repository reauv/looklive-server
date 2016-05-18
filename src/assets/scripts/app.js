'use strict';

var spa = require('./spa');
var fonts = require('./fonts');
var appearance = require('./appearance');
var serviceWorker = require('./serviceWorker');

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
 * Logic that should be invoked on every page load. Also from changing URL
 * with pushstate/popstate.
 *
 * @return {void}
 */
function onPageLoad() {
    spa(onPageLoad);
    appearance();
    serviceWorker();
    fonts();
}

ready(onPageLoad);
