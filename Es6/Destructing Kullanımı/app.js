// let langs = ["c#", "c^+"]
// let langs1, langs2

// // langs1 = langs[0]
// // langs2 = langs[1]

// [langs1, langs2] = langs

// console.log(langs1, langs2)

const hesapla = (a,b) =>{
    const toplam = a+b
    const cikart = a-b
    const carp = a*b
    const bol = a/b

    const dizi = [toplam,   cikart, carp, bol]
    return dizi
}

let [a, b ,c ,d] = hesapla(10,2)

console.log(a,b,c,d)