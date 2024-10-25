PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };


function validInteger (value) { // value can be a string or a number (integer)
  function returnBoolean(input) {
    return input === true;
}  

console.log(returnBoolean(true));  // Outputs true
console.log(returnBoolean(false)); // Outputs false
}

function validatePriority(priority) { // value can be a string or a number (integer)
  function returnBoolean(input) {
    return input === true;
}
console.log(returnBoolean(true));  // Outputs true
console.log(returnBoolean(false)); // Outputs false

}


function todaysDate () {
  function returnBoolean(input) {
    return input === true;
}
console.log(returnBoolean(true));  // Outputs true
console.log(returnBoolean(false)); // Outputs false
  
}


class Task  {

  // (title, priority)
}


class ToDo {
    
}








// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}