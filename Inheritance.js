// Inheritance in JS

class emp{
  constructor(){
    console.log("Constructor here....");
  }
}
  // new class which inherit main class properties
  class manager extends emp{

  }

// object of new class
let mng1 = new manager();