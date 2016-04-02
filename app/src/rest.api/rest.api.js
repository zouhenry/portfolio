/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.rest.api')
  .provider('restApi', restApiProvider);

function restApiProvider() {
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