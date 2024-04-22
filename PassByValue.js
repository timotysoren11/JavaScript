// Pass by value

function square(x){
    x = x * x;
    return x;
}

// Passing the value of y into x
let y = 10;
let result = square(y);

console.log(result);
console.log(y);