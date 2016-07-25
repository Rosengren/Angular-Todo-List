'use strict';

angular.module('todoListApp')
.controller('MainController', function($scope, dataService) {

  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  }

  dataService.getTodos(function(response) {
    console.log(response);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };

})
