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
    gulp.watch('./_dev/sass/**/*.scss', ['css']);
    gulp.watch('./img/**/*', ['images']);
});


/**
 * Optimize Images
 */
gulp.task('images', function () {

    return gulp.src('img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('img/'));
});

/**
 * Build CSS for this site
 */
gulp.task('css', function() {

    gulp.src('./_dev/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS( { keepBreaks:false } ))
        .pipe(gulp.dest('./css'));

    gulp.watch('./_dev/sass/**/*.scss', ['css']);

});

/**
 * Transform CSS4 into SASS
 */
gulp.task('css-scss', function() {

  return gulp.src('./node_modules/basscss*/**/*.css')
    .pipe(cssScss())
    .pipe(gulp.dest('./_dev/sass/vendor'));

});