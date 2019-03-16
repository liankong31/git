Function.prototype.myApply=function(context){
if(typeof this !=='function'){
	throw new TypeError('Error');
}
context=context||window;
context.fn=this;
let result;
if(arguments[1]){
	result=context.fn(...arguments[1])
}else{
	result=context.fn();
}
delete context.fn;
return result;
}
var module={
	time:'1',
	sayHello:function(){
	console.log("1"+this.time);
}
}
var tmp=module.sayHello;
var res=tmp.myApply(module);
console.log(res);
// 首先要先原型上即 Function.prototype上编程
// 需要拿到函数的引用， 在这里是 this
// 让 传入对象.fn = this
// 执行 传入对象.fn(传入参数)
// 返回执行结果