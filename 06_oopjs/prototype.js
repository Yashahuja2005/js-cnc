// let myName = "Yash        "
// console.log(myName.trueLength);

let myArr = ['Thor', 'Spiderman']
let heroPower = {
    thor:"hammer",
    spiderman: "Sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);   
    }
}
Object.prototype.yash = function(){
    console.log(`Yash is present in all objects`);
}
Array.prototype.heyYash = function(){
    console.log(`Yash is here`);
}
heroPower.yash()
myArr.yash()
myArr.heyYash()
// heroPower.heyYash()   // error

// inheritance

const User = {
    name: 'Yash',
    email: 'yash@yoyo.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: `JS Assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'Yoyo'
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()