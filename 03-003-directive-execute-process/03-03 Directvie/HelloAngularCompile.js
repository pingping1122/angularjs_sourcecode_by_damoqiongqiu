var myModule = angular.module("MyModule", []);
myModule.directive('alotofhello', function() {
    return {
        restrict: 'A',
        compile: function(el,attrs,transclude) {
            //这里开始对标签元素自身进行一些变换
            console.log("指令编译...");
            var tpl = el.children().clone();
            console.log(tpl);
            for (var i = 0; i < attrs.alotofhello - 1; i++) {
                el.append(tpl.clone());
            }
            return function(scope,el,attrs,controller){
            	console.log("指令链接...");
            }
        },
        link:function(){
            console.log("我自己的link函数...");
        }
    }
});
