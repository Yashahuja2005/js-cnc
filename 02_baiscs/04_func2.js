// this is used for accessing elements from the current context
const user = {
    username: "Yash",
    price: 1199,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Samay"  //not hardcode, so context change, output value also changed
user.welcomeMessage()

console.log(this);  // browser ke ander global object 'window' show hoga because sbse zyada vohi show hota hai browse mein


function pi() {
    let username = "Yash"
    console.log(this); //functions mein this use nhi ho pata direct, objects mein hi hota hai
    
}
pi()

const arrowfunc = () => {
    let username = "Yash"
    console.log(this.username);
    
}

const addTwo = (num1, num2) => {
    return num1 + num2
}
const secondaddTwo = (num1, num2) => num1 + num2    // implicit return   //we can use parenthesis here
console.log(addTwo(3, 5));
console.log(secondaddTwo(6, 7));


// const myArray = [2, 5, 7, 3, 4]
// myArray.forEach()


// +++++++++++ Immediately Invoked Function Expression (IIFE) ++++++++++++

(function iife1(){
    console.log(`DB connected`);
})();
// iife is used to remove the problem caused by the pollution/variables of global scope. Always use ';' to end the iife function
// (function definition)(function execution)

((name) => {
    console.log(`DB ${name}`)
})('Yash');
