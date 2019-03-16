
箭头函数中的this 判断
箭头函数里面的this是继承它作用域父级的this， 即声明箭头函数处的this

let a = {
  b: function() { 
    console.log(this) 
  },
  c: () => {
    console.log(this)
  }
}

a.b()   // a
a.c()   // window

let d = a.b
d()     // window
this判断 下面输出为多少？
var name1 = 1;

function test() {
	let name1 = 'kin';
	let a = {
		name1: 'jack',
		fn: () => {
      var name1 = 'black'
      console.log(this.name1)
    }
  }
	return a;
}

test().fn() // ?
答案： 输出1

因为fn处绑定的是箭头函数，箭头函数并不创建this，它只会从自己的作用域链的上一层继承this。这里它的上一层是test()，非严格模式下test中this值为window。

如果在绑定fn的时候使用了function，那么答案会是 'jack'
如果第一行的 var 改为了 let，那么答案会是 undefind， 因为let不会挂到window上