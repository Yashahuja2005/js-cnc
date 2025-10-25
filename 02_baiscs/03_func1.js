function sayMyName(){
    console.log('Y');
    console.log('A');
    console.log('S');
    console.log('H');  
}

sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
addTwoNumbers(3, 4)
addTwoNumbers(3, '4')
addTwoNumbers(3, null)

function addTwoNumbers1(num1, num2){
    // let result = num1+num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers1(45,287)
console.log("Result: ", result);

function loginUserMessage(username = "Samay"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
const user1 = loginUserMessage("Yash")
console.log(user1);

function calcCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calcCartPrice(200, 400, 500, 900));

const user = {
    username: "Yash",
    price: 299
}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObject(user)
handleObject({
    username: "Samay",
    price: 999
})

const myNewArr = [200, 400, 100, 500]
function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(myNewArr));

console.log(returnSecondValue([2,3,4,5]));


// ++++++++++++++++++++++ Scopes +++++++++++++++++++++++++++

let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "Yash"

    function two(){
        const website = "twitter"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()

if(true){
    const username = 'Yash'
    if(username === 'Yash'){
        const website = "Twitter"
        console.log(username + website); 
    }
}


// ++++++++++++++++ Interesting ++++++++++++++++

// console.log(addone(5))     // no error
function addone(num){
    return num + 1
}
console.log(addone(5))

// addtwo(5)                 // error
const addtwo = function(num){
    return num + 2
}
addtwo(5)
