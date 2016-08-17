var util = require('util');
var Person = requirt('./person.js');

function Student(){
	Person.call(this);
}
util.inherits(Student,Person);
Student.prototype.study = function(){
	console.log('I am studying');
}
module.exports=Student;