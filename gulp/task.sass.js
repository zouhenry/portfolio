/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'sass'
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    return gulp
      .src(config.sassSrc)
      .pipe(plugins.filelog())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({ errLogToConsole: true }))
      .on("error", errorFn)
      .pipe(plugins.concat("app.css"))
      .pipe(plugins.filelog())
      .pipe(plugins.sourcemaps.write("./"))
      .pipe(gulp.dest(config.destDir))
      .pipe(plugins.size());
  });
}
