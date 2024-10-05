// String Metotları

// .length - String uzunluğu
// let text = "Merhaba";
// console.log(text.length); // 7

// .toUpperCase() ve .toLowerCase() - Büyük/küçük harf yapma
// console.log(text.toUpperCase()); // "MERHABA"
// console.log(text.toLowerCase()); // "merhaba"

// .trim() - Boşlukları kaldırma
// let spacedText = "   Merhaba   ";
// console.log(spacedText.trim()); // "Merhaba"

// .includes() - Alt string'i kontrol etme
// console.log(text.includes("haba")); // true

// .slice() - Belirtilen aralıktaki kısmı alma
// console.log(text.slice(0, 4)); // "Merh"



// Array Metotları

// let numbers = [1, 2, 3, 4];

// .push() ve .pop() - Diziye ekleme ve son elemanı çıkarma
// numbers.push(5);  // [1, 2, 3, 4, 5]
// console.log(numbers);
// numbers.pop();    // [1, 2, 3, 4]
// console.log(numbers);

// .shift() ve .unshift() - İlk elemanı çıkarma ve başa ekleme
// numbers.shift();  // [2, 3, 4]
// console.log(numbers);
// numbers.unshift(1); // [1, 2, 3, 4]
// console.log(numbers);

// .map() - Her eleman için işlem yapma
// let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
// console.log(doubled);

// .filter() - Şart sağlayan elemanları seçme
// let evenNumbers = numbers.filter(n => n % 2 === 0); // [2, 4]
// console.log(evenNumbers);

// .reduce() - Diziyi tek bir değere indirgeme (toplama)
// let sum = numbers.reduce((total, current) => total + current, 0); // 10
// console.log(sum);

// .find() - Şartı sağlayan ilk elemanı bulma
// let firstEven = numbers.find(n => n % 2 === 0); // 2
// console.log(firstEven);

// .sort() - Diziyi sıralama
// numbers.sort((a, b) => a - b); // [1, 2, 3, 4]
// console.log(numbers);


// Math.random() - 0 ile 1 arasında rastgele sayı
console.log(Math.random()); // Örn: 0.467619

// Math.floor(), Math.ceil(), Math.round() - Yuvarlama işlemleri
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.round(4.5)); // 5


// new Date() - Yeni tarih nesnesi
let now = new Date();
console.log(now); // Şu anki tarih ve saat

// .getFullYear(), .getMonth(), .getDate() - Tarih bilgileri alma
console.log(now.getFullYear()); // Örn: 2024
console.log(now.getMonth());    // Ay (0 Ocak, 11 Aralık)
console.log(now.getDate());     // Gün (1-31 arası)
