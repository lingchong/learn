

var event = require('event');
var util = require('util');

var Person = function(name){
  this.name = name
  }
   util.inherits(Person,event.EventEmitter);
   
var xiaoming = new Perison("xiaoming");
var lili = new Perison("lili");
var lucy = new Person("lucy");

ver person = [xiaoming,lili,lucy];

persion.forEach(function(person){

    person.on("speak",,function(message){
	   console.log(person.name + "said" +message);
	   })
	 })
xiaoming.emit('speak','hi');
lucy.emit('speak','I want a curry');
