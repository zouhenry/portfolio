var gulp    = require("gulp");
var plugins = { //gulp plugins
  concat       : require("gulp-concat"),
  del          : require("del"),
  filelog      : require("gulp-filelog"),
  uglify       : require("gulp-uglify"),
  ngAnnotate   : require("gulp-ng-annotate"),
  sourcemaps   : require("gulp-sourcemaps"),
  sass         : require("gulp-sass"),
  size         : require("gulp-size"),
  jade         : require("gulp-jade"),
  iife         : require("gulp-iife"),
  templateCache: require('gulp-angular-templatecache'),
  runSequence  : require('run-sequence')
};

/*========================================
 =                 lodash                =
 ========================================*/
var _ = require('lodash');
_.mixin(require('underscore.string').exports());

/*========================================
 =              gulp config              =
 ========================================*/
var config = require('./gulp/config.json');

/*========================================
 =             init tasks                =
 ========================================*/
var tasksFiles = require('require-dir')('./gulp/');

//constructors this array to be consued by runSequence:
//{
//  default: [['clean'],
//    ['fonts', 'index', 'jade', 'js', 'sass'],
//    ['watch']]
//}
var taskGroups = {};

_.forEach(tasksFiles, function (task) {
  if (task.isGulpTask) {
    //initialize each task
    task.init(gulp, plugins, config, _, errorFn);
    _.forEach(task.group, function (order, name) {
      taskGroups[name]        = taskGroups[name] || [];
      taskGroups[name][order] = taskGroups[name][order] || [];
      taskGroups[name][order].push(task.taskName);
    });
  }
});

// foreach taskGroups dynamically create a new task and run the tasks through runSequence
_.forEach(taskGroups, function (taskGroupItems, taskGroupName) {
  gulp.task(taskGroupName, function () {
    return plugins.runSequence.apply(plugins.runSequence, taskGroupItems);
  });
});

/*========================================
 =           error handling              =
 ========================================*/
gulp.on("err", errorFn);

function errorFn(err) {
  console.error(err.toString());
  this.emit("end");
}