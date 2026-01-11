// scope kuchni bas local and global variable ke baare mein hai

function one() {
    const name = "Alice"; // local variable

    function two() {
        const age = 30;
        console.log(name); // Alice (accessing local variable from outer function)
    }
    //console.log(age); // Error: age is not defined (cannot access local variable from inner function)
    two();
}

one();