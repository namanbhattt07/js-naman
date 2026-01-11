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

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.map((num) => num * 10)
console.log(newnums);


