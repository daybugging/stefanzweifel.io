import gulp from 'gulp';
import browserSync from 'browser-sync';

let browser = browserSync.create();

module.exports = function() {

    browser.init({
        server: {
            baseDir: "./dist",
        },
        open: false
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("./dist/*.html").on('change', browser.reload);

};