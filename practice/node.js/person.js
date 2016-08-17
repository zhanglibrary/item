var personclass = require('./person_class.js');
var personobject = require('./person_object.js');
var personarray = require('./person_array');
var personobjectarr = require('./person_object_arr');

// class
var personclass = new personclass();
personclass.eat();
personclass.say();

//object
console.log(personobject);
console.log(personobject.Person.say());
console.log(personobject.Person.eat());

//array
console.log(personarray);
console.log(personarray[0]);

//object_arr
console.log(personobjectarr.arr);
