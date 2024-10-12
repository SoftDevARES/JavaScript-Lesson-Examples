const cardBody = document.querySelectorAll(".card-body")[1];

console.log = (cardBody);


const link = document.createElement("a");
link.id = "Goblogwebsite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.youtube.com/";
link.target = "_blank";
link.innerHTML = "Kişisel web siteme git";

cardBody.appendChild(link);

{/* <li class="list-group-item d-flex justify-content-between">Todo 2
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>
</li> */}

const todo = document.createElement("li");
const todolink = document.createElement("a");
const i = document.createElement("i");
const todoList = document.querySelector(".list-group");


todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todolink.href = "#";
todolink.className = "delete-item";

i.className = "fa fa-remove";

todolink.appendChild(i);//a etiketinin içine i etiketini koyduk
todo.appendChild(todolink);

todoList.appendChild(todo);


console.log(link);