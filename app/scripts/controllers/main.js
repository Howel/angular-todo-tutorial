'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStorage = localStorageService.get('todos');
    
    // $scope.todos = todosInStorage && todosInStorage.split('\n') || []; 
    // The line above is shorthand for the if condition below

	if (todosInStorage) {
		$scope.todos = todosInStorage.split('\n');
	} else {
		$scope.todos = [];
	}

    $scope.$watch('todos', function() {
    	localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addTodo = function() {
		$scope.todos.push($scope.todo);
		$scope.todo = '';
    };

    $scope.removeTodo = function(todo) {
    	$scope.todos.splice($scope.todos.indexOf(todo), 1);
    }
  });
