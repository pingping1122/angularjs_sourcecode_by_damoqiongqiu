var myModule = angular.module("MyModule", []);

myModule.factory('game', function() {
    return {
        gameName: '大漠吃豆子'
    }
});

myModule.controller('MyCtrl', ['$scope', '$injector',
    function($scope, $injector) {
        // console.log($scope);
        // $injector.invoke(function(game) {
        //     console.log(game.gameName);
        // });
        // console.log($injector);
        console.log($injector.annotate(function(arg0,arg1,arg2){}));
    }
]);
