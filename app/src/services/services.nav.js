/**
 * Created by hzou on 2/27/16.
 */

angular
  .module('portfolio.services')
  .provider('nav', function navServiceProvider() {
    var tabs = [];
    return {
      register: register,
      $get    : navService
    };

    function register(tab) {
      console.log(tab);
      tabs.push(tab);
    }

    function navService() {
      return {
        getTabs: function () {
          return _.filter(tabs, function(tab){
            return +tab.tabIndex > 0;
          });
        }
      };
    }
  });

