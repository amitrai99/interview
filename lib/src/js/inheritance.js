/**
 * JS only has prototypal inheritance on "objects" not on class. (ES6 has defined class)
 * prototypal works by object linking
 * There are two ways to do prototypal inheritance in JS
 * (1) By using new keyword
 * (2) By using ES5 Object.create method
 */

//Base class
function Vehicle() {
  this.name = "vehicle " + parseInt( Math.random()*100 );
}

Vehicle.prototype.getName = function () {
  console.log( this.name );
};

//sub class using new keyword
function Car() {}
Car.prototype = new Vehicle;//new will create a new Object and call Vehicle with this object as context
Car.prototype.constructor =  Car;
var bmw = new Car();

//But what if we return a value from constructor
//Then the constructor will return that value and new keyword will NOT return a constructed object
//It is a bad practice to return anything from a constructor don't return anything from it
//If you have to return then we will have to use the Object.create for prototyping
function Vehicle() {
  this.name = "vehicle " + parseInt( Math.random()*100 );
  return this.name;
}

//sub class using ES5 Object.create
//Note here that only prototype is copied over,
//constructor function Vehicle is never run, therefore
//the public properties defined inside base class are not copied over
//Thus Bike class will have the start method but no name property
//This problem can be remedied to some extent by calling baseclass call method with this inside the subclass
function Bike() {}
Bike.prototype = Object.create( Vehicle.prototype );
var honda = new Bike();

//By calling the baseclass.call inside the subclass we can copy over the properties
//However, the properties are copied per instance not on prototype so this is memory inefficient
function Scooter() {
  Vehicle.call(this);
}
Scooter.prototype = Object.create( Vehicle.prototype );
var scooty = new Scooter();
