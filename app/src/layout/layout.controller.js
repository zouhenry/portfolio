/**
 * Created by hzou on 2/27/16.
 */


(function () {
    'use strict';

    angular
        .module('portfolio')
        .controller('layoutController', layoutController);

    function layoutController(nav) {
        var self = this;
        self.navItems = nav.getTabs();
        self.openMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };

        var socket = io();
        socket.on('connect', function () {
            _.defer(function () {
                socket.emit('new message', 'hi from the client');
            }, 2500);
        });
        socket.on('new message', function (message) {
            console.log('new message from server', message);
        });
    }

})();

