var myModule = angular.module("MyModule", []);
myModule.provider("HelloAngular", function() {
    return {
        $get: function() {
            var name = "慕课网";
            function getName() {
                return name;
            }
            return {
                getName: getName
            }
        }
    }
});
myModule.controller('MyCtrl', ['$scope', 'HelloAngular',
    function($scope, helloAngular) {
        $scope.gameName = helloAngular.getName();
    }
])
