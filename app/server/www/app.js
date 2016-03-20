(function() {
"use strict";

/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

config.$inject = ["dataApiProvider", "$mdThemingProvider"];
angular
  .module('portfolio', [
    'ui.router',
    'ngMaterial',
    'ipsum',
    //templates
    'portfolio.tpls',
    //api
    'portfolio.apis',
    //services
    'portfolio.services',
    //directives
    'portfolio.directives',
    //pages
    'portfolio.layout',
    'portfolio.projects',
    'portfolio.todo',
    'portfolio.about',
    'portfolio.chart'
  ])
  .config(config);

function config(dataApiProvider, $mdThemingProvider) {
  dataApiProvider.set('localApi');
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue');
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

config.$inject = ["$stateProvider", "navProvider"];
angular
  .module('portfolio.about', [])
  .config(config);

function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "about",
    tabName    : "About",
    tabIndex   : 1,
    state      : "portfolio.about",
    templateUrl: "about/about.html",
    controller : "aboutController as aboutCtrl"
  }];
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.apis', []);
}());

(function() {
"use strict";

/**
 * Created by hzou on 3/6/16.
 */

angular
  .module('portfolio.directives', []);
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

config.$inject = ["$stateProvider", "navProvider"];
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
    url: "chart",
    tabName: "Chart",
    tabIndex: 3,
    state: "portfolio.chart",
    templateUrl: "chart/chart.html",
    controller: "chartController as chartCtrl"
  }];
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

config.$inject = ["$stateProvider", "navProvider", "$urlRouterProvider"];
angular
  .module('portfolio.layout', [])
  .config(config);


function config($stateProvider, navProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/about');
  $urlRouterProvider.when('/', '/about');

  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "/",
    state      : "portfolio",
    templateUrl: "layout/layout.html",
    controller : "layoutController as layoutCtrl"
  }];
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/


config.$inject = ["$stateProvider", "$urlRouterProvider", "navProvider"];
angular
  .module('portfolio.projects', [])
  .config(config);

function config($stateProvider, $urlRouterProvider, navProvider) {

  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "projects",
    tabName    : "Projects",
    tabIndex   : 3,
    state      : "portfolio.projects",
    templateUrl: "projects/projects.html",
    controller : "projectsController as projectsCtrl"
  }];
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */

angular
  .module('portfolio.services', []);
}());

