//最简单的例子
var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope',function($scope) {
        $scope.gameName = "大漠吃豆子"
    }
]);
