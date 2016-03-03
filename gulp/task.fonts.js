/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'fonts'
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    return gulp
      .src(config.fontsSrc)
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destFontsDir))
      .pipe(plugins.size());
  });
}