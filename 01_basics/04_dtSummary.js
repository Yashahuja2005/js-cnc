// Primitive

// 7 types : String, Number, Boolean, undefined, null, Symbol, BigInt

/* const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const bigNumber=345678545466421256n

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); */

// "===" => strict check

// Reference (Non-Primitive)

// Array, Objects, functions

/* const heros = ["Krrish", "Shaktiman", "Flying-Jatt"]
let myObj = {
    name: "Yash", 
    age: 22
}

const myFunc = function(){
    console.log("Hello World");
    
} */




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myName = "Yash"
let petName = myName
petName = "Yoyo"
console.log(myName);
console.log(petName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Yash@google.com"

console.log(userOne.email);
console.log(userTwo.email);







