/**
 * Created by hzou on 2/26/16.
 */

module.exports = function (name, group, task) {
  return function (gulp, plugins, config, _, errorFn) {
    gulp.task(module.exports.taskName, task);
  };
};
