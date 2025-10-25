// singleton
// Object.create

// object literals

const muSym = Symbol("key1")

const jsUser = {
    name: "Yash",
    age: 20,
    "full name": "Yash AHuja",
    location: "Ghaziabad",
    [muSym]: "mykey1", // in sq brackets it will give coreect symbol output and it's the correct way to write like this only
    email: "yash@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // can't use . here, not possible, so only square brackets can be used here


console.log(jsUser);
console.log(typeof jsUser[muSym]);


jsUser.email = "yash@yahoo.com"
// Object.freeze(jsUser)
jsUser.email = "yash@google.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
    console.log(`Age is ${this.age}`);
}
jsUser.greetingTwo()



// ++++++++++++++++++Objects Part 2 +++++++++++++++++++++++

// const user = new Object()  // SIngleton Object

const user = {}
user.id = "123abx"
user.name = "Samay"
user.isLoggedIn = false

console.log(user);

const regularUser = {
    email: "Yash@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Ahuja"
        }
    }
}

console.log(regularUser.fullname);


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));


// +++++++++++++++++++++++++ Objects Part 3 ++++++++++++++++++++

const course = {
    coursename: "JavaScript",
    price: "799",
    courseInstructor: "Yoyo"
}

const {courseInstructor: Inst} = course
console.log(Inst);

/* const navbar = ({company}) => {

}

navbar(company = "yoyo") */
