/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("fonts", function () {
    gulp
      .src(config.fontsSrc)
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destFontsDir))
      .pipe(plugins.size());
  });
}