'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create('server');

/*
 |--------------------------------------------------------------------------
 | Browser Sync Task
 |--------------------------------------------------------------------------
 | The browser sync tasks sets up a browser sync server that serves the
 | build directory.
 |
 */

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'localhost:8100',
        browser: 'google chrome'
    });
});

gulp.task('server.pause', function (callback) {
    browserSync.pause();
    callback();
});

gulp.task('server.resume', function (callback) {
    browserSync.resume();
    callback();
});
