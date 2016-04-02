;(function() {
"use strict";

/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

config.$inject = ["restApiProvider", "$mdThemingProvider"];
angular
  .module('portfolio', [
    'ui.router',
    'ngMaterial',
    'ipsum',
    //templates
    'portfolio.tpls',
    //api
    'portfolio.rest.api',
    //services
    'portfolio.services',
    //directives
    'portfolio.directives',
    //ui-router states/routes
    'portfolio.routes'
  ])
  .config(config);

function config(restApiProvider, $mdThemingProvider) {
  restApiProvider.set('httpApi');
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue');
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('portfolio.routes', [
      //pages
      'portfolio.layout',
      'portfolio.projects',
      'portfolio.todo',
      // 'portfolio.about',
      'portfolio.resume',
      'portfolio.chart',
      'portfolio.exchange'
    ]);

})();
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/6/16.
 */

angular
  .module('portfolio.directives', []);
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.rest.api', []);
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */

angular
  .module('portfolio.services', []);
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/19/16.
 */


angular.module('portfolio.socket', []);
}());

;(function() {
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
    templateUrl: "routes/about/about.html",
    controller : "aboutController as aboutCtrl"
  }];
}
}());

;(function() {
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
    url        : "chart",
    tabName    : "Chart",
    tabIndex   : 3,
    state      : "portfolio.chart",
    templateUrl: "routes/chart/chart.html",
    controller : "chartController as chartCtrl"
  }];
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/27/16.
 */


config.$inject = ["$stateProvider", "$urlRouterProvider", "navProvider"];
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
}());

;(function() {
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
  $urlRouterProvider.when('', '/resume');
  $urlRouterProvider.when('/', '/resume');

  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "/",
    state      : "portfolio",
    templateUrl: "routes/layout/layout.html",
    controller : "layoutController as layoutCtrl"
  }]; 
}
}());

;(function() {
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
    tabIndex   : null,//3,
    state      : "portfolio.projects",
    templateUrl: "routes/projects/projects.html",
    controller : "projectsController as projectsCtrl"
  }];
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/27/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

config.$inject = ["$stateProvider", "navProvider"];
angular
  .module('portfolio.resume', [])
  .config(config);

function config($stateProvider, navProvider) {
  _.forEach(getStates(), function (state) {
    $stateProvider.state(state.state, state);
    navProvider.register(state);
  });
}

function getStates() {
  return [{
    url        : "resume",
    tabName    : "Resume",
    tabIndex   : 1,
    state      : "portfolio.resume",
    templateUrl: "routes/resume/resume.html",
    controller : "resumeController as resumeCtrl"
  }];
}
}());

;(function() {
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
    templateUrl: "routes/todo/todo.html",
    controller : "todoController as todoCtrl"
  }];
}
}());

