'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var GulpAppGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to GulpApp generator!'));

    var prompts = [{
      type: 'checkbox',
      name: 'features',
      message: 'Choose the module which you will use in this project: ',
      choices: [{
        name: 'jQuery',
        value: 'withJquery',
        checked: true
      },{
        name: 'less',
        value: 'withLess',
        checked: false
      },{
        name: 'coffee',
        value: 'withCoffee',
        checked: false
      },{
        name: 'uglify',
        value: 'withUglify',
        checked: false
      },{
        name: 'cssmin',
        value: 'withCssmin',
        checked: false
      }]
    }];

    this.prompt(prompts, function (answer) {
      var features = answer.features;

      function hasFeature(key) {
        return features && features.indexOf(key) !== -1;
      }

      this.installJquery = hasFeature('withJquery');
      this.installLess = hasFeature('withLess');
      this.installUglify = hasFeature('withUglify');
      this.installCoffee = hasFeature('withCoffee');
      this.installCssmin = hasFeature('withCssmin');

       done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/js');
    this.mkdir('app/css');  
    this.mkdir('app/images');
    
    this.copy('index.html', 'app/index.html');
    this.copy('style.css', 'app/css/style.css');
    this.copy('gulplogo.png', 'app/images/gulplogo.png');
  },

  projectfiles: function () {
    this.copy('../../README.md', 'README.md');
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    // this.copy('editorconfig', '.editorconfig');
    // this.copy('jshintrc', '.jshintrc');
  },

  gulpfile: function () {
    this.template('gulpfile.js');
  },

  install: function() {
    var done = this.async();
    var plugins = 
    [
      'gulp',
      'gulp-livereload',
      'gulp-serve',
      'connect-livereload',
      'gulp-watch',
      'gulp-load-plugins',
      'gulp-open',
      'gutil'
    ];
    this.pluginArray = [];

    if (this.installJquery) {
      this.copy('jquery-1.11.1.min.js', 'app/js/jquery.min.js');
    }

    if (this.installLess) {
      plugins.push('gulp-less', 'gulp-sourcemaps');
      this.pluginArray.push('less');
      this.mkdir('app/css/less');
      this.mkdir('app/css/maps');
      this.copy('style.less', 'app/css/less/style.less');
    }

    if (this.installUglify) {
      plugins.push('gulp-uglify', 'gulp-rename');
      this.pluginArray.push('uglify');
    }

    if (this.installCssmin) {
      plugins.push('gulp-cssmin', 'gulp-rename');
      this.pluginArray.push('cssmin');
    }

    if (this.installCoffee) {
      plugins.push('gulp-coffee');
      this.pluginArray.push('coffee');
      this.mkdir('app/js/coffee');
      this.copy('hello.coffee', 'app/js/coffee/hello.coffee');
    }

    require('./addtogulp')(this.pluginArray);
    this.npmInstall(plugins, { 'saveDev': true }, done);
  }
});

module.exports = GulpAppGenerator;
