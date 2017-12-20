var myModule = angular.module("MyModule", []);
myModule.directive('repeater', function() {
    return {
        restrict: 'A',
        compile: function(el, attrs, transclude) {
            //这里开始对标签元素自身进行一些变换
            console.log("repeat...compile...");
            
            var tpl = el.children().clone();            
            for (var i = 0; i < attrs.repeater - 1; i++) {
                el.append(tpl.clone());
            }

            //返回link函数
            return function(scope, el, attrs, controller) {
                console.log("repeat...link...");
            }
        }
    }
});
