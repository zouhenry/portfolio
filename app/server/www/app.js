!function(){"use strict";function o(o,i){o.set("localApi"),i.theme("default").primaryPalette("light-blue")}o.$inject=["dataApiProvider","$mdThemingProvider"],angular.module("portfolio",["ui.router","ngMaterial","ipsum","portfolio.tpls","portfolio.apis","portfolio.services","portfolio.directives","portfolio.routes"]).config(o)}();
!function(){"use strict";!function(){angular.module("portfolio.routes",["portfolio.layout","portfolio.projects","portfolio.todo","portfolio.about","portfolio.chart"])}()}();
!function(){"use strict";angular.module("portfolio.apis",[])}();
!function(){"use strict";angular.module("portfolio.directives",[])}();
!function(){"use strict";angular.module("portfolio.services",[])}();
!function(){"use strict";angular.module("portfolio.socket",[])}();
!function(){"use strict";function t(t,r){_.forEach(o(),function(o){t.state(o.state,o),r.register(o)})}function o(){return[{url:"about",tabName:"About",tabIndex:1,state:"portfolio.about",templateUrl:"routes/about/about.html",controller:"aboutController as aboutCtrl"}]}t.$inject=["$stateProvider","navProvider"],angular.module("portfolio.about",[]).config(t)}();
!function(){"use strict";function t(t,o){_.forEach(r(),function(r){t.state(r.state,r),o.register(r)})}function r(){return[{url:"chart",tabName:"Chart",tabIndex:3,state:"portfolio.chart",templateUrl:"routes/chart/chart.html",controller:"chartController as chartCtrl"}]}t.$inject=["$stateProvider","navProvider"],angular.module("portfolio.chart",["portfolio.socket","n3-line-chart"]).config(t)}();
!function(){"use strict";function t(t,r,e){e.when("","/about"),e.when("/","/about"),_.forEach(o(),function(o){t.state(o.state,o),r.register(o)})}function o(){return[{url:"/",state:"portfolio",templateUrl:"routes/layout/layout.html",controller:"layoutController as layoutCtrl"}]}t.$inject=["$stateProvider","navProvider","$urlRouterProvider"],angular.module("portfolio.layout",[]).config(t)}();
!function(){"use strict";function t(t,o,e){_.forEach(r(),function(r){t.state(r.state,r),e.register(r)})}function r(){return[{url:"projects",tabName:"Projects",tabIndex:null,state:"routes/portfolio.projects",templateUrl:"projects/projects.html",controller:"projectsController as projectsCtrl"}]}t.$inject=["$stateProvider","$urlRouterProvider","navProvider"],angular.module("portfolio.projects",[]).config(t)}();
!function(){"use strict";function o(o,r){_.forEach(t(),function(t){o.state(t.state,t),r.register(t)})}function t(){return[{url:"todo",tabName:"To Do",tabIndex:2,state:"portfolio.todo",templateUrl:"routes/todo/todo.html",controller:"todoController as todoCtrl"}]}o.$inject=["$stateProvider","navProvider"],angular.module("portfolio.todo",[]).config(o)}();
!function(){"use strict";function t(t){function n(n,e){return t.get(n,e)}function e(n,e,u){return t.post(n,e,u)}function u(n,e,u){return t.post(n,e,u)}function o(n,e){return t["delete"](n,e)}return{get:n,post:e,put:u,"delete":o}}t.$inject=["$http"],angular.module("portfolio.apis").factory("httpApi",t)}();
!function(){"use strict";function t(){function t(t){i=t}function n(t){var n=t.get(i);return n}n.$inject=["$injector"];var i="httpApi";return{set:t,$get:n}}angular.module("portfolio.apis").provider("dataApi",t)}();
!function(){"use strict";function t(t,r){function n(t,r){var n=t.endsWith("/"),e=t.lastIndexOf("/")+1;t=n?t:t.substr(0,e);var i=t.substr(e),u=s(t),o=u;return i&&(o=_.find(u,{id:i})),a(function(){return o})}function e(t,r,n){return a(function(){var n=s(t);r.id=Date.now(),n.push(r);var e=JSON.stringify(n);return o.setItem(t,e),r})}function i(t,r,n){r=_.omit(r,"$$hashKey");var e=t.endsWith("/"),i=t.lastIndexOf("/")+1,u=+t.substr(i);t=e?t:t.substr(0,i);var f=s(t);return a(function(){var n=_.find(f,{id:u});_.extend(n,r);var e=JSON.stringify(f);return o.setItem(t,e),r})}function u(t,r){var n=t.endsWith("/"),e=t.lastIndexOf("/")+1,i=+t.substr(e);t=n?t:t.substr(0,e);var u=s(t);return a(function(){var r=_.find(u,{id:i});return _.remove(u,r),o.setItem(t,JSON.stringify(u)),r})}function s(t){var r=o.getItem(t)||"[]";return JSON.parse(r)}function a(t){var n=t(),e=r.defer();return e.resolve(n),e.promise}var o=t.localStorage;return{get:n,post:e,put:i,"delete":u}}t.$inject=["$window","$q"],angular.module("portfolio.apis").factory("localApi",t)}();
!function(){"use strict";function t(t){function i(i,n){t(function(){n[0].focus()},250)}return{restrict:"A",link:i}}t.$inject=["$timeout"],angular.module("portfolio.directives").directive("autofocus",t)}();
!function(){"use strict";angular.module("portfolio.services").provider("nav",function(){function n(n){console.log(n),t.push(n)}function r(){return{getTabs:function(){return _.filter(t,function(n){return+n.tabIndex>0})}}}var t=[];return{register:n,$get:r}})}();
!function(){"use strict";function n(n,c){function o(c){n.debug("connect"),u=io.connect(c,{forceNew:!0})}function t(){n.debug("disconnect"),u.disconnect()}function e(o,t){n.debug("on"),u.on(o,function(){var n=arguments;c.$evalAsync(function(){t.apply(u,n)})})}function i(o,t,e){n.debug("emit called"),u.emit(o,t,function(){var n=arguments;c.$evalAsync(function(){e&&e.apply(u,n)})})}n.debug("socket LOADED");var u;return{connect:o,disconnect:t,on:e,emit:i}}n.$inject=["$log","$rootScope"],angular.module("portfolio.socket").factory("socket",n)}();
!function(){"use strict";function t(t){function e(){var e={description:i.newAbout};e.status="active",t.post(a,e).then(function(t){i.activeAbouts.push(t),i.newAbout=""})}function o(e){t["delete"](a+e.id).then(function(){_.remove(i.completedAbouts,e)})}function u(){t.get(a).then(function(t){i.activeAbouts=_.filter(t,{status:"active"}),i.completedAbouts=_.filter(t,{status:"completed"})})}function n(e){var o=_.cloneDeep(e);o.status="completed",t.put(a+e.id,o).then(function(){_.remove(i.activeAbouts,e),i.completedAbouts.push(o)})}function c(e){var o=_.cloneDeep(e);o.status="active",t.put(a+e.id,o).then(function(){_.remove(i.completedAbouts,e),i.activeAbouts.push(o)})}var i=this,a="api/about/";_.extend(i,{activeAbouts:[],completedAbouts:[],reactivate:c,archive:n,create:e,get:u,remove:o}),u()}t.$inject=["dataApi"],angular.module("portfolio.about").controller("aboutController",t)}();
!function(){"use strict";function t(t,e){function a(){e.connect(),e.on("connect",function(){e.emit("startFeed",{duration:i,frequency:s})}),e.on("initialFeed",function(t){o.data.dataset0=t}),e.on("feed",function(t){o.data.dataset0.length>=c&&o.data.dataset0.shift(),o.data.dataset0.push(t),o.feeds.push(t)}),t.$on("$destroy",function(){e.emit("stopFeed"),e.disconnect()})}function n(){return{margin:{top:15},series:[{axis:"y",dataset:"dataset0",key:"bpm",label:"Heart Rate (BPM)",color:"#1f99a5",type:["column"],id:"hr"},{axis:"y",dataset:"dataset0",key:"mph",label:"Speed (MPH)",color:"#3333ff",type:["line","area"],id:"speed"}],axes:{x:{key:"x",ticks:c,ticksShift:{x:-10},tickFormat:function(t,e){return(c-1-e%c)*s+"s"}}}}}var o=this,i=30,s=1,c=i/s;_.extend(o,{data:{dataset0:[]},feeds:[],options:n()}),a()}t.$inject=["$scope","socket"],angular.module("portfolio.chart").controller("chartController",t)}();
!function(){"use strict";!function(){function n(n,t){var e=this;e.navItems=n.getTabs(),e.openMenu=function(n,t){n(t)},e.isCurrentState=function(n){return n===t.current.name}}n.$inject=["nav","$state"],angular.module("portfolio").controller("layoutController",n)}()}();
!function(){"use strict";function t(){function t(){return[{title:"Timesheet",img:"",description:"Angular timesheet"},{title:"Task Manager",img:"",description:"Angular Task Manager"},{title:"To Do",img:"",description:"Angular ToDo"}]}var e=this;e.projects=t()}angular.module("portfolio.projects").controller("projectsController",t)}();
!function(){"use strict";function t(t){function o(){var o={description:d.newTodo};o.status="active",t.post(s,o).then(function(t){d.activeTodos.push(t),d.newTodo=""})}function e(o){t["delete"](s+o.id).then(function(){_.remove(d.completedTodos,o)})}function n(){t.get(s).then(function(t){d.activeTodos=_.filter(t,{status:"active"}),d.completedTodos=_.filter(t,{status:"completed"})})}function c(o){var e=_.cloneDeep(o);e.status="completed",t.put(s+o.id,e).then(function(){_.remove(d.activeTodos,o),d.completedTodos.push(e)})}function i(o){var e=_.cloneDeep(o);e.status="active",t.put(s+o.id,e).then(function(){_.remove(d.completedTodos,o),d.activeTodos.push(e)})}var d=this,s="api/todo/";_.extend(d,{activeTodos:[],completedTodos:[],reactivate:i,archive:c,create:o,get:n,remove:e}),n()}t.$inject=["dataApi"],angular.module("portfolio.todo").controller("todoController",t)}();
//# sourceMappingURL=app.js.map
