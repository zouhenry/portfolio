/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/


angular
  .module('portfolio.projects', [])
  .config(config);

function config($stateProvider, $urlRouterProvider, navProvider) {

  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "projects",
    tabName    : "Projects",
    tabIndex   : 3,
    state      : "portfolio.projects",
    templateUrl: "projects/projects.html",
    controller : "projectsController as projectsCtrl"
  }];
}
