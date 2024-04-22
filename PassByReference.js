// Pass by reference

let person = {
    name : 'John',
    age : 25
};

function increaseAge(obj){
    obj.age +=1;

    // reference another object
    obj = {name : 'John', age : 22};
}

increaseAge(person);
console.log(person);