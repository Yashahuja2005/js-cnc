class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    // get password(){
    //     return this._password.toUpperCase()
    // }
    get password(){
        return `${this._password}bla`
    }
    set password(value){
        this._password = value
    }
}
const yoyo = new User('y@y.com','abc')
console.log(yoyo.email);
console.log(yoyo.password);