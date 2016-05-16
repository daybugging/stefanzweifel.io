var gulp       = require("gulp");
var source     = require('vinyl-source-stream');
var babel      = require("babelify");
var browserify = require('browserify');

module.exports = function () {
    browserify("./resources/js/main.js", {
        debug: true
    })
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./src/assets/js/'));
};
