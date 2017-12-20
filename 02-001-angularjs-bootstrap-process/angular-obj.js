console.log(angular);

/**
 * angular对象上的静态工具方法
 * @type {Number}
 */
var counter = 0;
for (var p in angular) {
    counter++;
    if (angular.isFunction(angular[p])) {
        console.log("function->" + p);
    } else {
        console.log("property-->" + p + "-->" + angular[p]);
    }
}
console.log(counter);

/**
 * angular.injector();
 */
var injector=angular.injector();
console.log(injector);

/**
 * angular.module();
 */
var myModule = angular.module("MyModule", []);
console.log(myModule);
