/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.rest.api')
  .factory('httpApi', httpApi);

function httpApi($http) {
  var apiBaseUrl = "";
  return {
    setApiBaseUrl: setApiBaseUrl,
    get          : get,
    post         : post,
    put          : put,
    "delete"     : remove
  };

  function setApiBaseUrl(url) {
    apiBaseUrl = url;
  }

  function makeUrl(url) {
    return apiBaseUrl + url;
  }

  function get(url, opts) {
    return $http.get(makeUrl(url), opts).then(getData);
  }

  function post(url, data, opts) {
    return $http.post(makeUrl(url), data, opts).then(getData);
  }

  function put(url, data, opts) {
    return $http.post(makeUrl(url), data, opts).then(getData);
  }

  function remove(url, opts) {
    return $http.delete(makeUrl(url), opts).then(getData);
  }


  /*========================================
   =                 priavate                =
   ========================================*/
  function getData(response) {
    return response.data;
  }
}