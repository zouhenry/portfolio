/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("clean", function () {
    plugins.del([config.destDir + "**"]);
  });
}