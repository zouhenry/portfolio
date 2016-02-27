/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("jade", function () {
    gulp
      .src(config.jadeSrc)
      .pipe(plugins.jade())
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir));
  });
}