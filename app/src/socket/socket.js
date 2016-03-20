/**
 * Created by hzou on 3/19/16.
 */


  angular
    .module('portfolio.socket')
    .factory('socket', socket);

  function socket($log, $rootScope) {
    $log.debug('socket LOADED');
    var socket;
    return {
      connect: connect,
      on     : on,
      emit   : emit
    };

    function connect(uri) {
      socket = io.connect(uri, { 'forceNew': true });
    }

    function on(eventName, callback) {
      $log.debug('on called');
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$evalAsync(function () {
          callback.apply(socket, args);
        });
      });
    }

    function emit(eventName, data, callback) {
      $log.debug('emit called');
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$evalAsync(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  }
