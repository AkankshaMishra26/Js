//primitive data type
//1- NULL
// 2- NUMBER
// 3- STRING
// 4- SYMBOL
// 5- BOOLEAN
// 6- BIGINT
// 7- UNDEFINED
let a = null;
let b= 345;
let c = true;
let d= BigInt("567");
let e= "chinki"
let f= Symbol("I am a nice symbol")
let g = undefined
console.log(a,b,c,d,e,f,g,)
console.log(typeof c)
console.log(typeof a)


// non premitive data type (object)

const item ={
    "chinki": true,
    "bhavesh" : false,
    "akash": 56,
    "raunak": undefined
}
console.log(item["akash"])