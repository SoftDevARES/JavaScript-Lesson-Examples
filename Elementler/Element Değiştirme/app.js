// Elementleri Yer Değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

{/* <h5 class="card-title">Todo Listesi</h5> */}


const NewTitle = document.createElement("h2");
NewTitle.className = "card-title";
NewTitle.textContent = "Todo Listesi Yeni";

cardBody.replaceChild(NewTitle,cardBody.childNodes[1]);