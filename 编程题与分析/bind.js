
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