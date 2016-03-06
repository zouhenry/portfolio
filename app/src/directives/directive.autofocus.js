/**
 * Created by hzou on 3/6/16.
 */

angular
  .module('portfolio.directives')
  .directive('autofocus', autofocus);

function autofocus($timeout) {
  return {
    restrict: 'A',
    link    : focusOnLoad
  };

  function focusOnLoad($scope, $element) {
    $timeout(function () {
      $element[0].focus();
    });
  }

}