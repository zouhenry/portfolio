/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/
(function () {

  angular
    .module('portfolio', ['ui.router', 'ngMaterial', 'ipsum', 'portfolio.projects'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('portfolio', {
        url        : "/",
        templateUrl: "layout/layout.html"
      });
  }

})();