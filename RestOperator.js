// Rest Operator - Helps to represent an infinite number of arguments as an integer

function average(...numbers){

  const sum = numbers.reduce((acc,curr) => acc + curr,0);

  return sum/numbers.length;
}
console.log(average(2,4,6));