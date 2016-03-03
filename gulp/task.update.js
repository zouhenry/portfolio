/**
 * Created by hzou on 2/26/16.
 */

const spawnSync = require('child_process').spawnSync;

module.exports = {
  isGulpTask: true,
  init      : init,
  taskName  : 'update'
};

function init(gulp, plugins, config, _, errorFn) {
  gulp.task("update", function () {
    console.log('git pull');
    spawnSync('git', ['pull'], { stdio: 'inherit' });
    console.log('npm install');
    spawnSync('npm', ['install'], { stdio: 'inherit' });
    console.log('bower install --allow-root');
    spawnSync('bower', ['install'], { stdio: 'inherit' });
  });
}
