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
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.iife({
        useStrict: true,
        trimCode: true,
        prependSemicolon: false,
        bindThis: false
      }))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat("app.js"))
      .pipe(plugins.sourcemaps.write("./"))
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir))
      .pipe(plugins.size());
  });
}