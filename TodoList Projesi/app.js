// Tüm Elementleri Seçmek
const form = document.querySelector("#todoAddForm");
const addinput = document.querySelector("#todoName");
const todolist = document.querySelector(".list-group");
const firstcordbody = document.querySelectorAll(".card-body")[0];
const secondcordbody = document.querySelectorAll(".card-body")[1];
const clearbutton = document.querySelector("#clearButton");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondcordbody.addEventListener("click", removeTodoUI);
    clearbutton.addEventListener("click",allTodosEverywhere);
}

function pageLoaded() {
    checkFormTodosStorage();
    todos.forEach(function(todo) {
        addTodoToUI(todo);
    });
}

function allTodosEverywhere(){
    const todolistesi = document.querySelectorAll(".list-group-item");
    if(todolistesi.length> 0 ){
        todolistesi.forEach(function(todo){
            todo.remove();
        });
        todos=[];
        localStorage.setItem("todos",JSON.stringify(todos));
        showAlert("success", "Başaarılı");
    }else{
        showAlert("warning", "Silmek İçin Todo Olmalı");
    }
}

function removeTodoUI(e){
    if(e.target.className === "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        removeTodoStorage(todo.textContent);
        showAlert("success", "Todo başarıyla silindi.");
    }
}

function removeTodoStorage(removeTodo){
    checkFormTodosStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
    const inputText = addinput.value.trim();
    if (inputText === "") {
        showAlert("warning", "Lütfen Boş Bırakmayınız");
    } else {
        // arayüze ekleme
        addTodoToUI(inputText);
        addTodoSorage(inputText);
        showAlert("success", "Todo Eklendi.");
    }
    e.preventDefault(); // Sayfanın yenilenmesini engeller
}

function addTodoToUI(newtodo) {
    // <li class="list-group-item d-flex justify-content-between">Todo 1
    //                         <a href="#" class="delete-item">
    //                             <i class="fa fa-remove"></i>
    //                         </a>
    //                     </li>

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newtodo; // Yeni todo metni ekleniyor

    const a = document.createElement("a");
    a.className = "delete-item";
    a.href = "#";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todolist.appendChild(li);

    addinput.value = ""; // Metin kutusunu boşalt
}

function addTodoSorage(newtodo) {
    checkFormTodosStorage();
    todos.push(newtodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkFormTodosStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    /*
    <div class="alert alert-warning" role="alert">
    Todo List Eklendi
    </div>
    */

    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = message;
    firstcordbody.appendChild(div);

    setTimeout(function() {
        div.remove();
    }, 2500);
}
