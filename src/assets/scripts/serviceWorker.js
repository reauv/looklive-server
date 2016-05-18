/**
 * Initialize the service worker.
 */
var ServiceWorker = function () {
    if (process.env.NODE_ENV !== "production") return false;
    if (!('serviceWorker' in navigator)) return false;

    navigator.serviceWorker.register('/sw.js', { scope: './' })
        .then(function () {

        })
        .catch(function (error) {
            console.error('Error registering the service worker', error);
        });

    return true;
};

module.exports = ServiceWorker;
