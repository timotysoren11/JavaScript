// Example of CallBackFunction

function doSomething(callback){
  console.log("Doing Something");

  //After doing something call the callback fucntion
  callback();
}

// Defining callbackfunction
function callbackfunction(){
  console.log("Call back function");
}

// call doSomething function and pass the callbackfunction as an argument
doSomething(callbackfunction);