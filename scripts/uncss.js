import gulp from 'gulp';
import uncss from 'gulp-uncss';
import cleanCSS from 'gulp-clean-css';

module.exports = function () {

    return gulp.src('./dist/**/*.css')
        .pipe(uncss({
            html: ['./dist/**/*.html'],
            ignore: ['/hljs/']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/'));
};