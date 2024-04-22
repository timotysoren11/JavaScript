/* 
Creating Object constructor function, which will help to create multiple
object with the same property  */


// This Constructor Object
function Student(first, last, age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// creating object 
let student1 = new Student("Manoj","Kumar",34);

// Adding method to the object student1
student1.name = function(){
  return this.firstName + " " + this.lastName;
}

console.log(student1);
console.log(student1.name());