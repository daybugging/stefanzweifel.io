import gulp from 'gulp';
import textlint from 'gulp-textlint';

export default () =>  {

    let files = [
        // './src/articles/2016/*.md',
        './src/projects/**/*.md',
        './src/pages/**/*.md'
    ];


    return gulp.src(files)
        .pipe(textlint({
            formatterName: "pretty-error"
        }));

}