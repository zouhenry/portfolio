/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'vendorjs'
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    return gulp
      .src(config.jsVendorSrc)
      .pipe(plugins.filelog())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat("vendor.js"))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write("./"))
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir))
      .pipe(plugins.size());
  });
}