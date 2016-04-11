/**
 * Created by hzou on 2/21/16.
 */
/*========================================
 =              APP START                =
 ========================================*/

angular
  .module('portfolio', [
    'ngSanitize',
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
  .config(config)
  .run(run);

function config(restApiProvider, $mdThemingProvider) {
  restApiProvider.set('httpApi');
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue');
}

function run(httpApi) {
  // httpApi.setApiBaseUrl("http://localhost:4000/");
}