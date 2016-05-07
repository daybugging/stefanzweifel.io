var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', ['sass', 'build'] ,function() {
    gulp.watch('./src/**/*', ['build']);
    gulp.watch('./resources/sass/**/*.scss', ['sass']);
});

gulp.task('serve', require('./scripts/browserSync.js'));
gulp.task('sass', require('./scripts/css.js'));
gulp.task('uncss', require('./scripts/uncss.js'));
gulp.task("js", require('./scripts/javascript.js'));
gulp.task('deploy', ['build'], require('./scripts/deploy.js'));
gulp.task('test', require('./scripts/test.js'));

// Task Executes build-metalsmith.js through node
gulp.task('build', function (cb) {
  exec('node ./scripts/metalsmith/build.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
