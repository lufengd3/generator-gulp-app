/**
 * @author 快餐店长
 * @email hi@lufeng.me
 */
 
'use strict';
 
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var GulpxGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });

    this.log('Start!');
  },


  /*askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Hello, this is Gulpx generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },*/

  app: function () {
    this.mkdir('app');
    this.mkdir('app/src/js');
    this.mkdir('app/src/css');
    this.mkdir('app/dest/js');
    this.mkdir('app/dest/css');
    this.mkdir('app/image');
    this.copy('index.html', 'app/index.html');
    this.copy('_package.json', 'package.json');
  },

  gulp: function() {
    var done = this.async();
    this.npmInstall(['gulp', 'gulp-connect'], { 'saveDev': true }, done);
    this.template('gulpfile.js');
  },
});

module.exports = GulpxGenerator;
