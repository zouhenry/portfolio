/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName: 'index',
  group     : {
    "default": 1,
    "deploy" : 1
  }
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    return gulp
      .src(config.indexSrc)
      .pipe(plugins.jade())
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir));
  });
}