/* 
Accessing varibale from constructor  with method
and declaring the value of it using object of class */

class hello{

  // constructor 
  constructor(){

    //varibale declared
    let name = '';
    console.log("Constructor here");
  }

  // Another method ot access the varibale and print it
  hey(){
    console.log("Hello ! "+this.name);
  }
}

// Creating the object of the class
let a = new hello();

// assigning the value of the name property with object a
a.name = "Rahul";