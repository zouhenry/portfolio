/**
 * Created by hzou on 2/26/16.
 */

var uglify = require('gulp-uglify');

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName: 'js',
  group     : {
    "default": 1,
    "deploy" : 1
  }
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task(module.exports.taskName, function () {
    var doUglify = process.env.MINIFY;
    if (doUglify) {
      return gulp
        .src(config.jsVendorSrc.concat(config.jsSrc))
        .pipe(plugins.filelog())
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.iife())
        .pipe(plugins.sourcemaps.init())
        .pipe(uglify())
        .pipe(plugins.concat("app.js"))
        .pipe(plugins.sourcemaps.write("./"))
        .pipe(plugins.filelog())
        .pipe(gulp.dest(config.destDir))
        .pipe(plugins.size());
    } else {
      return gulp
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
    }
  });
}