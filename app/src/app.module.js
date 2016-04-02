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