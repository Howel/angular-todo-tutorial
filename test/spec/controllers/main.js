'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos.length).toBe(3);
  });

  it('should add a todo when addTodo is called', function () {
    scope.todo = 'Another Todo';
    scope.addTodo();
    expect(scope.todos.length).toBe(4);
    expect(scope.todos.indexOf('Another Todo')).toBe(3);
    expect(scope.todo).toBe('');
  });

  it('should remove a todo when removeTodo is called', function () {
    scope.removeTodo('Buy Milk');
    expect(scope.todos.length).toBe(2);
    expect(scope.todos.indexOf('Buy Milk')).toBe(-1);
  })
});
