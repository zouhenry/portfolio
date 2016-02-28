/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("index", function () {
    gulp
      .src(config.indexSrc)
      .pipe(plugins.jade())
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir));
  });
}