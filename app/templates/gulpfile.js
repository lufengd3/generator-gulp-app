'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default', ['clean', 'server'], function () {
});

gulp.task('server', function() {
  connect.server({
    root: 'app',
    livereload: true
  });

  gulp.watch(['app/*'], ['pageReload']);
});

gulp.task('pageReload', function() {
  gulp.src('app/*')
    .pipe(connect.reload());
});

gulp.task('clean', function() {
});
