var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');

var paths = {
    sass: './_dev/sass/'
}

gulp.task('default', function() {
    gulp.watch(paths.sass + '*/*', ['sass']);
    gulp.watch(paths.sass + '*', ['sass']);
});


gulp.task('sass', function () {
    gulp.src(paths.sass + '*.scss')
        .pipe(sass())
        .pipe(minifyCSS( { keepBreaks:false } ))
        .pipe(gulp.dest('./css'));
});