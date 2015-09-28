var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var Server = require('karma').Server;

gulp.task('js', function() {
  return gulp.src('tinysequence.js')
    .pipe(uglify())
    .pipe(rename('tinysequence.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('build', ['test', 'js']);
gulp.task('default', ['tdd']);
