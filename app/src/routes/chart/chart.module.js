/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio.chart', ['portfolio.socket', 'n3-line-chart'])
  .config(config);

function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "chart",
    tabName    : "Chart",
    tabIndex   : 3,
    state      : "portfolio.chart",
    templateUrl: "routes/chart/chart.html",
    controller : "chartController as chartCtrl"
  }];
}