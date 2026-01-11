/*function cartprice(num1){ // sirf 200 aayega 
    return num1
}
*/

function cartprice(...num1){ // sare in the form of array dega (spread function)
    return num1
}
//console.log(cartprice(200,300,400))

const user = {
    username : "namanbhatt",
    userage : 20
}

function ladle(kuchbhi){
    console.log(`The user is: ${kuchbhi.username} \nHis age is :${kuchbhi.userage}`);
}

ladle(user)