(function() {
"use strict";

/**
 * Created by hzou on 3/19/16.
 */


angular.module('portfolio.socket', []);
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

config.$inject = ["$stateProvider", "navProvider"];
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
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

AboutController.$inject = ["dataApi"];
angular
  .module('portfolio.about')
  .controller('aboutController', AboutController);

function AboutController(dataApi) {
  var self = this;
  var url  = 'api/about/';

  _.extend(self, {
    activeAbouts   : [],
    completedAbouts: [],
    reactivate    : reactivate,
    archive       : archive,
    create        : create,
    get           : get,
    remove        : remove
  });

  get();

  /*========================================
   =             implementations           =
   ========================================*/

  function create() {
    var about    = { description: self.newAbout };
    about.status = 'active';
    dataApi
      .post(url, about)
      .then(function (data) {
        self.activeAbouts.push(data);
        self.newAbout = "";
      });
  }

  function remove(about) {
    dataApi
      .delete(url + about.id)
      .then(function () {
        _.remove(self.completedAbouts, about);
      });
  }

  function get() {
    dataApi
      .get(url)
      .then(function (data) {
        self.activeAbouts    = _.filter(data, { status: 'active' });
        self.completedAbouts = _.filter(data, { status: 'completed' });
      });
  }

  function archive(about) {
    var completed    = _.cloneDeep(about);
    completed.status = "completed";
    dataApi
      .put(url + about.id, completed)
      .then(function () {
        _.remove(self.activeAbouts, about);
        self.completedAbouts.push(completed);
      });
  }

  function reactivate(about) {
    var activated    = _.cloneDeep(about);
    activated.status = "active";
    dataApi
      .put(url + about.id, activated)
      .then(function () {
        _.remove(self.completedAbouts, about);
        self.activeAbouts.push(activated);
      });
  }
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

httpApi.$inject = ["$http"];
angular
  .module('portfolio.apis')
  .factory('httpApi', httpApi);

function httpApi($http) {
  return {
    get     : get,
    post    : post,
    put     : put,
    "delete": remove
  };

  function get(url, opts) {
    return $http.get(url, opts);
  }

  function post(url, data, opts) {
    return $http.post(url, data, opts);
  }

  function put(url, data, opts) {
    return $http.post(url, data, opts);
  }

  function remove(url, opts) {
    return $http.delete(url, opts);
  }
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.apis')
  .provider('dataApi', dataApiProvider);

function dataApiProvider() {
  dataApi.$inject = ["$injector"];
  var apiName = 'httpApi';
  return {
    set : set,
    $get: dataApi
  };

  function set(altApi) {
    apiName = altApi;
  }

  function dataApi($injector) {
    var api = $injector.get(apiName);
    return api;
  }
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

localApi.$inject = ["$window", "$q"];
angular
  .module('portfolio.apis')
  .factory('localApi', localApi);

function localApi($window, $q) {
  var localstorage = $window.localStorage;

  return {
    get     : get,
    post    : post,
    put     : put,
    "delete": remove
  };

  function get(url, opts) {
    var isCollection = url.endsWith('/');
    var indexOf      = url.lastIndexOf('/') + 1;
    url              = isCollection ? url : url.substr(0, indexOf);
    var id           = url.substr(indexOf);

    var collection = getCollection(url);
    var retVal     = collection;
    if (id) {
      retVal = _.find(collection, { id: id });
    }

    return createPromise(function () {
      return retVal;
    });
  }

  function post(url, data, opts) {

    return createPromise(function () {
      var collection      = getCollection(url);
      data.id             = Date.now();
      collection.push(data);
      var stringifiedData = JSON.stringify(collection);
      localstorage.setItem(url, stringifiedData);
      return data;
    });
  }

  function put(url, data, opts) {
    data = _.omit(data, "$$hashKey");

    var isCollection = url.endsWith('/');
    var indexOf      = url.lastIndexOf('/') + 1;
    var id           = +url.substr(indexOf);
    url              = isCollection ? url : url.substr(0, indexOf);

    var collection = getCollection(url);

    return createPromise(function () {
      var item            = _.find(collection, { id: id });
      _.extend(item, data);
      var stringifiedData = JSON.stringify(collection);
      localstorage.setItem(url, stringifiedData);
      return data;
    });
  }

  function remove(url, opts) {
    var isCollection = url.endsWith('/');
    var indexOf      = url.lastIndexOf('/') + 1;
    var id           = +url.substr(indexOf);
    url              = isCollection ? url : url.substr(0, indexOf);

    var collection = getCollection(url);

    return createPromise(function () {
      var item = _.find(collection, { id: id });
      _.remove(collection, item);
      localstorage.setItem(url, JSON.stringify(collection));
      return item;
    });
  }

  /*========================================
   =                 utils                =
   ========================================*/
  function getCollection(url) {
    var val = localstorage.getItem(url) || '[]';
    return JSON.parse(val);
  }

  function createPromise(callback) {
    var data = callback();

    var deferred = $q.defer();
    deferred.resolve(data);
    return deferred.promise;
  }
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 3/6/16.
 */

autofocus.$inject = ["$timeout"];
angular
  .module('portfolio.directives')
  .directive('autofocus', autofocus);

function autofocus($timeout) {
  return {
    restrict: 'A',
    link    : focusOnLoad
  };

  function focusOnLoad($scope, $element) {
    $timeout(function () {  //ensuring dom is rendered by waiting 250ms
      $element[0].focus();
    }, 250);
  }

}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

ChartController.$inject = ["socket"];
angular
  .module('portfolio.chart')
  .controller('chartController', ChartController);

function ChartController(socket) {
  var self = this;

  _.extend(self, {
    data: getData(),
    options: getOptions()
  });

  init();


  function init(){
    socket.connect();
    socket.on('connect', function(){
      socket.emit('getFeed');
    });

    socket.on('initalFeed', function(data){
    self.data.dataset0.push(data);
    });

    socket.on('feed', function(data){
self.data.dataset0.shift();
      self.data.dataset0.push(data);
    });
  }


  function getData() {

    return {
      dataset0: [
        {x: 0, val_0: 0, val_1: 0, val_2: 0, val_3: 0},
        {x: 1, val_0: 0.993, val_1: 3.894, val_2: 8.47, val_3: 14.347},
        {x: 2, val_0: 1.947, val_1: 7.174, val_2: 13.981, val_3: 19.991},
        {x: 3, val_0: 2.823, val_1: 9.32, val_2: 14.608, val_3: 13.509},
        {x: 4, val_0: 3.587, val_1: 9.996, val_2: 10.132, val_3: -1.167},
        {x: 5, val_0: 4.207, val_1: 9.093, val_2: 2.117, val_3: -15.136},
        {x: 6, val_0: 4.66, val_1: 6.755, val_2: -6.638, val_3: -19.923},
        {x: 7, val_0: 4.927, val_1: 3.35, val_2: -13.074, val_3: -12.625}
      ]
    };
  }

  function getOptions() {
    return {
      series: [
        {
          axis: "y",
          dataset: "dataset0",
          key: "val_0",
          label: "An area series",
          color: "#1f77b4",
          type: ['line', 'dot', 'area'],
          id: 'mySeries0'
        }
      ],
      axes: {x: {key: "x"}}
    };
  }
}
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */


(function () {
  'use strict';

  layoutController.$inject = ["nav", "$state"];
  angular
    .module('portfolio')
    .controller('layoutController', layoutController);

  function layoutController(nav, $state) {
    var self      = this;
    self.navItems = nav.getTabs();
    self.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    self.isCurrentState = function isCurrentState(stateName) {
      return stateName === $state.current.name;
    };
  }

})();
}());

(function() {
"use strict";

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
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */

angular
  .module('portfolio.services')
  .provider('nav', function navServiceProvider() {
    var tabs = [];
    return {
      register: register,
      $get    : navService
    };

    function register(tab) {
      console.log(tab);
      tabs.push(tab);
    }

    function navService() {
      return {
        getTabs: function () {
          return _.filter(tabs, function(tab){
            return +tab.tabIndex > 0;
          });
        }
      };
    }
  });
}());

(function() {
"use strict";

/**
 * Created by hzou on 3/19/16.
 */


  socket.$inject = ["$log", "$rootScope"];
  angular
    .module('portfolio.socket')
    .factory('socket', socket);

  function socket($log, $rootScope) {
    $log.debug('socket LOADED');
    var socket;
    return {
      connect: connect,
      on     : on,
      emit   : emit
    };

    function connect(uri) {
      socket = io.connect(uri, { 'forceNew': true });
    }

    function on(eventName, callback) {
      $log.debug('on called');
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$evalAsync(function () {
          callback.apply(socket, args);
        });
      });
    }

    function emit(eventName, data, callback) {
      $log.debug('emit called');
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$evalAsync(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  }
}());

(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

TodoController.$inject = ["dataApi"];
angular
  .module('portfolio.todo')
  .controller('todoController', TodoController);

function TodoController(dataApi) {
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

  get();

  /*========================================
   =             implementations           =
   ========================================*/

  function create() {
    var todo    = { description: self.newTodo };
    todo.status = 'active';
    dataApi
      .post(url, todo)
      .then(function (data) {
        self.activeTodos.push(data);
        self.newTodo = "";
      });
  }

  function remove(todo) {
    dataApi
      .delete(url + todo.id)
      .then(function () {
        _.remove(self.completedTodos, todo);
      });
  }

  function get() {
    dataApi
      .get(url)
      .then(function (data) {
        self.activeTodos    = _.filter(data, { status: 'active' });
        self.completedTodos = _.filter(data, { status: 'completed' });
      });
  }

  function archive(todo) {
    var completed    = _.cloneDeep(todo);
    completed.status = "completed";
    dataApi
      .put(url + todo.id, completed)
      .then(function () {
        _.remove(self.activeTodos, todo);
        self.completedTodos.push(completed);
      });
  }

  function reactivate(todo) {
    var activated    = _.cloneDeep(todo);
    activated.status = "active";
    dataApi
      .put(url + todo.id, activated)
      .then(function () {
        _.remove(self.completedTodos, todo);
        self.activeTodos.push(activated);
      });
  }
}
}());

//# sourceMappingURL=app.js.map
