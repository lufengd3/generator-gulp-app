# [generator-gulp-app ](https://github.com/keith3/generator-gulp-app)

> [Yeoman](http://yeoman.io) generator

This is a webapp yeoman generator with [gulpjs](http://gulpjs.com) && livereload.

when you use this generator, it will generate a project struct as below：
- app/
	- index.html
	- js/
    	- coffee/ *if installed coffee plugin*
    		- hello.coffee
		- jquery-1.11.1.min.js
	- css/
    	- less/ *if installed less plugin*
    		- style.less
        - maps/ *if installed less plugin*
    	- style.css
	- images/
    	- gulplogo.png
- node_modules/
- gulpfile.js
- package.json
- bower.json
- README.md

## Getting Started

```bash
$ npm install -g yo

$ npm install -g generator-gulp-app
```
initiate the generator:

```bash
$ yo gulp-app
```

Start a local server to enable livereload:

```bash
$ gulp
```

## License

MIT
