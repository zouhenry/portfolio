/**
 * Created by hzou on 2/28/16.
 */


angular
  .module('portfolio.todo')
  .controller('todoController', TodoController);

function TodoController() {
  var self  = this;
  self.todo = getTodo();

  /*========================================
   =                 helpers                =
   ========================================*/
  function getTodo() {
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
