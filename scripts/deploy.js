var gulp    = require('gulp');
var sftp    = require("gulp-sftp");
var fs      = require('fs');
var secrets = JSON.parse(fs.readFileSync('./secrets.json'));

module.exports = function () {

    gulp.src('dist/**/*.*')
        .pipe(sftp({
            host: secrets.deploy.host,
            user: secrets.deploy.user,
            remotePath: secrets.deploy.remotePath,
        }));

};