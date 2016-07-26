import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

// Compile sass into CSS & auto-inject into browsers
module.exports = function() {
    return gulp.src("./resources/sass/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest("./src/assets/css"))
        .pipe(browserSync.create().stream());
};