'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope, $mdSidenav) {
    $scope.openMenu = function() {
        $mdSidenav('left').toggle();
    };
  });
