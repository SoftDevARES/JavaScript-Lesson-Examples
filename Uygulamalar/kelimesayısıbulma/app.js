let metin = "Şuanda Javascript Öğreniyorum";

let harf = prompt("Harfi Giriniz");

let sonuc = bul(harf);
alert("Harf Sayısı; " + sonuc);



function bul(harf){
    //JavaScript'te bir string'in uzunluğunu (karakter sayısını) döndürür.
    let toplam = 0;
    for(let i = 0; i<metin.length; i++){
        
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }  
    return toplam;  
}