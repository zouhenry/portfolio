/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'jade'
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    return gulp
      .src(config.jadeSrc)
      .pipe(plugins.jade())
      .pipe(plugins.templateCache('templates.js', {
        module    : 'portfolio.tpls',
        standalone: true
      }))
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir + "/js/"));
  });
}