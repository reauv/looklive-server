'use strict';

var gulp = require('gulp');
var Config = require('config');
var envify = require('envify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var server = require('browser-sync').get('server');

/*
 |--------------------------------------------------------------------------
 | Scripts task
 |--------------------------------------------------------------------------
 | The scripts tasks uses browserify to bundle all the JavaScript together in
 | a single file.
 |
 */

var options = {
    entries: [Config.paths.scripts.src],
    transform: [envify]
};

var b = watchify(browserify(options));

gulp.task('scripts', function () {
    return b.bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest(Config.paths.scripts.dest))
        .pipe(server.stream());
});

gulp.task('scripts:production', function () {
    return browserify(options)
        .bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest(Config.paths.scripts.dest))
        .pipe(buffer())
        .pipe(uglify());
});

module.exports = {
    watchify: b
};
