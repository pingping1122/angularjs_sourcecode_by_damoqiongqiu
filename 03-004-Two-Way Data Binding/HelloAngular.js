var myModule = angular.module("MyModule", []);
myModule.controller("MyCtrl",["$scope",function($scope){
    $scope.greeting="Hello Angular!";
}]);