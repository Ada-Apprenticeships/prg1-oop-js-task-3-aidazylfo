// TASK 3
PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };
function validInteger (value) { // value can be a string or a number (integer)
  return Number.isInteger(parseInt(value)) && String(parseInt(value)) === String (value) && Number (value) >=0;
}
function validatePriority(priority) { // value can be a string or a number (integer)
  const priorityValue = Number(priority);
  return[1,3,5,7].includes(priorityValue) ? priorityValue : PRIORITY ['LOW']
}
function todaysDate () { 
 const now = new Date ();
 const day = String(now.getDate()).padStart(2,'0'); // it creates a two digit string representing the current day of the month
 const month = String(now.getMonth() + 1).padStart(2,'0'); // it creates a two digit string representing the current month
 const year = now.getFullYear(); // it creates a to string represent the current day full year 
 const hours = String(now.getHours()).padStart(2, '0'); // it creates a two digit string representing the hours
 const minutes = String(now.getMinutes()).padStart(2,'0'); // creates a two digit string representing the minutes 
 const seconds = String(now.getSeconds()).padStart(2, '0'); // creates a two digit string representing the current seconds

 return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
class Task  {
#title; // removed the # to change private attribute to public _priority; //  removed the # to change private attribute to public
#priority; //  removed the # to change private attribute to public
#added; //  removed the # to change private attribute to public
 constructor(title, priority) {
 this.#title = title;
 this.#priority = validatePriority(priority);
 this.#added = todaysDate(); }
get title() {
   return this.#title;
}
get priority () {
  return this.#priority;
}
set priority (newPriority) {
 this.#priority = validatePriority(newPriority);
}
get added() {

  return this.#added;
}
}
class ToDo {
  constructor() {
   this.tasks = []; // Array to hold Task objects
    }  
    add(task){
     if (task instanceof Task) {
     this.tasks.push(task); // it adds a new item to an array property 'task'
     return this.tasks.length;
     } else {
     throw new Error ('Invalid Task instance'); // this creates and throws a new error 
     }};
    remove(title){
     const taskIndex = this.tasks.findIndex(task => task.title === title);
     if (taskIndex !== -1){
      this.tasks.splice(taskIndex, 1);
      return true;
     }
     return false;  
    }
    list(priority = 0) {
     return this.tasks
      .filter(task => priority === 0 || task.priority === priority)
      .map(task => [task.added, task.title, task.priority]); // It transforms the filtered tasks into a new array where each element is an array containing the task's added date, title, and priority.

    }
    task(title) {
      const task = this.tasks.find(task => task.title === title); // It searches through the tasks array for a task with a title that matches the given title
      if (!task) {
      throw new Error(`Task '${title}' Not Found`);
      }
      return task;
    }}
// Leave this code here for the automated tests
module.exports = {
  PRIORITY, validInteger, validatePriority, todaysDate, ToDo, Task,
}