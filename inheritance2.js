// Argument is passed to the new class which inherit from first class

class emp{
  constructor(n){
    this.name = n;
  }
}
// another class
class manager extends emp{

}

// object
let mng1 = new manager('Raju');
console.log(mng1);