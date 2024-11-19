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
<<<<<<< HEAD
=======
    document.addEventListener("DOMContentLoaded", pageLoaded);
}

function pageLoaded(){
    checkFormTodosStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
>>>>>>> 7278a1c (Initial commit)
}

function addTodo(e) {
    const inputText = addinput.value.trim();
    if (inputText === "") {
<<<<<<< HEAD
        alert("Bir değer giriniz");
    } else {
        // arayüze ekleme
        addTodoarayüz(inputText);
        addTodoSorage(inputText);
    }
    e.preventDefault(); // inputText parametresi olmamalı
}

function addTodoarayüz(newtodo) {
=======
        showAlert("warning", "Lütfen Boş Brakmayınız");
    } else {
        // arayüze ekleme
        addTodoToUI(inputText);
        addTodoSorage(inputText);
        showAlert("success", "Todo Eklendi.");
    }
    e.preventDefault(); // Sayfanın yenilenmesini engeller
}

function addTodoToUI(newtodo) {
>>>>>>> 7278a1c (Initial commit)
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
<<<<<<< HEAD
=======

function showAlert(type,message){
    /*
    <div class="alert alert-warning" rolse="alert">
    Todo lİST Eklendi
    >/div> */

    const div = document.createElement("div");
    div.className="alert alert-"+type;
    div.textContent = message;
    firstcordbody.appendChild(div);

    setTimeout(function() {
        div.remove();
    }, 2500);
}
>>>>>>> 7278a1c (Initial commit)
