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
    this.mkdir('app/js');
    this.mkdir('app/css');
    this.mkdir('app/images');
    this.copy('index.html', 'app/index.html');
    this.copy('jquery-1.11.1.min.js', 'app/js/jquery.js');
  },

  gulp: function() {
    var done = this.async();
    this.npmInstall(['gulp', 'gulp-connect'], { 'saveDev': true }, done);
    this.template('gulpfile.js');
  },
});

module.exports = GulpxGenerator;
