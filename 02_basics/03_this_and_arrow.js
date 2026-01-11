const user = {
    username : "naman",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to the platform! Your price is ${this.price}.`);
        
    }
    
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

const chai = () => {
    let username = "naman"
    console.log(this);      

}
//chai()

/* const addtwo = (num1, num2) => {
    return num1 + num2
}
*/

//const addtwo = (num1,num2) => num1 + num2

const addtwo = (num1,num2) => (num1+num2)
// jab {} use karege tab hume return karna zarruri hoga but agar () use karege toh neeed ni hogi
// () se apne aap return kar deta hai 

console.log(addtwo(2,3))



