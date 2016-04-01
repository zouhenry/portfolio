/**
 * Created by hzou on 3/31/16.
 */

angular.module('portfolio.resume')
  .directive('experience', experience);

function experience() {
  return {
    restrict: "E",
    bindToController: {
      experience: "="
    },
    scope: true,
    link: link,
    controller: controller,
    controllerAs: "expCtrl"
  };

  function link(scope, elem, attrs, controller) {

  }

  function controller() {
    var vm = self;

  }
}