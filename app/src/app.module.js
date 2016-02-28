/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio', [
    'ui.router',
    'ngMaterial',
    'ipsum',
    //templates
    'portfolio.tpls',
    //services
    'portfolio.services',
    //pages
    'portfolio.layout',
    'portfolio.projects',
    'portfolio.todo']);