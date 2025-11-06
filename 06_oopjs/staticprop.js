class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const yoyo = new User("Yoyo")
// console.log(yoyo.createId());
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const samsung = new Teacher("samsung",'sam@sung.com')
samsung.logMe()
console.log(samsung.createId());