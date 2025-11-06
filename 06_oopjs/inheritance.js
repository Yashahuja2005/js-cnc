class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`); 
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const mam = new Teacher("madam", 'madam@google.com', 234)
mam.addCourse()
const maggi = new User("maggi")
maggi.logMe()
console.log(mam instanceof User);
