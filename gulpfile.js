var gulp    = require("gulp");
var plugins = { //gulp plugins
  concat    : require("gulp-concat"),
  del       : require("del"),
  filelog   : require("gulp-filelog"),
  uglify    : require("gulp-uglify"),
  ngAnnotate: require("gulp-ng-annotate"),
  sourcemaps: require("gulp-sourcemaps"),
  sass      : require("gulp-sass"),
  size      : require("gulp-size"),
  jade      : require("gulp-jade")
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
var tasks = require('require-dir')('./gulp/');

_.forEach(tasks, function (task, name) {
  console.log('tasks name', name);
  if (_.get(task, "isGulpTask")) {
    //initialize each task
    task.init(gulp, plugins, config, _, errorFn);
  }
});

/*========================================
 =           error handling              =
 ========================================*/
gulp.on("err", errorFn);

function errorFn(err) {
  console.error(err.toString());
  this.emit("end");
}