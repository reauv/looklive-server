'use strict';

var gulp = require('gulp');
var Config = require('config');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var server = require('browser-sync').get('server');

/*
 |--------------------------------------------------------------------------
 | Styles task
 |--------------------------------------------------------------------------
 | The styles tasks compiles the main SCSS file and includes all the
 | partial files and automagically sets all the needed vendor prefixes.
 |
 */

gulp.task('styles', function () {
    return gulp.src(Config.paths.styles.src + '**/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest(Config.paths.styles.dest))
        .pipe(server.stream());
});

gulp.task('styles:production', function () {
    return gulp.src(Config.paths.styles.src + '**/*.css')
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(gulp.dest(Config.paths.styles.dest));
});
