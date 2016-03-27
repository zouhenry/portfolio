/**
 * Created by hzou on 2/27/16.
 */

'use strict';

angular
  .module('portfolio.projects')
  .controller('projectsController', ProjectsController);

function ProjectsController() {
  var self      = this;
  self.projects = getProjects();

  /*========================================
   =                 helpers                =
   ========================================*/
  function getProjects() {
    return [
      {
        title      : "Timesheet",
        img        : "",
        description: "Angular timesheet"
      },
      {
        title      : "Task Manager",
        img        : "",
        description: "Angular Task Manager"
      },
      {
        title      : "To Do",
        img        : "",
        description: "Angular ToDo"
      }
    ];
  }
}


