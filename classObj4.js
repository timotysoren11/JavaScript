// Creating Static Method inside class
// static mthode is called by static method 

class person{
  constructor(n,a){
    this.name = n;
    this.age = a;
  }
  // Normal Method
  sayHi(){
    console.log('Normal method');
  }
  // static method
  static hello(){
    console.log('static Method ..')
  }
}
// creating object for class
let person1 = new person('Raju',29);

// calling normal method
person1.sayHi();

// calling a static method
person.hello();