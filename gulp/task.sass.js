/**
 * Created by hzou on 2/26/16.
 */

module.exports = {
  isGulpTask: true,
  init      : init
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("sass", function () {
    gulp
      .src(config.sassSrc)
      .pipe(plugins.filelog())
      .pipe(plugins.sass({ errLogToConsole: true }))
      .on("error", errorFn)
      //.pipe(gulp.dest("./tmp/"))
      .pipe(plugins.concat("app.css"))
      .pipe(plugins.filelog())
      .pipe(gulp.dest(config.destDir))
      .pipe(plugins.size());
  });
}