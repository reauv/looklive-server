'use strict';

var gulp = require('gulp');
var server = require('browser-sync').get('server');

/*
 |--------------------------------------------------------------------------
 | Refresh task
 |--------------------------------------------------------------------------
 | The refresh task forces a refresh of the Browser Sync server.
 |
 */

gulp.task('refresh', function (callback) {
    server.reload();
    callback();
});
