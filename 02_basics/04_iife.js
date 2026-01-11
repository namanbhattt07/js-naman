// IMMEDIATELY INVOKED FUNCTION (IIFE)

/*
function connection(){
    let status = "DB CONNECTED"
    console.log(status);
}
connection()
*/

(function connection(){
    let status = "DB CONNECTED"
    console.log(status);
}) ();

 // phela () : function ki definition
 // dusra () : function ki execution

((name) => {
    let status = `DB CONNECTED TWO ${name}`
    console.log(status);
}) ("naman");



