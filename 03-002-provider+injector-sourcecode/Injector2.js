var myModule = angular.module("MyModule", []);

var MyCtrl = function(thisIsMyName) {
    thisIsMyName.gameName = "大漠吃豆子";
}

MyCtrl.$inject = ['$scope'];

myModule.controller('MyCtrl', MyCtrl);