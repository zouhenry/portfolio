/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio.resume', [])
  .config(config);

function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "resume",
    tabName    : "resume",
    tabIndex   : 1,
    state      : "portfolio.resume",
    templateUrl: "routes/resume/resume.html",
    controller : "resumeController as resumeCtrl"
  }];
}