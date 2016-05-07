var gulp = require('gulp');
var uncss = require('gulp-uncss');

module.exports = function () {

    return gulp.src('./dist/**/*.css')
        .pipe(uncss({
            html: ['./dist/**/*.html'],
            ignore: ['/hljs/']
        }))
        .pipe(gulp.dest('./dist/'));
};