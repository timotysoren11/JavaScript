// Creating Method inside the class

class person{
  //constructor
  constructor(n,a){
    this.name = n;
    this.age = a;
  }
  //creating Method
  sayhi(){
    console.log("Hi there...");
  }
}
// creating object
let person1 = new person('Raju',28);

// calling the Method
person1.sayhi();

// Displaying the result
console.log(person1);