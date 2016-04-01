/**
 * Created by hzou on 3/31/16.
 */

angular.module('portfolio.resume')
  .directive('recommendation', recommendation);

function recommendation() {
  return {
    restrict: "E",
    bindToController: {
      experience: "="
    },
    scope: true,
    link: link,
    controller: controller,
    controllerAs: "recommendCtrl"
  };

  function link(scope, elem, attrs, controller) {

  }

  function controller() {
    var vm = self;

  }
}