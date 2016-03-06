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
    'portfolio.apis',
    //services
    'portfolio.services',
    //pages
    'portfolio.layout',
    'portfolio.projects',
    'portfolio.todo',
    'portfolio.about'
  ])
  .config(config);

function config(dataApiProvider, $mdThemingProvider) {
  dataApiProvider.set('localApi');
  //$mdThemingProvider.theme('default')
  //  .primaryPalette('light-blue')
  //  .accentPalette('teal');
}