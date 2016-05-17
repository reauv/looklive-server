'use strict';

var gulp = require('gulp');
var Config = require('config');
var Rev = require('gulp-rev-all');

/*
 |--------------------------------------------------------------------------
 | Rev task
 |--------------------------------------------------------------------------
 | The rev tasks sets revision on the assets to force cache busting whenever
 | the content of the file is changed.
 | To support CDN hosting it also replaces the original path with the CDN's.
 */

var rev = new Rev({
    dontGlobal: [
        /.*\/sw.js/g,
        /^\/.htaccess/g,
        /^\/sitemap.xml/g,
        /^\/app.manifest/g,
        /.*\.(txt|ico|php|zip|xml|ttf|eot)/g
    ],
    dontRenameFile: [/^\/favicon.ico$/g, /.*\.html/g, /.*\.hbs/g],
    debug: true
});

gulp.task('rev', function () {
    return gulp.src(Config.basePaths.dest + '**/*')
        .pipe(rev.revision())
        .pipe(gulp.dest(Config.basePaths.tempDist));
});
