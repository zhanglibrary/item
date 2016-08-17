var util = require('util');
var Person = require('./person.js');

function Teacher(){
	Person.call(this);
}
util.inherits(Teacher,Person);
Teacher.prototype.teach = function(){
	console.log('Teacher is teaching');
}
module.exports=Teacher;