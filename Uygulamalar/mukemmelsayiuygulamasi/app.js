function isPerfectNumber(number) {
    let toplam = 1; 
    
    
    for(let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            toplam += i;
        }
    }

   
    if (toplam === number) {
        alert(number + " Mükemmel Sayıdır.");
    } else {
        alert(number + " Mükemmel Sayı Değildir.");
    }
}

let perf = Number(prompt("Sayı Giriniz"));
isPerfectNumber(perf);
