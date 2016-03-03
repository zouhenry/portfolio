/**
 * Created by hzou on 2/26/16.
 */

const spawnSync = require('child_process').spawnSync;

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'restart'
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("restart", function () {
    console.log('restart server');
    spawnSync('pm2', ['restart'], { stdio: 'inherit' });
  });
}
