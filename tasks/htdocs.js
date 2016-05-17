'use strict';

var gulp = require('gulp');
var Config = require('config');

/*
 |--------------------------------------------------------------------------
 | HTDocs task
 |--------------------------------------------------------------------------
 | The HTDocs task moves all the '.ht*' files from the source to the
 | destination path.
 |
 */

gulp.task('htdocs', function() {
    return gulp.src([
	    	Config.paths.htdocs.src + '**/*',
	    	Config.paths.htdocs.src + '.ht*',
	    	Config.paths.htdocs.src + '.htaccess',
	    	Config.paths.htdocs.src + '.xml',
	    	Config.paths.htdocs.src + '.txt'
    	])
        .pipe(gulp.dest(Config.paths.htdocs.dest));
});
