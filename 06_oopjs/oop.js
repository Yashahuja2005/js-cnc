const user = {
    username: "Yash",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this,isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    // return this;    // implicitly defined
}
const userOne = new User("Yash", 12, true)
const userTwo = new User("Yoyo", 14, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

// Step 1 :- New empty object created known as Instance
// Srep 2 :- Constructor func is called due to 'new' keyword
// Step 3 :- arguments inject in this keyword
// Step 4 :- got it in the function