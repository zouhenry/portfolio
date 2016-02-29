/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.apis')
  .provider('dataApi', dataApiProvider);

function dataApiProvider() {
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