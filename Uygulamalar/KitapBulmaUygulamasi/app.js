let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25, raf: "1.4 Raf" }
let kitap2 = { isim: "Aklından Bir Sayı Tut", yazar: "John Verdon", fiyat: 125, raf: "2.4 Raf" }
let kitap3 = { isim: "Şeker Portakalı", yazar: "Jose Mouro", fiyat: 60, raf: "3.2 Raf" }
let kitap4 = { isim: "Nutuk", yazar: "Mustafa Kemal Atatürk", fiyat: 150, raf: "4.1 Raf" }

let kitaplar = [kitap1, kitap2, kitap3, kitap4];

let raf11 = { kod: "1.1 Raf", goster: false };
let raf12 = { kod: "1.2 Raf", goster: false };
let raf13 = { kod: "1.3 Raf", goster: false };
let raf14 = { kod: "1.4 Raf", goster: false };

let raf21 = { kod: "2.1 Raf", goster: false };
let raf22 = { kod: "2.2 Raf", goster: false };
let raf23 = { kod: "2.3 Raf", goster: false };
let raf24 = { kod: "2.4 Raf", goster: false };

let raf31 = { kod: "3.1 Raf", goster: false };
let raf32 = { kod: "3.2 Raf", goster: false };
let raf33 = { kod: "3.3 Raf", goster: false };
let raf34 = { kod: "3.4 Raf", goster: false };

let raf41 = { kod: "4.1 Raf", goster: false };
let raf42 = { kod: "4.2 Raf", goster: false };
let raf43 = { kod: "4.3 Raf", goster: false };
let raf44 = { kod: "4.4 Raf", goster: false };

let raflar = [
    [raf41, raf42, raf43, raf44],
    [raf31, raf32, raf33, raf34],
    [raf21, raf22, raf23, raf24],
    [raf11, raf12, raf13, raf14]
];

function rafolustur() {
    console.clear();
    let satir = "";
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 4; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "-----");// Raf görünüyorsa kod, görünmüyorsa "-----"
        }
        console.log(satir);
        console.log("----------------------------------");
        satir = "";
    }
}

function kodbul(kitapismi) {//Bu fonksiyon, örneğin "Nutuk" kelimesini arattığınızda "4.1 Raf" sonucunu döndürür.
    let rafkod = null;
    kitaplar.forEach(function (kitap) {
        if (kitap.isim.toUpperCase().includes(kitapismi.toUpperCase())) {
            rafkod = kitap.raf;
        }
    });
    return rafkod;
}

function raftagoster(rafkodu) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 4; j++) {
            if (raflar[i][j].kod === rafkodu) {
                raflar[i][j].goster = true;
                return; // Rafı bulduktan sonra işlemi durdur
            }
        }
    }
}

rafolustur();

let kitapismi = prompt("Lütfen bir kitap ismi giriniz");
let rafkod = kodbul(kitapismi);

if (rafkod != null) {
    raftagoster(rafkod);
    rafolustur();
} else {
    alert("Girdiğiniz Kitap Bulunmamaktadır");
}
