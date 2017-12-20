/**
 * 定义模块
 * @type {[type]}
 */
var myModule = angular.module("MyModule", []);

/**
 * 从debug的过程可以看到，angular中的“模块”只是一个闭包空间（或者叫命名空间）
 * 所有模块都被注册在modules这个对象上
 */

//Module实例上有一些什么东西？
console.log(myModule);