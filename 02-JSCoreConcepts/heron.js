// boki trójkąta
let a = 3;
let b = 4;
let c = 5;
let h = 7

let p = (a + b + c)/2
let s = Math.sqrt(p*(p-a)*(p-b)*(p-c))

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let d = () => `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${s}`

console.log( d() );
