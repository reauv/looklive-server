'use strict';

var del = require('del');
var gulp = require('gulp');
var Config = require('config');
var gutil = require('gulp-util');

/*
 |--------------------------------------------------------------------------
 | Cleanup task
 |--------------------------------------------------------------------------
 | The cleanup tasks removes the destination and the distribution folders.
 |
 */

gulp.task('cleanup', function (callback) {
    del([Config.basePaths.dest, Config.basePaths.tempDist]).then(function (paths) {
        callback();
    });
});
