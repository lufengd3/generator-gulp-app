var fs = require('fs');

module.exports = function addtogulp(plugins) {
	var code = "";
	var less = "\n\n// compile less files"
			   + "\ngulp.task('less', function () {"
  			   + "\n    gulp.src('app/css/less/*.less')"
			   + "\n    .pipe($.sourcemaps.init())"
			   + "\n    .pipe($.less())"
			   + "\n    .on('error', console.error.bind('error'))"
			   + "\n    .pipe($.sourcemaps.write('maps'))"
			   + "\n    .pipe(gulp.dest('app/css'));"
			   + "\n});"
			   + "\n\ngulp.task('watchless', function() {"
			   + "\n    $.watch('app/css/less/*.less', function() {"
			   + "\n        gulp.start('less');"
			   + "\n    })"
			   + "\n})"
			   + "\n\ndefaultTask.push('watchless');";

	var coffee = "\n\n//compile coffee script"
				+ "\ngulp.task('coffee', function() {"
				+ "\n  gulp.src('app/js/coffee/*.coffee')"
				+ "\n    .pipe($.coffee({bare: true}))"
				+ "\n    .on('error', console.error.bind('error'))"
				+ "\n    .pipe(gulp.dest('app/js/'))"
				+ "\n});"
				+ "\n\ngulp.task('watchcoffee', function() {"
				+ "\n    $.watch('app/js/coffee/*.coffee', function() {"
				+ "\n        gulp.start('coffee');"
				+ "\n    })"
				+ "\n})"
				+ "\n\ndefaultTask.push('watchcoffee');";

	var uglify = "\n\n// Minify javascript files"
				+ "\ngulp.task('uglify', function() {"
			  	+ "\n    gulp.src(['app/js/*.js', '!app/js/*.min.js'])"
			    + "\n    .pipe($.uglify())"
			    + "\n    .pipe($.rename({suffix: '.min'}))"
			    + "\n    .pipe(gulp.dest('app/js'))"
				+ "\n});";

	var cssmin = "\n\ngulp.task('cssmin', function () {"
				+ "\n    gulp.src(['app/css/*.css', '!css/*.min.css'])"
				+ "\n        .pipe($.cssmin())"
				+ "\n        .pipe($.rename({suffix: '.min'}))"
				+ "\n        .pipe(gulp.dest('app/css'));"
				+ "\n});";

	// choose which part to appen to gulpfile.js
	for (var i in plugins) {
		switch(plugins[i]) {
			case "less":
				code += less;
				break;
			case "coffee":
				code += coffee;
				break;
			case "uglify":
				code += uglify;
				break;
			case "cssmin":
				code += cssmin;
				break;
			default:
				break;
		}
		console.log("Add new module: " + plugins[i]);
	}

	code += "\n\ngulp.task('default', defaultTask);";

	fs.appendFile('./gulpfile.js', code, function(err) {
		if (err) throw err;
	});
}
