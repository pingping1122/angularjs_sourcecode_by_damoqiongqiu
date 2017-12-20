var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'E',
        template: '<div>Hi everyone!</div>',
        replace: true,
        link: function(scope, el, attrs, controller) {
            //console.log("<hello>...link...");
            el.on("mouseenter", function() {
                console.log("鼠标进入...");
            });
        }
    }
});
