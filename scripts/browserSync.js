var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {

    browserSync.init({
        server: {
            baseDir: "./dist",
        },
        open: false
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("./dist/*.html").on('change', browserSync.reload);

};