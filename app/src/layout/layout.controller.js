/**
 * Created by hzou on 2/27/16.
 */


(function () {
  'use strict';

  angular
    .module('portfolio')
    .controller('layoutController', layoutController);

  function layoutController(nav, $state) {
    var self      = this;
    self.navItems = nav.getTabs();
    self.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    self.isCurrentState = function isCurrentState(stateName) {
      return stateName === $state.current.name;
    };
  }

})();

