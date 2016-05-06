var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');

// Compile sass into CSS & auto-inject into browsers
module.exports = function() {
    return gulp.src("./resources/sass/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest("./src/assets/css"))
        .pipe(browserSync.create().stream());
};