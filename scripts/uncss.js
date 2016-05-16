var gulp = require('gulp');
var uncss = require('gulp-uncss');
var cleanCSS = require('gulp-clean-css');

module.exports = function () {

    return gulp.src('./dist/**/*.css')
        .pipe(uncss({
            html: ['./dist/**/*.html'],
            ignore: ['/hljs/']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/'));
};