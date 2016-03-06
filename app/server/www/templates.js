angular.module("portfolio.tpls", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html><html lang=\"en\" ng-app=\"portfolio\"><head><meta http-equiv=\"X-UA-Compatbile\" content=\"IE-Edge\"><meta name=\"description\" content=\"\"><meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\"><meta charset=\"UTF-8\"><title>Portfolio</title><link rel=\"stylesheet\" href=\"app.css\"></head><body><ui-view></ui-view><script src=\"app.js\"></script><script src=\"templates.js\"></script></body></html>");
$templateCache.put("about/about.html","<md-card><md-card-header>Summary</md-card-header><md-card-content>I am a professional web application developer with focus on optimizing efficiency. I have succeeded in increasing the Projector\'s efficiency via the team and the architecture. I have instituted a technical training program to train and advance the team\'s knowledge. To further enhance training, I introduced the team to an online video training site, Pluralsight.com. I have defined and implemented an architecture/framework to simplify the team\'s implementation and testing efforts. With the team\'s ever increasing technical knowledge and the S.O.L.I.D. architecture; resulted in modular, extensible, scaleable, maintainable, and robust apps.</md-card-content></md-card><md-card><md-card-header>Core skills</md-card-header><md-card-content><ul><li>Angular, Backbone, WebSocket, Gulp, Yeoman, Sass, Jade</li><li>Foundation for Apps, Angular Material, Twitter Bootstrap</li><li>Front-end development: Object-Oriented JavaScript, HTML, CSS</li><li>Architecture, Design Patterns, Re-usable code</li><li>Positive, enthusiastic role model and mentor</li></ul></md-card-content></md-card>");
$templateCache.put("projects/projects.html","<div layout-wrap=\"layout-wrap\" class=\"layout-row\"><div ng-repeat=\"project in projectsCtrl.projects track by $index\" flex-sm=\"50\" flex-gt-sm=\"33\" flex-xs=\"100\" class=\"project-card\"><md-card><md-card-header class=\"center\">{{project.title}}</md-card-header><md-card-content><p ipsum=\"3s\"></p></md-card-content><md-card-footer>{{project.description}}</md-card-footer></md-card></div></div>");
$templateCache.put("layout/layout.header.html","<div id=\"header\"><div class=\"name\"><div class=\"right nametext\">Henry Zou<small hide-xs=\"hide-xs\" class=\"title\">Front End Engineer</small></div><md-menu hide-gt-xs=\"hide-gt-xs\" class=\"layout-row\"><md-button ng-click=\"layoutCtrl.openMenu($mdOpenMenu, $event)\" class=\"md-icon-button\"><md-icon md-font-icon=\"fa-bars\" class=\"fa fa-2x\"></md-icon></md-button><md-menu-content width=\"4\"><md-menu-item ng-repeat=\"item in layoutCtrl.navItems | orderBy:\'tabIndex\':false\" ui-sref=\"{{item.state}}\"><md-button>{{item.tabName}}</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><a target=\"_blank\" href=\"https://www.linkedin.com/in/zouhenry\" title=\"Henry Zou on Linkedin\" class=\"md-button\"><md-icon md-font-icon=\"fa-linkedin\" md-menu-align-target=\"\" class=\"fa fa-lg\">LinkedIn</md-icon></a></md-menu-item><md-menu-item><a target=\"_blank\" href=\"https://github.com/zouhenry\" title=\"Henry Zou on GitHub\" class=\"md-button\"><md-icon md-font-icon=\"fa-github\" md-menu-align-target=\"\" class=\"fa fa-lg\">Github</md-icon></a></md-menu-item><md-menu-item class=\"hide\"><a target=\"_blank\" href=\"https://github.com/zouhenry\" title=\"Henry Zou on GitHub\" class=\"md-button\"><md-icon md-font-icon=\"fa-youtube\" md-menu-align-target=\"\" class=\"fa fa-lg\">Youtube</md-icon></a></md-menu-item></md-menu-content></md-menu></div><div class=\"right\"><div hide-xs=\"hide-xs\" class=\"menu layout-row\"><div ng-repeat=\"item in layoutCtrl.navItems | orderBy:\'tabIndex\':false\" class=\"menu-item\"><a ui-sref=\"{{item.state}}\">{{item.tabName}}</a></div></div><small hide-gt-xs=\"hide-gt-xs\" class=\"title\">Front End Engineer</small></div></div><div class=\"avatar\"><img src=\"images/portfolio.jpg\"/></div>");
$templateCache.put("layout/layout.html","<div ng-include=\"\'layout/layout.header.html\'\" class=\"center-panel\"></div><div id=\"content\" class=\"center-panel\"><ui-view></ui-view></div>");
$templateCache.put("todo/todo.html","<div id=\"todo\" class=\"layout-column center-panel\"><md-card><md-card-header class=\"center\">Pending</md-card-header><md-card-content><md-list><md-subheader><ng-pluralize count=\"todoCtrl.activeTodos.length\" when=\"{\'0\':\'Add a new one task below\', \'one\': \'1 pending task\', \'other\': \'{} pending tasks\'}\"></ng-pluralize></md-subheader><md-list-item ng-repeat=\"todo in todoCtrl.activeTodos\" ng-click=\"todoCtrl.archive(todo)\" class=\"todo-item\"><input type=\"checkbox\" class=\"check\"/>{{todo.description}}</md-list-item><md-list-item class=\"todo-item todo-add\"><form ng-submit=\"todoCtrl.create()\" flex=\"flex\"><md-input-container class=\"layout-fill\"><label>write a new task and press enter...</label><input autofocus=\"autofocus\" type=\"text\" ng-model=\"todoCtrl.newTodo\" autocomplete=\"off\"/></md-input-container></form></md-list-item></md-list></md-card-content></md-card><md-card ng-if=\"todoCtrl.completedTodos.length &gt; 0\"><md-card-header class=\"center\">Completed</md-card-header><md-card-content><md-list><md-subheader><ng-pluralize count=\"todoCtrl.completedTodos.length\" when=\"{\'one\': \'1 completed task\', \'other\': \'{} completed tasks\'}\"></ng-pluralize></md-subheader><md-list-item ng-repeat=\"todo in todoCtrl.completedTodos\" ng-click=\"todoCtrl.reactivate(todo)\" class=\"todo-item todo-completed\"><input type=\"checkbox\" class=\"check\"/><p>{{todo.description}}</p><md-button ng-click=\"todoCtrl.remove(todo)\" class=\"md-icon-button\"><md-icon md-font-icon=\"fa-times\" class=\"fa fa-lg md-accent\"></md-icon></md-button></md-list-item></md-list></md-card-content></md-card></div>");}]);