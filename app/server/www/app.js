;(function() {
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
    //ui-router states/routes
    'portfolio.routes'
  ])
  .config(config);

function config(dataApiProvider, $mdThemingProvider) {
  dataApiProvider.set('localApi');
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
      'portfolio.about',
      'portfolio.resume',
      'portfolio.chart',
      'portfolio.exchange'
    ]);

})();
}());

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.apis', []);
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
    templateUrl: "routes/layout/layout.html",
    controller : "layoutController as layoutCtrl"
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
    tabName    : "resume",
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

;(function() {
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

;(function() {
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

;(function() {
"use strict";

/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.resume')
  .controller('resumeController', ResumeController);

function ResumeController() {
  var self = this;

  _.extend(self, {
    experiences    : getExperiences(),
    school         : [],
    recommendations: getRecommendations()
  });


  function getRecommendations() {
    return [{
      user        : "David Katz",
      company     : "Projector PSA",
      title       : "User experience design leader",
      linkedin    : "https://www.linkedin.com/in/dkatz",
      imgSrc      : "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/4/005/045/29f/252a712.jpg",
      message     : "Henry is a fantastic software engineer and was a pleasure to have on my team. Actually, software engineer doesn't reflect the depth of Henry's expertise. He's more of a software architect. I worked with Henry on a multi-year iterative effort to redesign and build a large, complex web application. Henry continually looked for ways to make the front-end architecture more scaleable, reduce the effort to implement features, improve reuse, and eliminate some fundamental technical problems. For example, on his own initiative, Henry researched and experimented with Marionette and StickIt, open source components that extend the capabilities of Backbone, the core Javascript MVC framework used in our application (and which have proved essential).",
      date        : "February 23, 2014",
      relationship: "David managed Henry at Projector PSA"
    }, {
      user        : "Dmitri Fradkin",
      company     : "The TriZetto Group",
      title       : "Director of Engineering",
      linkedin    : "https://www.linkedin.com/in/dmitri-fradkin-9100442",
      imgSrc      : "https://media.licdn.com/mpr/mpr/shrink_100_100/p/1/005/076/2c2/35d549c.jpg",
      message     : "Henry is independent problem solver with a great understanding of cutting edge technologies and web development principals. Henry is passionate about work he does every day and motivated by success of the product he developed. Over the past two years Henry worked on multiple web applications, researching and developing complex user interfaces and services for TriZetto core architecture components. While working on the projects he constantly looked at opportunities to improve existing development methods and frameworks. When Henry was asked to work on bringing offshore resources to the team, Henry went above and beyond to make sure the knowledge transition was smooth and the new team was enabled in shortest period possible.",
      date        : "May 9, 2011",
      relationship: "Dmitri managed Henry at The TriZetto Group"
    }, {
      user        : "Marcos Elugardo",
      company     : "The TriZetto Group",
      title       : "Director of Engineering",
      linkedin    : "https://www.linkedin.com/in/marcos-elugardo-37ba348",
      imgSrc      : "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/005/017/010/2fe75f9.jpg",
      message     : "I have worked with Henry for a year and have constantly been impressed with his approach to his job. His love for the field, his adaptability and his commitment to meeting deadlines have all stood out to me above other colleagues I have worked with in the past. He loves his work and is always bring forth new ideas or bits of information he has found while reading about development. He is quick to offer help when needed and often has a fresh perspective that advances the task at hand. Always open to input, Henry is not afraid to look back at his code and see where it can be improved, again showing his interest in coding as something he can take pride in. In addition to this excitement for engineering, I have been surprised to see how quickly Henry was able to become a valuable contributor to our team. After a very short time, he was given entire projects to build with little guidance and was able to deliver quality work by the deadline. He was available to QA when needed and delivered tools to our customers that have enabled them to be successful. As hinted to above, Henry is committed to the deadline, but not at the cot of quality. When needed, he willingly works late or on the weekends, not because he is asked to, but because he cares about what he produces. He could easily meet his deadlines with half baked solutions, but instead he goes the extra mile to ensure what he delivers is quality. If you are considering him, I can’t emphasize enough how valuable he will quickly become to your team or company. I would gladly work with Henry again knowing with confidence that I can rely on him to accomplish and even exceed the goals set before him.",
      date        : "May 12, 2010",
      relationship: "Marcos managed Henry indirectly at The TriZetto Group"
    }];
  }

  function getExperiences() {
    return [{
      title      : "Sr. Front end Software Engineer",
      companyUrl : "http://InterSystems.com",
      companyName: "InterSystems",
      startDate  : new Date("2015-6-29"),
      endDate    : null,
      description: "Healthcare organizations worldwide are charged with improving quality, accessibility, and efficiency.",
      positions  : [{
        role        : "Lead Developer",
        duties      : [
          "Leading InterSystem's Angular Framework team",
          "Main contributor to InterSystem's Angular Framework",
          "Mentored teammates with regular training sessions",
          "Mentoring and guiding Junior and Veteran Engineers",
          "making shit more efficient by creating "
        ],
        technologies: ["AngularJs", "Foundation for Apps", "SASS", "Gulp", "Slush", "Yeoman", "NodeJs", "WallabyJs", "OS X"]
      }, {
        role  : "UI Developer",
        duties: [
          "Created a responsive Care Management Application for managing end-of-life care for U.K.",
          "Creating reusable components to be used by all Angular Teams"
        ]
      }]
    }, {
      title      : "Sr. Software Engineer",
      companyUrl : "http://amadeus.com",
      companyName: "Amadeus",
      startDate  : new Date("2014-10-27"),
      endDate    : new Date("2015-06-27"),
      description: "Created Hotel Management Platform used by 5K+ Hotels (and growing) with anticipated additional revenue of $500million/year",
      positions  : [{
        role        : "Lead Tech",
        duties      : [
          "Defined the Application’s Framework, patterns, and coding guidelines",
          "Created and shared common Angular directives, services, and patterns",
          "Accounted for 40% of all UI feature implementations",
          "Reviewed 70% of all UI Pull-Requests",
          "Mentored teammates with regular training sessions",
          "Recognized as a key contributor and decision maker to a very aggressive 6-months deadline; where a brand new project was created from scratch and delivered on time"
        ],
        technologies: ["Angular", "Bootstrap", "LESS", "Grunt", "Java", "Spring REST API"]
      }]
    }, {
      title      : "Principal Software Engineer",
      companyUrl : "http://projectorpsa.com",
      companyName: "Projector PSA",
      startDate  : new Date("2011-11-07"),
      endDate    : new Date("2015-10-27"),
      description: "Migrated over 5 Professional Services Automation WinForms applications over to Web.",
      positions  : [{
        role        : "UI Architect",
        duties      : [
          "Converted legacy Windows Applications to web based single-page apps by using latest client-side web technologies",
          "Designed and implemented two in-house MV* patterns by using a combination of Backbone, Marionette and Stickit",
          "Defined architectural patterns and coding guidelines to promote code reusability, extensibility, maintainability, and encapsulation",
          "Championed for continuous learning; advanced team’s technical skill with a weekly lunch-and-learn program",
          "Acted as role model for best practices",
          "Improved page rendering time from 30 seconds to 5 seconds",
          "Optimized performance by profiling, tuning JavaScript, and reducing event handlers",
          "Eliminated memory leaks by cleaning up Backbone phantom views",
          "Instrumental contributor to release the smoothest and fewest bugs products for the past couple iterations"
        ],
        technologies: ["Backbone", "Marionette", "SASS", ".NET MVC", "TFS"],
        summary     : {
          quote: "I think a lot of the technical self-education you’ve done, as well as the training of other team members, and technical infrastructure design, has been invaluable for the company, and I highly applaud your initiative and enthusiasm for it",
          cite : "Jeff Richman - Co-founder and VP of Engineering"
        }
      }]
    }, {
      title      : "Software Engineer",
      companyUrl : "http://http://trizetto.com",
      companyName: "TriZetto",
      startDate  : new Date("2009-3-1"),
      endDate    : new Date("2011-10-27"),
      description: "",
      positions  : [{
        role        : "UI Lead Developer",
        duties      : [
          "Mentored and led team to deliver 8 applications within aggressive deadlines",
          "Achieved application design, enhancements, code reviews and quality inspection",
          "Designed and implemented a robust, flexible and reusable component to eliminate 75% of Unit Test code base using design patterns and .Net Reflection",
          "Created Unit Tests using Microsoft Moles Framework while utilizing TDD methodologies",
          "Participated in design meetings"
        ],
        technologies: ["ASP.NET"]
      },
        {
          role        : "Framework Developer",
          duties      : [
            "Polished wireframes and functional specs with UI Design Team",
            "Designed and built reusable components using ASP.NET, jQuery, and Telerik Controls",
            "Participated in Installer/Packaging team to address configurable components",
            "Provided input for QA to identify, log and test defects",
            "Maintained Stored Procedures using SQL Management Studios",
            "Accustomed to configuring IIS 6.0 and 7.5",
            "Developed and deployed WCF Web Service configurations and projects",
            "Worked with Waterfall & Agile Methodologies",
            "Multi-tasked 2-3 projects simultaneously",
            "Assisted other teams with product integrations"
          ],
          technologies: ["ASP.NET"]
        }]
    }, {
      title      : "Associate Software Engineer",
      companyUrl : "http://isobar.com",
      companyName: "Molecular/isobar",
      startDate  : new Date("2007-6-01"),
      endDate    : new Date("2009-2-27"),
      description: "Migrated over 5 Professional Services Automation WinForms applications over to Web.",
      positions  : [{
        role        : "Web Developer",
        duties      : [
          "Designed and implemented an electrical engineering web app using third party Microsoft Excel IO Software (Spreadsheetgear) and Microsoft SQL",
          "Applied MVC pattern to existing code",
          "Collaborated with the ADI Clients and Engineers on a daily basis",
          "Used Spreadsheet Dataset, DataView and DataReader objects for data retrieval and manipulation",
          "Implemented front-end UI using Flex 3.0",
          "Built Web Services using C# and .Net framework",
          "Designed, developed, and implemented necessary Web Forms with .NET",
          "Created and updated Stored Procedures in SQL Server 2005"
        ],
        technologies: ["ASP.NET", "Flex 3.0"]
      },
      ]
    }];

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
