'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify');

gulp.task('default', ['clean', 'server'], function () {
});

gulp.task('server', function() {
  connect.server({
    root: 'app',
    livereload: true
  });

  gulp.watch(['app/*.html'], ['pageReload']);
});

gulp.task('pageReload', function() {
  gulp.src('app/*.html')
    .pipe(connect.reload());
});

gulp.task('clean', function() {
});

// Minify javascript files
gulp.task('uglify', function() {
  gulp.src('/app/src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('/app/dest/js/'))
});