/**
 * Created by hzou on 3/27/16.
 */
(function () {
  'use strict';

  angular
    .module('portfolio.routes', [
      //pages
      'portfolio.layout',
      'portfolio.projects',
      'portfolio.todo',
      'portfolio.about',
      'portfolio.resume',
      'portfolio.chart',
      'portfolio.exchange'
    ]);

})();