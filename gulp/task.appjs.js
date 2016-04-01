/**
 * Created by hzou on 2/26/16.
 */

var uglify = require('gulp-uglify');

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'appjs'
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    return gulp
      .src(config.jsSrc)
      .pipe(plugins.filelog())
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.iife())
      .pipe(plugins.ngAnnotate())
      //.pipe(plugins.uglify())
      .pipe(plugins.concat("app.js"))
      .pipe(plugins.sourcemaps.write("."))
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir))
      .pipe(plugins.size());
  });
}