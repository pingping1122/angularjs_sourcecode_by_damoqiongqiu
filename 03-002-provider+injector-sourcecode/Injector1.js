//推断型注入：函数参数的名称必须要和被注入的对象相同
var myModule = angular.module("MyModule", []);

var MyCtrl = function($scope) {
    $scope.gameName = "大漠吃豆子";
}

myModule.controller('MyCtrl', MyCtrl);