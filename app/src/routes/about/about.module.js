/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio.about', [])
  .config(config);

function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "about",
    tabName    : "About",
    tabIndex   : 1,
    state      : "portfolio.about",
    templateUrl: "routes/about/about.html",
    controller : "aboutController as aboutCtrl"
  }];
}