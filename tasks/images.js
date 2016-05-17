'use strict';

var gulp = require('gulp');
var Config = require('config');

/*
 |--------------------------------------------------------------------------
 | Images Task
 |--------------------------------------------------------------------------
 | The images tasks moves all the files in the image source folder to the
 | destination folder.
 |
 */

gulp.task('images', function() {
    return gulp.src(Config.paths.images.src + '**/*')
        .pipe(gulp.dest(Config.paths.images.dest));
});
