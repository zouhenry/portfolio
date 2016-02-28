/**
 * Created by hzou on 2/27/16.
 */


(function () {
  'use strict';

  angular
    .module('portfolio')
    .controller('layoutController', layoutController);

  function layoutController(nav) {
    var self      = this;
    self.navItems = nav.getTabs();
  }

})();

