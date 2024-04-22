// Example of Constructor Function

// Creating constructor function with two parameters
function Person(firstName, lastName){
  //properties
  this.firstName = firstName;
  this.lastName = lastName;

  // creating methods
  this.greet = function(){
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
  };
}

// creating new Person Object using constructor function
let person1 = new Person('John', 'Doe');
let person2 = new Person('Jane', 'Smith');

// calling the greet Method on each object
person1.greet();
person2.greet();