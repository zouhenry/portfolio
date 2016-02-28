/**
 * Created by hzou on 2/26/16.
 */


module.exports = {
  isGulpTask: true,
  init      : init
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("js", function () {
    gulp
      .src(config.jsVendorSrc.concat(config.jsSrc))
      .pipe(plugins.filelog())
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.iife())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat("app.js"))
      .pipe(plugins.sourcemaps.write("./"))
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir))
      .pipe(plugins.size());
  });
}