/**
 * Created by hzou on 3/27/16.
 */


angular
  .module('portfolio.exchange', [])
  .config(config);

function config($stateProvider, $urlRouterProvider, navProvider) {

  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "exchange",
    tabName    : "Exchange",
    tabIndex   : 3,
    state      : "portfolio.exchange",
    templateUrl: "routes/exchange/exchange.html",
    controller : "exchangeController as exchangeCtrl"
  }];
}
