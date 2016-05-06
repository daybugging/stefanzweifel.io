var gulp      = require('gulp');

gulp.task('default', ['sass', 'build'] ,function() {
    gulp.watch('./src/**/*', ['build']);
    gulp.watch('./resources/sass/**/*.scss', ['sass']);
});

gulp.task('serve', require('./scripts/browserSync.js'));
gulp.task('sass', require('./scripts/css.js'));
gulp.task('uncss', require('./scripts/uncss.js'));
gulp.task('build', require('./scripts/metalsmith/build.js'));
gulp.task('deploy', require('./scripts/deploy.js'));
gulp.task('test', require('./scripts/test.js'));