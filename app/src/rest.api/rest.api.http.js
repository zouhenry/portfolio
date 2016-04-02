/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.rest.api')
  .factory('httpApi', httpApi);

function httpApi($http) {
  return {
    get     : get,
    post    : post,
    put     : put,
    "delete": remove
  };

  function get(url, opts) {
    return $http.get(url, opts).then(getData);
  }

  function post(url, data, opts) {
    return $http.post(url, data, opts).then(getData);
  }

  function put(url, data, opts) {
    return $http.post(url, data, opts).then(getData);
  }

  function remove(url, opts) {
    return $http.delete(url, opts).then(getData);
  }


  /*========================================
   =                 priavate                =
   ========================================*/
  function getData(response) {
    return response.data;
  }
}