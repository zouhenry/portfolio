/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio.timesheet', [])
  .config(config);

function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "timesheet",
    tabName    : "TimeSheet",
    tabIndex   : 2,
    state      : "portfolio.timesheet",
    templateUrl: "routes/timesheet/timesheet.html",
    controller : "timesheetController as timesheetCtrl"
  }];
}