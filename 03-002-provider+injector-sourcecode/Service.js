var myModule = angular.module("MyModule", []);
myModule.service("HelloAngular", function() {
    this.name = "慕课网";
    this.getName=function(){
        return this.name;
    }
});
myModule.controller('MyCtrl', ['$scope', 'HelloAngular',
    function($scope, helloAngular) {
        $scope.gameName = helloAngular.getName();
    }
]);
