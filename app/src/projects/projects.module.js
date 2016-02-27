/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

(function () {

  angular
    .module('portfolio.projects', [])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('portfolio.projects', {
        url        : "projects",
        templateUrl: "projects/projects.html",
        controller : "projectsController as projectsCtrl"
      });
  }
})();
