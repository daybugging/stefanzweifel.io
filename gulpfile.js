var gulp      = require('gulp');
var sass      = require('gulp-sass');

gulp.task('default',['serve', 'build']);

gulp.task('build', require('./scripts/metalsmith/build.js'));

gulp.task('deploy', function() {
    console.log('Upload Website to Server ...');
});

gulp.task('test', function() {
    console.log('Trigger Test Suite here ...');
});

gulp.task('serve', require('./scripts/browserSync.js'));

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(require('browser-sync').create().stream());
});