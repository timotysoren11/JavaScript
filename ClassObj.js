/* Class and Object - 
- whenever the object of class is created- the constructor is called
automatically */

class person {
  constructor(){
    let a = 50; let b= 50;
    let c = a+b;
    console.log("A person is created ...."+c);
  }
}

// Object is created
// whenever object is created - the constructor is called
let a = new person();
let b = new person();