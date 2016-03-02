/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio.todo', [])
  .config(config);

function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "todo",
    tabName    : "To Do",
    tabIndex   : 2,
    state      : "portfolio.todo",
    templateUrl: "todo/todo.html",
    controller : "todoController as todoCtrl"
  }];
}