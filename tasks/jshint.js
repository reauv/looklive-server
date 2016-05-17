'use strict';

var gulp = require('gulp');
var Config = require('config');
var jshint = require('gulp-jshint');

/*
 |--------------------------------------------------------------------------
 | JSHint task
 |--------------------------------------------------------------------------
 | The JSHint task runs JSHint for all the JS files in the source directory.
 |
 */

gulp.task('jshint', function() {
    return gulp.src(Config.paths.scripts.src + '*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
