/* Example of CallBack function- 
When a function is passed as an argument in another
function then this process is called CallBack Function */

//first function

function processData(data){
  console.log("Processing ....."+data);
}

// Another function which will take first person as argument

function func(callback){
  callback("John");
}

// Passing the first function as argument
func(processData);