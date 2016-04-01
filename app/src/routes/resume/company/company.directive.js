/**
 * Created by hzou on 3/31/16.
 */

angular.module('portfolio.resume')
  .directive('company', company);

function company() {
  return {
    restrict        : "E",
    bindToController: {
      company: "="
    },
    scope           : true,
    link            : link,
    controller      : controller,
    controllerAs    : "companyCtrl",
    templateUrl     : "routes/resume/company/company.html"
  };

  function link(scope, elem, attrs, controller) {
  }

  function controller() {
    var vm = self;
    angular.extend(vm, {
      dateformat: "MM-yy"
    });
  }
}