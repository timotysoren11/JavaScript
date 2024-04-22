/* Arithmetic Operators : -
1. Addition
2. Subtraction
3. Multiplication
4. Division

// Example 1 of Addition Operator
let sum = 10+20;
console.log(sum);  

// Example 2
let netPrice = 9.99;
shippingFee = 1.99;
let grossPrice = netPrice + shippingFee;
console.log(grossPrice);

// Addition operator can be used for concatenate two strings
let x = '10';
    y = '20';
let result = x + y;
console.log(result); 

// Example of Substraction Operator
let  result = 30-10;
console.log(result); 

// Example of Multiplication
let res = 3*4;
console.log(res);  */

// Arithmetic with Objects
let energy  = {
    valueOf(){
        return 100;
    },
};

let currentEnergy = energy -10;
console.log(currentEnergy);

currentEnergy = energy +100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);


