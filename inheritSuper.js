/* Using of super()- method 
 It calls the constructor from the parent class in child class */ 

//parent class
class emp{
  constructor(n){
    this.name = n;
  }
}
// child class
class manager extends emp{
  constructor(p,d){
    super(p);
    this.department = d;
  }
}
//object 
let mgn1 = new manager('Raju','CS');
console.log(mgn1);