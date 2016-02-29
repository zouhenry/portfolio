/**
 * Created by hzou on 2/28/16.
 */

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