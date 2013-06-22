'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Buy Milk', 'Eat Cookies', 'Have Party'];

    $scope.addTodo = function() {
		$scope.todos.push($scope.todo);
		$scope.todo = '';
    };

    $scope.removeTodo = function(todo) {
    	$scope.todos.splice($scope.todos.indexOf(todo), 1);
    }
  });
