var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-ui.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});


gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});








gulp.task('build', function() {
  gulp.start('jsBrowserify');
});
