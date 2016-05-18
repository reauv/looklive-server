var html = document.documentElement;
var FontFaceObserver = require('fontfaceobserver');

var fonts = function () {
    var raleway400 = new FontFaceObserver('Raleway', { weight: 400 });
    var raleway700 = new FontFaceObserver('Raleway', { weight: 700 });

    Promise.all([raleway400.load(), raleway700.load()]).then(function () {
        html.classList.add('fonts-loaded');
    }).catch(function () {
        html.classList.add('fonts-failed');
    });
};

module.exports = fonts;
