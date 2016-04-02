/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.todo')
  .controller('todoController', TodoController);

function TodoController(localApi) {
  var self = this;
  var url  = 'api/todo/';

  _.extend(self, {
    activeTodos   : [],
    completedTodos: [],
    reactivate    : reactivate,
    archive       : archive,
    create        : create,
    get           : get,
    remove        : remove
  });

  (function init() {
    get();
  }());

  /*========================================
   =             implementations           =
   ========================================*/

  function create() {
    var todo    = { description: self.newTodo };
    todo.status = 'active';
    localApi
      .post(url, todo)
      .then(function (data) {
        self.activeTodos.push(data);
        self.newTodo = "";
      });
  }

  function remove(todo) {
    localApi
      .delete(url + todo.id)
      .then(function () {
        _.remove(self.completedTodos, todo);
      });
  }

  function get() {
    localApi
      .get(url)
      .then(function (data) {
        self.activeTodos    = _.filter(data, { status: 'active' });
        self.completedTodos = _.filter(data, { status: 'completed' });
      });
  }

  function archive(todo) {
    var completed    = _.cloneDeep(todo);
    completed.status = "completed";
    localApi
      .put(url + todo.id, completed)
      .then(function () {
        _.remove(self.activeTodos, todo);
        self.completedTodos.push(completed);
      });
  }

  function reactivate(todo) {
    var activated    = _.cloneDeep(todo);
    activated.status = "active";
    localApi
      .put(url + todo.id, activated)
      .then(function () {
        _.remove(self.completedTodos, todo);
        self.activeTodos.push(activated);
      });
  }
}
