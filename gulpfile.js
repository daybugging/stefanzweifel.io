/**
 * Gulp specific Variables
 */
var config       = require('./gulpconfig.json'),
    gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    minifyCSS    = require('gulp-minify-css'),
    tinypng      = require('gulp-tinypng'),
    cssScss      = require('gulp-css-scss'),
    autoprefixer = require('gulp-autoprefixer');


/**
 * Default Task
 * Watch for changes in SASS Files
 */
gulp.task('default', function() {
    gulp.watch('./_dev/sass/**/*.scss', ['css']);
});


/**
 * Compress PNG Files by tinypng.com API
 * Define API key in gulpconfig.json
 */
gulp.task('png', function () {
    return gulp.src('./_dev/images_to_compress/**/*.png')
        .pipe(tinypng( config.tinypng_api_key ))
        .pipe(gulp.dest('img'));
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