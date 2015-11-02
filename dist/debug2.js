var gulp  = require('gulp');
var debug = require('gulp-debug');
var console = require('../index');
var cl = require('chalkline');

var files = './tasks/**/*.js';

console.init({timestamp: true});

console.line('data');

gulp.task('debug2', function () {
  return gulp.src(files)
    .pipe(debug())
    .pipe(gulp.dest('dist'))
    .pipe(console.flush.warn('*** All Done *** '))
});