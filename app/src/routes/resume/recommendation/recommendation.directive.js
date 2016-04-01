/**
 * Created by hzou on 3/31/16.
 */

angular.module('portfolio.resume')
  .directive('recommendation', recommendation);

function recommendation() {
  return {
    restrict        : "E",
    bindToController: {
      rec: "=recommendation"
    },
    scope           : true,
    link            : link,
    controller      : controller,
    controllerAs    : "recCtrl",
    templateUrl     : "routes/resume/recommendation/recommendation.html"
  };

  function link(scope, elem, attrs, controller) {

  }

  function controller() {
    var vm = self;

  }
}