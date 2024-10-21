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
}

function addTodo(e) {
    const inputText = addinput.value.trim();
    if (inputText === "") {
        alert("Bir değer giriniz");
    } else {
        // arayüze ekleme
        addTodoarayüz(inputText);
        addTodoSorage(inputText);
    }
    e.preventDefault(); // inputText parametresi olmamalı
}

function addTodoarayüz(newtodo) {
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
