// Elemnt Silmek


const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
const todo1 = document.querySelector(".list-group-item");

// todos[0].remove();// sildi

// todos[todos.length-1].remove();// sondakini silfi

console.log(todoList);

// todo1.remove(); 


//--------------------------------------------------------------------


todoList.removeChild(todos[todos.length-1]);