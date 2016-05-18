'use strict';

var basePaths = {
    src: './src/',
    dist: './dist/',
    dest: './build/',
    tempDist: './_dist/'
};

var paths = {
    styles: {
        src: basePaths.src + 'assets/styles/',
        dest: basePaths.dest + 'static/styles/'
    },
    scripts: {
        src: basePaths.src + 'assets/scripts/app.js',
        dest: basePaths.dest + 'static/scripts/'
    },
    htdocs: {
        src: basePaths.src + 'htdocs/',
        dest: basePaths.dest + 'static/'
    },
    views: {
        src: basePaths.src + 'views/',
        dest: basePaths.dest + 'views/'
    },
    images: {
        src: basePaths.src + 'assets/images/',
        dest: basePaths.dest + 'static/images/'
    },
    bower: {
        src: './bower_components/'
    }
};

var bowerDependencies = [];

module.exports = {
    basePaths: basePaths,
    paths: paths,
    bowerDependencies: bowerDependencies
};
