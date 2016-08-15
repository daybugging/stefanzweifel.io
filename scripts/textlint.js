import gulp from 'gulp';
import textlint from 'gulp-textlint';

export default () =>  {

    return gulp.src('./src/**/*.md')
        .pipe(textlint({
            formatterName: "pretty-error"
        }));

}