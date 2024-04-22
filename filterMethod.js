// works on function condtion

const salaries = [10500, 33000,16000,40000];

function checkSalary(salary){
  return salary >= 10000;
}

const resultArray = salaries.filter(checkSalary);
console.log("Salaries greater than 10000 are : ", resultArray);