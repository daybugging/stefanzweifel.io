import gulp from 'gulp';
import textlint from 'gulp-textlint';

module.exports = function () {

  return gulp.src('./src/**/*.md')
    .pipe(textlint({
        formatterName: "pretty-error"
    }));

};