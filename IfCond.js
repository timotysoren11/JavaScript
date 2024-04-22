/*
// IF condition - Example - age for voting
let age = 18;
if(age>=18){
    console.log("You are eligible to vote");
}  

// NESTED-IF - Example
let age = 16;
let state = 'CA';

if(state == 'CA'){
    if(age>=16){
        console.log("You can drive");
    }
}
*/

// Avoid using of nested if- instead we can use && operator
let age = 16;
let state = 'CA';

if(age>=16 && state == 'CA'){
    console.log("You can drive");
}