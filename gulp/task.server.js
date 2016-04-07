module.exports = {
  isGulpTask: true,
  init      : init
};

function init(gulp, plugins, config, _, errorFn) {

  var util        = require('util');
  var browserSync = require('browser-sync');
  var middleware  = require('./proxy');

  function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if (baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
      routes = {
        '/bower_components': 'bower_components'
      };
    }

    browserSync.instance = browserSync.init(
      files,
      {
        startPath: '',
        server   : {
          baseDir   : baseDir,
          middleware: middleware,
          routes    : routes
        },
        open     : true,
        browser  : browser
      });
  }

  gulp.task('server', ['watch'], function () {
    browserSyncInit(
      ['app/server/www/'],
      ['app/server/www/css/*.css',
        'app/server/www/js/*.js',
        'app/server/www/index.html']);
  });

}
