'use strict';

/*
 |--------------------------------------------------------------------------
 | Set the root as path to require from.
 |--------------------------------------------------------------------------
 */
require('app-module-path').addPath(__dirname);

/*
 |--------------------------------------------------------------------------
 | Load the global modules.
 |--------------------------------------------------------------------------
 */
var gulp = require('gulp');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');


/*
 |--------------------------------------------------------------------------
 | Load all the tasks recursively.
 |--------------------------------------------------------------------------
 */
requireDir('./tasks', { recurse: true });

gutil.log(gutil.colors.green('Hey there, let\'s build something awesome!'));

/*
 |--------------------------------------------------------------------------
 | Default task
 |--------------------------------------------------------------------------
 | The default tasks builds the application and sets up a
 | watcher & browser sync.
 |
 */
gulp.task('default', function (callback) {
    runSequence('build', 'watch', 'browser-sync', callback);
});

/*
 |--------------------------------------------------------------------------
 | Build task
 |--------------------------------------------------------------------------
 | The build tasks builds the application.
 |
 */
gulp.task('build', function (callback) {
    runSequence('cleanup', 'views', ['htdocs', 'images', 'jshint', 'scripts', 'styles'], callback);
});

/*
 |--------------------------------------------------------------------------
 | Compile task
 |--------------------------------------------------------------------------
 | The compile tasks builds the application for production, sets revision
 | and sync assets with S3.
 |
 */
gulp.task('compile', function (callback) {
    runSequence('cleanup', 'views', ['htdocs', 'images', 'scripts:production', 'styles:production'], 'rev', 'move:production');
});
