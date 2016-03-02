/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'watch',
  group     : {
    "default": 2
  }
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    gulp.watch(config.jsSrc, ["js"]);
    gulp.watch(config.jadeSrc, ["jade"]);
    gulp.watch(config.sassSrc, ["sass"]);
  });
}