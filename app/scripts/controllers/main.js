'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Buy Milk', 'Eat Cookies', 'Have Party'];
  });
