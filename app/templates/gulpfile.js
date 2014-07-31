'use strict';

var gulp = require('gulp'),
	open = require('gulp-open'),
    connect = require('gulp-connect');

var serverPort = 8080;

gulp.task('default', ['clean', 'server', 'broswer'], function () {
});

gulp.task('server', function() {
  connect.server({
    root: 'app',
    port: serverPort,
    livereload: true
  });

  gulp.watch(['app/**/*'], ['pageReload']);
});

gulp.task('pageReload', function() {
  gulp.src('app/')
    .pipe(connect.reload());
});

gulp.task("broswer", ['server'], function(){
  gulp.src("app/index.html")
  .pipe(open("", {url: "http://localhost:" + serverPort}));
});

gulp.task('clean', function() {
});
