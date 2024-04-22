// Passing a function in another function

// First function add() is declared
function add(a,b){
    return a+b;
}
// storing the add() function in a variable 
let sum = add;

// declaring another function and passing 3 argument, where third argument is a function
// Here fn() - it's work as add() function
function average(a, b, fn){
    return fn(a, b) / 2;
}

// calling the function
let result = average(10,20,sum);
console.log(result);