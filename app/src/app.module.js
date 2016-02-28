/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio', [
    'ui.router',
    'ngMaterial',
    'ipsum',
    'portfolio.services',
    'portfolio.projects',
    'portfolio.todo'])
  .config(config);


function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });

}

function getStates() {
  return [{
    url        : "/",
    state      : "portfolio",
    tabIndex   : "portfolio",
    templateUrl: "layout/layout.html",
    controller : "layoutController as layoutCtrl"
  }];
}

