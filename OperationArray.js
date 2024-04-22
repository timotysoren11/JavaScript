/*
1.// Adding an element to the end of the array
let seas = ['Black  Sea','North  Sea'];
seas.push('Red Sea');
console.log(seas);

2.// Adding an element to the beginning of the array
let seas = ['Black  Sea','North  Sea'];
seas.unshift('Caribean Sea');
console.log(seas);

3.// Removing element from the end of the array
let seas = ['Black  Sea','North  Sea','Caribean Sea','Red Sea'];
const lastElement = seas.pop();
console.log(lastElement);

4.// Removing element from the beginnning of the arrray
let seas = ['Black  Sea','North  Sea','Caribean Sea','Red Sea'];
const firtElement = seas.shift();
console.log(firtElement);
console.log(seas);

// Finding the index of an element in the arrray
let seas = ['Black  Sea','North  Sea','Caribean Sea','Red Sea'];
let index = seas.indexOf('Caribean Sea');
console.log(index);
*/

// Checking the if the value is an array
let seas = ['Black  Sea','North  Sea','Caribean Sea','Red Sea'];
console.log(Array.isArray(seas));