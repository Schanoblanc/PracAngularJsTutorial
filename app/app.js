'use strict'

//define the phonecatApp module
var phonecatApp = angular.module('phonecatApp',[]);

//defien the PhoneListController contorller on the phonecatApp
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
});
