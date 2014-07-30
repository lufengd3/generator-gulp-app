# generator-gulpx 

> [Yeoman](http://yeoman.io) generator

This is a webapp yeoman generator with [gulpjs](http://gulpjs.com) && livereload.


when you use this generator, it will generate a project struct as below：
- app/
	- index.html
	- js/
		jquery-1.11.1.min.js
	- css/
	- images/
- node_modules/
- gulpfile.js
- package.json

## Getting Started

### [What's livereload](http://lufeng.me/post/livereload)

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-gulpx from npm, run:

```bash
$ npm install -g generator-gulpx
```

Finally, initiate the generator:

```bash
$ yo gulpx
```

Start a local server to enable livereload:

```bash
$ gulp
```

### Done! Visit http://localhost:8080 and write your code just save without refresh broswer !

## License

MIT
