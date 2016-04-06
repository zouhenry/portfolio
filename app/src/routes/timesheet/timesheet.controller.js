/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.timesheet')
  .controller('timesheetController', timesheetController);

function timesheetController(localApi) {
  var self = this;

  _.extend(self, {
    timesheet   : getTimesheet(),
    dailyTotals : [{ name: "SUN" }, { name: "MON" }, { name: "TUE" }, { name: "WED" }, { name: "THU" }, { name: "FRI" }, { name: "SAT" }],
    updateTotals: updateTotals
  });

  (function () {
    refreshTotals();
  }());

  function refreshTotals() {
    _.forEach(self.timesheet, function (type) {
      _.forEach(type.companies, function (company) {
        _.forEach(company.projects, function (project) {
          for ( var taskCounter = 0; taskCounter < 7; ++taskCounter ) {
            updateTotals(taskCounter, project.tasks[0].days[taskCounter], project, company, type);
          }
        });
      });
    });
  }

  function updateTotals(index, task, project, company, type) {
    task.hours                    = task.hours || 0;
    project.days[index].hours     = _.reduce(project.tasks, function (sum, task) {
      return sum + parseFloat(task.days[index].hours);
    }, 0);
    company.days[index].hours     = _.reduce(company.projects, function (sum, project) {
      return sum + parseFloat(project.days[index].hours);
    }, 0);
    type.days[index].hours        = _.reduce(type.companies, function (sum, company) {
      return sum + parseFloat(company.days[index].hours);
    }, 0);
    self.dailyTotals[index].hours = _.reduce(self.timesheet, function (sum, type) {
      return sum + parseFloat(type.days[index].hours);
    }, 0);
  }

  /*========================================
   =             implementations           =
   ========================================*/
  function getTimesheet() {
    return [{
      name     : "Billable",
      days     : [{}, {}, {}, {}, {}, {}, {}],
      companies: [{
        name    : "Henry Zou",
        days    : [{}, {}, {}, {}, {}, {}, {}],
        projects: [{
          name : "Henry Zou - Portfolio",
          days : [{}, {}, {}, {}, {}, {}, {}],
          tasks: [{
            name       : 'Technical Design',
            description: 'Review design document',
            status     : "late",
            days       : [
              {
                hours: 0
              },
              {
                hours: 4.5
              },
              {
                hours: 6
              },
              {
                hours: 8
              },
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 0
              }
            ]
          }, {
            name       : 'Implementation',
            description: 'implement business logic',
            days       : [

              {
                hours: 0
              },
              {
                hours: 3
              },
              {
                hours: 2
              },
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 0
              }
            ]
          }, {
            name       : 'Implementation',
            description: 'Write test cases',
            days       : [

              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 1
              },
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 0
              }
            ]
          }]
        }]
      }, {
        name    : "Wellwood Medical",
        days    : [{}, {}, {}, {}, {}, {}, {}],
        projects: [{
          name : "Testing and revisions",
          days : [{}, {}, {}, {}, {}, {}, {}],
          tasks: [{
            name: "Design",
            days: [
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 3
              },
              {
                hours: 0
              },
              {
                hours: 0
              },
              {
                hours: 0
              }]
          }]
        }]
      }]
    }];
  }
}
