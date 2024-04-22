// map () - example
const array = [1,2,3,4];

// function to increase the value of each element
function func(num){
  return num + 1;
}
// creating a new array with value of each element is increased to 1
const newArr = array.map(func);

console.log("Old array is : ", array);
console.log("New array is : ", newArr);