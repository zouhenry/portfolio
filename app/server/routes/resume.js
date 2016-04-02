/**
 * Created by hzou on 4/2/16.
 */
var data = require('../data/resume.json');

module.exports = {
  get: get
};

function* get() {
  this.body = data;
}
