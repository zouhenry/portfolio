/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio.layout', [])
  .config(config);


function config($stateProvider, navProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/resume');
  $urlRouterProvider.when('/', '/resume');

  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "/",
    state      : "portfolio",
    templateUrl: "routes/layout/layout.html",
    controller : "layoutController as layoutCtrl"
  }];
}

