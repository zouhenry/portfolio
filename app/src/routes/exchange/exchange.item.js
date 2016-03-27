/**
 * Created by hzou on 3/27/16.
 */


angular
  .module('portfolio.exchange')
  .directive('exchangeItem', exchangeItem);

function exchangeItem() {
  return {
    //bind paramst o controller
    bindToController: {
      product: "="
    },
    scope           : true, //isolated
    /* @ngInject */
    controller      : function () {
    },
    controllerAs    : "exchangeItemCtrl",
    templateUrl     : function (elem, attrs) {
      return attrs.templateUrl || 'routes/exchange/exchange.item.html';
    }
  };
}