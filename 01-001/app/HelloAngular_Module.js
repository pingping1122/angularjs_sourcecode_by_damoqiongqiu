var myModule = angular.module("HelloAngular", []);

// 1--标准式注入
myModule.controller("helloAngular", ['$scope',
    function HelloAngular($scope) {
        $scope.greeting = {
            text: 'Hello111'
        };
    }
]);

// 2--推断式注入
/*myModule.controller("helloAngular",
    function HelloAngular($scope) {
        $scope.greeting = {
            text: 'Hello222'
        };
    }
);*/

// 3--标注式注入
/*var myCtrl = function (thisIsMyScopeName) {
    thisIsMyScopeName.greeting = {
        text: 'Hello333'
    }
};
myCtrl.$inject = ['$scope'];// 对应各个参数名
myModule.controller('helloAngular', myCtrl);*/

// 4-内联式注入--可自定义myscope 名字--压缩工具压缩也不会报错
/*
myModule.controller("helloAngular", ['$scope',
    function HelloAngular($myScopeName) {
        $myScopeName.greeting = {
            text: 'Hello444'
        };
    }
]);*/
