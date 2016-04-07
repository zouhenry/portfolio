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
    connect   : connect,
    disconnect: disconnect,
    on        : on,
    emit      : emit
  };

  function connect(uri) {
    $log.debug('connect');
    socket = io.connect(uri, { 'forceNew': true });
  } 

  function disconnect() {
    $log.debug('disconnect');
    socket.disconnect();
  }

  function on(eventName, callback) {
    $log.debug('on');
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
