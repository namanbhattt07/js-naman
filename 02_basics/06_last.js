const nums = [1,2,3,3,4,45,5,6,7,8,9]

// for each loop return nahi karta koi bhi value even if hum return func pass bhi kare

//FORMAT: nums.filter((call_back_function) => condition )

const newnums = nums.filter((nums) => nums > 4)
//console.log(newnums);

// other way of writing is 

const newnums2 = nums.filter( (nums) => {
    return nums>4 // {} ka use jab karege toh return likhna padega 
})
//console.log(newnums2);
// for each le liye naya array banana padega lekin filter mein hum directly naya bana sakte hai

let arr = [1, 2, 3, 4, 5];
let even = [];

arr.forEach((num) => {
  if (num % 2 === 0) {
    even.push(num);
  }
});

console.log(even); // [2, 4]




