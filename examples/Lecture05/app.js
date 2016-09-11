(function(){
'use strict';

angular.module('myFirstApp',[])
.controller('MyFirstController', function($scope){
  $scope.name = "gspagoni";
  $scope.sayHello = function(){
    return "Hello Coursera";
  };
});

})();
