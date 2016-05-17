'use strict';

var gulp = require('gulp');
var Config = require('config');

/*
 |--------------------------------------------------------------------------
 | Views Task
 |--------------------------------------------------------------------------
 | The view tasks move the hbs templates to the destination directory.
 |
 */

gulp.task('views', function () {
    return gulp.src(Config.paths.views.src + '**/*')
        .pipe(gulp.dest(Config.paths.views.dest));
});
