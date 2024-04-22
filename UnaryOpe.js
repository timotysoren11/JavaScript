/*
// Unary plus operator converts the string to the number 
let s = '10';
console.log(+s); 
*/

// Suppose you have a product object with toString() method
let person = {
    name : 'John',
    toString : function(){
        return '25';
    },
};

console.log(+person);
