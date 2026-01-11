const arr = [1,2,3,4,5,6]

/* for-of loop: 
for (const iterator of object){

}
*/

for (const num of arr){
//    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings){
//    console.log(greet);
    
}


// MAPS basics data structures hote hai and ye values repeat nahi karte 

const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('UK','UNITED KINGDOM')
map.set('IN','INDIA')

//console.log(map);


/* for (const key of map){
    console.log(key); // ye array print karvayega 
    
}
agar isse bachna hai aur key value ki tarah print karvani hai toh
*/

for (const [key,value] of map){
    console.log(key, ':-', value);
}

/// FOR - EACH LOOP

const coding = ['js',"ruby",'cpp',"python"]

/*
coding.forEach( function (item) { 
    console.log(item);
} )


coding.forEach((item) => {
    console.log(item);
    
})
*/





