'use strict';

var gulp = require('gulp');
var Config = require('config');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

/*
 |--------------------------------------------------------------------------
 | Watch task
 |--------------------------------------------------------------------------
 | The watch task watches the source directories and execute the corresponding
 | task when a file has changed.
 |
 */

gulp.task('watch', function () {
    watch(Config.paths.images.src + '**/*.*', function () {
        gutil.log(gutil.colors.yellow('File in ' + Config.paths.images.src + ' has changed.'));
        runSequence('images');
    });
    watch(Config.paths.scripts.src + '**/*.js', function () {
        gutil.log(gutil.colors.yellow('File in ' + Config.paths.scripts.src + ' has changed.'));
        runSequence(['jshint', 'scripts']);
    });
    watch(Config.paths.styles.src + '/**/*.css', function () {
        gutil.log(gutil.colors.yellow('File in ' + Config.paths.styles.src + ' has changed.'));
        runSequence('styles');
    });
    watch(Config.paths.htdocs.src + '**/*.*', function () {
        gutil.log(gutil.colors.yellow('File in ' + Config.paths.htdocs.src + ' has changed.'));
        runSequence('htdocs');
    });
    watch(Config.paths.views.src + '**/*.*', function () {
        gutil.log(gutil.colors.yellow('File in ' + Config.paths.html.src + ' has changed.'));
        runSequence('refresh');
    });
});
