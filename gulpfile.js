/**
 * Gulp specific Variables
 */
var config       = require('./gulpconfig.json'),
    gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    minifyCSS    = require('gulp-minify-css'),
    cssScss      = require('gulp-css-scss'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin     = require('gulp-imagemin');


/**
 * Default Task
 */
gulp.task('default', function() {
    gulp.watch('./src/_dev/sass/**/*.scss', ['css']);
    gulp.watch('./src/img/**/*', ['images']);
});


/**
 * Optimize Images
 */
gulp.task('images', function () {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./src/img/'));
});

/**
 * Build CSS for this site
 */
gulp.task('css', function() {

    gulp.src('./src/_dev/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS( { keepBreaks:false } ))
        .pipe(gulp.dest('./src/css'));

    gulp.watch('./src/_dev/sass/**/*.scss', ['css']);

});

/**
 * Transform CSS4 into SASS
 */
gulp.task('css-scss', function() {

  return gulp.src('./node_modules/basscss*/**/*.css')
    .pipe(cssScss())
    .pipe(gulp.dest('./src/_dev/sass/vendor'));

});