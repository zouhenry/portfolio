/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'clean',
  group     : {
    "default": 0,
    "deploy" : 0
  }
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    return plugins.del([config.destDir]);
  });
}