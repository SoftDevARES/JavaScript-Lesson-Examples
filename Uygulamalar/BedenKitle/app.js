function calc() {
    let bki;
    let category = document.getElementById("category");
    let result = document.getElementById("result");

    let kilo = parseInt(document.getElementById("kilo").value);
    document.getElementById("kiloVal").textContent = kilo + "kg";

    let boy = parseInt(document.getElementById("boy").value);
    document.getElementById("boyVal").textContent = boy + "cm";

    bki = (kilo / Math.pow((boy / 100), 2)).toFixed();
    result.textContent = bki;   // mat.pow üssünü al demek 1.63 üsüü 1.63 mesela

    if (bki <= 18.5) {
        category.textContent = "Zayıfsın"
        category.style.color = "orange"
    } else if (bki >= 18.5 && bki <= 24) {
        category.textContent = "Normal"
        category.style.color = "green"
    } else {
        category.textContent = "Kilolu"
        category.style.color = "red"
    }
}