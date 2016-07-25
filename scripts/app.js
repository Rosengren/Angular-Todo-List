angular.module('todoListApp', [])
.controller('MainController', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This is the hello world controller function in the mainCtrl");
  }
});
