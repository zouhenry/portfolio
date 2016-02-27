/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio', ['ui.router', 'ngMaterial'])
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('portfolio', {
      url        : "",
      templateUrl: "layout/layout.html"
    });
}
