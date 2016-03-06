/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.about')
  .controller('aboutController', AboutController);

function AboutController(dataApi) {
  var self = this;
  var url  = 'api/about/';

  _.extend(self, {
    activeAbouts   : [],
    completedAbouts: [],
    reactivate    : reactivate,
    archive       : archive,
    create        : create,
    get           : get,
    remove        : remove
  });

  get();

  /*========================================
   =             implementations           =
   ========================================*/

  function create() {
    var about    = { description: self.newAbout };
    about.status = 'active';
    dataApi
      .post(url, about)
      .then(function (data) {
        self.activeAbouts.push(data);
        self.newAbout = "";
      });
  }

  function remove(about) {
    dataApi
      .delete(url + about.id)
      .then(function () {
        _.remove(self.completedAbouts, about);
      });
  }

  function get() {
    dataApi
      .get(url)
      .then(function (data) {
        self.activeAbouts    = _.filter(data, { status: 'active' });
        self.completedAbouts = _.filter(data, { status: 'completed' });
      });
  }

  function archive(about) {
    var completed    = _.cloneDeep(about);
    completed.status = "completed";
    dataApi
      .put(url + about.id, completed)
      .then(function () {
        _.remove(self.activeAbouts, about);
        self.completedAbouts.push(completed);
      });
  }

  function reactivate(about) {
    var activated    = _.cloneDeep(about);
    activated.status = "active";
    dataApi
      .put(url + about.id, activated)
      .then(function () {
        _.remove(self.completedAbouts, about);
        self.activeAbouts.push(activated);
      });
  }
}
