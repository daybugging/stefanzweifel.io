var gulp      = require('gulp');
var clean = require('gulp-clean');

module.exports = function (){
    return gulp.src('./dist', {read: false})
        .pipe(clean());
};