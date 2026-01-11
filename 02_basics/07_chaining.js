/*
So baat ye hai:
filter = “Kaun sa item chahiye?”
map = “Har item ko kis form me chahiye?”
Isi liye industry me:
Selection ke liye → filter
Transformation ke liye → map

filter ka kaam: chun-na (select karna)
map ka kaam: badal-na (transform karna)

Ye galat logic hai, kyunki filter sochta hai:
“Ye value rakhu ya hata du?”
Wo ye nahi sochta:
“Is value ko naya bana du.”
*/

// ****************CHAINING******************

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.map((num) => num * num).map((num) => num+34).filter((num) => num>100)
//console.log(newnums);

// ***************REDUCE********************
/*
reduce() array ke sabhi elements ko process karke unhe ek single output me convert karta hai.
Isme ek accumulator hota hai jo har iteration me update hota rehta hai.
Ye sum, product, average, ya complex object banane ke liye use hota hai.
map transform karta hai, filter select karta hai, jabki reduce poore data ko compress karke ek result banata hai.
Isliye reduce() powerful hota hai jab hume array se ek final value chahiye hoti hai.

REAL LIFE USE CASE: SHOPPING CART BILL
let prices = [299, 499, 199];
let total = prices.reduce((acc, p) => acc + p, 0);
// total = 997
*/


const arr = [1,2,3,45,6,5]
/*
const mytotal = arr.reduce(function(acc,curr) {
    console.log(`accumulator : ${acc} and current value: ${curr}`);
    
    return acc + curr
},0)

console.log(mytotal);
*/

// ek baar arrow function ke sath bhi likh lete hai 

const mytotal2 = arr.reduce((acc,curr) => acc+curr ,0)
console.log(mytotal2);

