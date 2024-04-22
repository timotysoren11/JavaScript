// Reduce method example

const numbers  = [2,7,3,8];

const result = numbers.reduce((prev, number) =>{
  return prev + numbers;
},0);

console.log(result);