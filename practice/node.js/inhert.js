// node.js继承使用inherts（将一个构造函数的原型方法继承到另一个构造函数）
// node.js 继承：
// 1.创建子类
// 2.子类中  父类.call（this）
// 3.util.inherts（子类， 父类）
// 4.~~~~~~~~~~~



var util = require('util');
var events = require('events');
function Mystream(){
	events.EventEmitter.call(this);
}

Mystream.prototype.write = function(data){
	this.emit('data',data);
}

var stream = new Mystream();

console.log(stream instanceof Mystream);
console.log(stream instanceof events.EventEmitter);
// 71C8C40