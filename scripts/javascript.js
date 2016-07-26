import gulp from 'gulp';
import source from 'vinyl-source-stream';
import babel from 'babelify';
import browserify from 'browserify';

module.exports = function () {
    browserify("./resources/js/main.js", {
        debug: true
    })
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./src/assets/js/'));
};
