/**
 * Gulp specific Variables
 */
var config    = require('./gulpconfig.json'),
    gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');
    tinypng   = require('gulp-tinypng');

/**
 * Projects paths
 * @type {Object}
 */
var paths = {
    sass: './_dev/sass/'
}

/**
 * Default Task
 * Watch for changes in SASS Files
 */
gulp.task('default', function() {
    gulp.watch(paths.sass + '*/*', ['sass']);
    gulp.watch(paths.sass + '*', ['sass']);
});

/**
 * SASS and Minify Stylesheets
 */
gulp.task('sass', function () {
    gulp.src(paths.sass + '*.scss')
        .pipe(sass())
        .pipe(minifyCSS( { keepBreaks:false } ))
        .pipe(gulp.dest('./css'));
});

/**
 * Compress PNG Files by tinypng.com API
 * Define API key in gulpconfig.json
 */
gulp.task('png', function () {
    gulp.src('img/**/*.png')
        .pipe(tinypng( config.tinypng_api_key ))
        .pipe(gulp.dest('img'));
});