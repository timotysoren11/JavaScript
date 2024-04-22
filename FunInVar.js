// Storing function in a Variable and calling it in two different ways
function add(a,b){
    return a+b;
}
// storing the function in a variable
let sum = add;

// calling the function in two different ways
let result = add(10,20);
let answer = sum(10,20);

//Printing the answer 
console.log("First - result : ",result);
console.log("Second - result : ",answer);