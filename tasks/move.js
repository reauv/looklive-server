'use strict';

var del = require('del');
var gulp = require('gulp');
var Config = require('config');

/*
 |--------------------------------------------------------------------------
 | Move task
 |--------------------------------------------------------------------------
 | The move tasks moves folder to specific destinations.
 |
 */

gulp.task('move:production', function(callback) {
    del([Config.basePaths.dist]).then(function (paths) {
        gulp.src([
            Config.basePaths.tempDist + '**/*',
            Config.basePaths.tempDist + '.ht*',
            Config.basePaths.tempDist + '.htaccess',
            Config.basePaths.tempDist + '.xml',
            Config.basePaths.tempDist + '.txt'
        ])
            .pipe(gulp.dest(Config.basePaths.dist));
        callback();
    });
});
