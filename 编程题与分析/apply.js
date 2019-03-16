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