;(function() {
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

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

httpApi.$inject = ["$http"];
angular
  .module('portfolio.rest.api')
  .factory('httpApi', httpApi);

function httpApi($http) {
  return {
    get     : get,
    post    : post,
    put     : put,
    "delete": remove
  };

  function get(url, opts) {
    return $http.get(url, opts).then(getData);
  }

  function post(url, data, opts) {
    return $http.post(url, data, opts).then(getData);
  }

  function put(url, data, opts) {
    return $http.post(url, data, opts).then(getData);
  }

  function remove(url, opts) {
    return $http.delete(url, opts).then(getData);
  }


  /*========================================
   =                 priavate                =
   ========================================*/
  function getData(response) {
    return response.data;
  }
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.rest.api')
  .provider('restApi', restApiProvider);

function restApiProvider() {
  restApi.$inject = ["$injector"];
  var apiName = 'httpApi';
  return {
    set : set,
    $get: restApi
  };

  function set(altApi) {
    apiName = altApi;
  }

  function restApi($injector) {
    var api = $injector.get(apiName);
    return api;
  }
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

localApi.$inject = ["$window", "$q"];
angular
  .module('portfolio.rest.api')
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

;(function() {
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

;(function() {
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
    connect   : connect,
    disconnect: disconnect,
    on        : on,
    emit      : emit
  };

  function connect(uri) {
    $log.debug('connect');
    socket = io.connect(uri, { 'forceNew': true });
  }

  function disconnect() {
    $log.debug('disconnect');
    socket.disconnect();
  }

  function on(eventName, callback) {
    $log.debug('on');
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

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

AboutController.$inject = ["restApi"];
angular
  .module('portfolio.about')
  .controller('aboutController', AboutController);

function AboutController(restApi) {
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
    restApi
      .post(url, about)
      .then(function (data) {
        self.activeAbouts.push(data);
        self.newAbout = "";
      });
  }

  function remove(about) {
    restApi
      .delete(url + about.id)
      .then(function () {
        _.remove(self.completedAbouts, about);
      });
  }

  function get() {
    restApi
      .get(url)
      .then(function (data) {
        self.activeAbouts    = _.filter(data, { status: 'active' });
        self.completedAbouts = _.filter(data, { status: 'completed' });
      });
  }

  function archive(about) {
    var completed    = _.cloneDeep(about);
    completed.status = "completed";
    restApi
      .put(url + about.id, completed)
      .then(function () {
        _.remove(self.activeAbouts, about);
        self.completedAbouts.push(completed);
      });
  }

  function reactivate(about) {
    var activated    = _.cloneDeep(about);
    activated.status = "active";
    restApi
      .put(url + about.id, activated)
      .then(function () {
        _.remove(self.completedAbouts, about);
        self.activeAbouts.push(activated);
      });
  }
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

ChartController.$inject = ["$scope", "socket"];
angular
  .module('portfolio.chart')
  .controller('chartController', ChartController);

function ChartController($scope, socket) {
  var self      = this;
  var duration  = 30;
  var frequency = 1;
  var ticks     = duration / frequency;

  _.extend(self, {
    data    : { dataset0: [] },
    feeds: [],
    options : getOptions()
  });

  init();

  function init() {
    socket.connect();
    socket.on('connect', function () {
      socket.emit('startFeed', { duration: duration, frequency: frequency });
    });

    socket.on('initialFeed', function (data) {
      self.data.dataset0 = data;
    });

    socket.on('feed', function (data) {
      if (self.data.dataset0.length >= ticks) {
        self.data.dataset0.shift();
      }
      self.data.dataset0.push(data);
      self.feeds.push(data);
    });

    $scope.$on('$destroy', function () {
      socket.emit('stopFeed');
      socket.disconnect();
    });
  }

  function getOptions() {
    return {
      margin: {
        top: 15
      },
      series: [
        {
          axis   : "y",
          dataset: "dataset0",
          key    : "bpm",
          label  : "Heart Rate (BPM)",
          color  : "#1f99a5",
          type   : ['column'],
          id     : 'hr'
        },
        {
          axis   : "y",
          dataset: "dataset0",
          key    : "mph",
          label  : "Speed (MPH)",
          color  : "#3333ff",
          type   : ['line', 'area'],
          id     : 'speed'
        }
      ],
      axes  : {
        x: {
          key       : "x",
          ticks     : ticks,
          ticksShift: {
            x: -10
          },
          tickFormat: function (value, index) {
            return ((ticks - 1) - (index % ticks)) * frequency + 's';
          }
        }
      }
    };
  }
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/27/16.
 */


angular
  .module('portfolio.exchange')
  .directive('exchangeItem', exchangeItem);

function exchangeItem() {
  return {
    //bind paramst o controller
    bindToController: {
      product: "="
    },
    scope           : true, //isolated
    /* @ngInject */
    controller      : function () {
    },
    controllerAs    : "exchangeItemCtrl",
    templateUrl     : function (elem, attrs) {
      return attrs.templateUrl || 'routes/exchange/exchange.item.html';
    }
  };
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/27/16.
 */

angular
  .module('portfolio.exchange')
  .controller('exchangeController', ExchangeController);

function ExchangeController() {
  var self = this;

  self.products = getProducts();


  function getProducts() {
    return [{
      name       : "Saganizer corner shelf brown corner shelf unit 5 Tier corner shelves",
      image      : "http://ecx.images-amazon.com/images/I/71d-WWSgdiL._SY679_.jpg",
      href       : "http://www.amazon.com/Saganizer-corner-shelf-brown-shelves/dp/B013RXA7OU/ref=sr_1_3?ie=UTF8&qid=1459115030&sr=8-3&keywords=shelf",
      site       : "Amazon",
      description: ["price is a limited time offer, and this is 100% satisfaction guarantee.",
        "corner wall shelf Simple stylish design yet functional and suitable for any room",
        "Great storage unit for bathroom corner shelf, closet, home office, living room, kids room, kitchen, shower corner shelf etc",
        "Sturdy on flat surface and no hassle 5-minutes assembly",
        "Dimensions: 7.75x7.75x48.5 inche Black color to fit any decor attaches to both sides of the wall with only 2 nails or screws. With its contemporary black finish"]
    }, {
      name       : "Microsoft Surface 2",
      image      : "https://compass-ssl.surface.com/assets/37/a4/37a4c0f1-b493-4063-9207-e280a9c1b880.jpg?n=Desktop_Surface-2_Hero.jpg",
      href       : "https://www.microsoft.com/surface/en-us/devices/surface-2",
      site       : "Microsoft",
      description: ["The perfect tablet for work and play.",
        "At just under 1.5lbs, and pre-loaded with Office 2013 RT,1 Surface 2 lets you carry less while you do more."]
    }];
  }
}
}());

;(function() {
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

;(function() {
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

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

ResumeController.$inject = ["restApi"];
angular
  .module('portfolio.resume')
  .controller('resumeController', ResumeController);

function ResumeController(restApi) {
  var self = this;
  var url  = 'api/resume/';

  (function init() {
    getResume();
  }());

  function getResume() {
    restApi
      .get(url)
      .then(function (resume) {
        self.resume = resume;
      });
  }

}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

TodoController.$inject = ["localApi"];
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
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/31/16.
 */

angular.module('portfolio.resume')
  .directive('company', company);

function company() {
  return {
    restrict        : "E",
    bindToController: {
      company: "="
    },
    scope           : true,
    link            : link,
    controller      : controller,
    controllerAs    : "companyCtrl",
    templateUrl     : "routes/resume/company/company.html"
  };

  function link(scope, elem, attrs, controller) {
  }

  function controller() {
    var vm = self;
    angular.extend(vm, {
      dateformat: "MM-yy"
    });
  }
}
}());

;(function() {
"use strict";

/**
 * Created by hzou on 3/31/16.
 */

angular.module('portfolio.resume')
  .directive('recommendation', recommendation);

function recommendation() {
  return {
    restrict        : "E",
    bindToController: {
      rec: "=recommendation"
    },
    scope           : true,
    link            : link,
    controller      : controller,
    controllerAs    : "recCtrl",
    templateUrl     : "routes/resume/recommendation/recommendation.html"
  };

  function link(scope, elem, attrs, controller) {

  }

  function controller() {
    var vm = self;

  }
}
}());

//# sourceMappingURL=app.js.map
