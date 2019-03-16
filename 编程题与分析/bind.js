
// 因为bind的使用方法是 某函数.bind(某对象，...剩余参数)
// 所以需要在Function.prototype 上进行编程
// 将传递的参数中的某对象和剩余参数使用apply的方式在一个回调函数中执行即可
// 要在第一层获取到被绑定函数的this，因为要拿到那个函数用apply
// /**
console.log("下面是自封装的bind方法实现");
Function.prototype.myBind=function(target){
	target=target||window;
	var self=this;
	var tmp=function(){};
	var args=[].slice.call(arguments,1);
	var F=function(){
		var _args=[].slice.call(arguments,0);
		return self.apply(this instanceof tmp ? this :target,args.concat(_args));
	}
	tmp.prototype=this.prototype;
	F.prototype=new tmp();
	return F;
}
var module={
	time:'1',
	sayHello:function(){
	console.log("1"+this.time);
}
}
var tmp=module.sayHello;
var res=tmp.myBind(module);
console.log(res());