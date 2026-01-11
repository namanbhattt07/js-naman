let myDate = new Date()
/*
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
*/
let mycreateddate = new Date(2023,0,25,12,34,44)
console.log(mycreateddate.toString());

let mytimestamp = Date.now() //abhi ki date ka time
console.log(mytimestamp); //ms value aa jayegi
console.log(mycreateddate.getTime()); 
console.log(Math.floor(Date.now()/1000)); // agar seconds mein chahiye 
