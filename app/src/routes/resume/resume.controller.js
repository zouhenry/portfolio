/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.resume')
  .controller('resumeController', ResumeController);

function ResumeController(restApi) {
  var self = this;
  var url  = 'api/resume/';

  (function init() {
    getResume();
  }());

  function getResume() {
    restApi
      .get(url)
      .then(function (resume) {
        self.resume = resume;
      });
  }

}
