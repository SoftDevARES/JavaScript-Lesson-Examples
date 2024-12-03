let dizel = 40.53, benzin = 44.40, lpg = 23.33;
const yenisatır = "\r\n";

const yakitmetni = "1- Dizel" + yenisatır + 
                   "2- Benzin" + yenisatır + 
                   "3- LPG" + yenisatır + 
                   "Yakıt Türünü Seç (1, 2, 3):";

let yakittipi = prompt(yakitmetni);
let ylitrre = Number(prompt("Yakıt Litresi:"));
let bakiye = Number(prompt("Bakiyenizi Giriniz:"));

// Seçilen yakıt türüne göre işlem yapma
let odenecektutar;

if (yakittipi === "1") {
    odenecektutar = dizel * ylitrre;
} else if (yakittipi === "2") {
    odenecektutar = benzin * ylitrre;
} else if (yakittipi === "3") {
    odenecektutar = lpg * ylitrre;
} else {
    alert("Geçersiz Yakıt Türü Seçimi!");
    throw new Error("Geçersiz giriş."); // Kodun devamını durdurur
}

// Ödeme işlemi
if (odenecektutar <= bakiye) {
    bakiye -= odenecektutar; // Kalan bakiye hesaplanır
    alert("Yakıt alma başarılı!" + yenisatır + 
          "Ödenen Tutar: " + odenecektutar.toFixed(2) + " TL" + yenisatır +
          "Kalan Bakiye: " + bakiye.toFixed(2) + " TL");
} else {
    alert("Bakiye yetersiz!" + yenisatır + 
          "Ödenecek Tutar: " + odenecektutar.toFixed(2) + " TL" + yenisatır + 
          "Mevcut Bakiye: " + bakiye.toFixed(2) + " TL");
}
