'use strict';

var gulp = require('gulp');
var Config = require('config');
var imagemin = require('gulp-imagemin');

/*
 |--------------------------------------------------------------------------
 | Images Task
 |--------------------------------------------------------------------------
 | The images tasks moves all the files in the image source folder to the
 | destination folder.
 |
 */

gulp.task('images', function () {
    return gulp.src(Config.paths.images.src + '**/*')
        .pipe(gulp.dest(Config.paths.images.dest));
});

gulp.task('images:production', function () {
    return gulp.src(Config.paths.images.src + '**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(Config.paths.images.dest));
});
