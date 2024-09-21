let yenisatir = "\r\n";

let bakiye = 1000;


let metin = "1- Bakiye Görüntüleme" + yenisatir
    + "2- Para Çekme" + yenisatir
    + "3- Para Ytırma" + yenisatir
    + "4- Çıkış" + yenisatir
    + "Lütfen Bir Değer Seçiniz.";

//alert(metin);




while (true) {
    let secim = Number(prompt(metin));
    switch (secim) {
        case 1:
            alert("Bkiyeniz: " + bakiye)
            break;

        case 2:
            let cekilpara = Number(prompt("Çekmek İstediğiniz Tutarı Giriniz"));
            if (cekilpara < bakiye) {
                bakiye = bakiye - cekilpara;
                alert("Klana Bakiye: " + bakiye)
            } else {
                alert("Bakiye Yetersiz" + yenisatir + bakiye);
            }
            break;

        case 3:
            let yatirilcakpara = Number(prompt("Nekadar Yatıracakasınız: "));
            bakiye = yatirilcakpara + bakiye;

            alert("Bakiyeniz: " + bakiye);
            break;

        case 4:
            console.log("Sistemden Çıkış Yapılmıştır");
            break;

        default:
            console.log("Lütfen 1 ile 8 arasında değer girinzi");
            break;
    }
}

