'use strict';

var gulp = require('gulp');
var Config = require('config');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('browser-sync').get('server');

/*
 |--------------------------------------------------------------------------
 | Scripts task
 |--------------------------------------------------------------------------
 | The scripts tasks concats all the JS files in the source directory and
 | all the bower dependencies specified in the config file.
 |
 */

var files = [].concat(Config.bowerDependencies, [
    Config.paths.scripts.src + 'app.js'
]);

gulp.task('scripts', function () {
    return gulp.src(files)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(Config.paths.scripts.dest))
        .pipe(server.stream());
});

gulp.task('scripts:production', function () {
    return gulp.src(files)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(Config.paths.scripts.dest));
});
