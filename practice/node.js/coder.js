var util = require('util');
var Person = require('./person.js');

function Coder(){
	Person.call(this);
	this.eat = function(){
		console.log('eating');
	}
}
util.inherits(Coder,Person);
Coder.prototype.pin = function(){
	console.log('Coder is playing');
}
module.exports=Coder;