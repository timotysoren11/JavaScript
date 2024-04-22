// Object Destructuring - helps in extracting multiple properties from an object

let person = {
  firstName : "John",
  lastName : "Doe",
  age : 24
};

// Using Object Destructuring to extract properties 
const {firstName, lastName, age} = person;

// Displaying 
console.log(firstName);
console.log(lastName);
console.log(age);