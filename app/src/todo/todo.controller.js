/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.todo')
  .controller('todoController', TodoController);

function TodoController() {
  var self = this;
  _.extend(self, {
    activeTodos   : getTodos(),
    completedTodos: [],
    reactivate    : reactivate,
    archive       : archive,
    create        : create,
    remove        : remove
  });

  /*========================================
   =             implementations           =
   ========================================*/
  function create() {
    self.activeTodos.unshift({ description: self.newTodo });
    self.newTodo = "";
  }

  function remove(todo) {
    _.remove(self.completedTodos, todo);
  }

  function archive(todo) {
    _.remove(self.activeTodos, todo);
    self.completedTodos.unshift(todo);
  }

  function reactivate(todo) {
    _.remove(self.completedTodos, todo);
    self.activeTodos.unshift(todo);
  }

  function getTodos() {
    return [
      {
        description: "Interdum viverra tortor ligula odio ac."
      },
      {
        description: "Suscipit orci iaculis ullamcorper pellentesque facilisis urna vehicula aliquet."
      },
      {
        description: "Consectetur nisl id id ultricies ligula id."
      }
    ];

  }
}
