// ES6     syntaxtical sugar

/* class User {
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPass(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const yoyo = new User('yash', 'yoyo@gmail.com', '123')
console.log(yoyo.encryptPass());
console.log(yoyo.changeUsername()); */

// behind the scene
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPass = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const yoyo = new User('yash', 'yoyo@gmail.com', '123')
console.log(yoyo.encryptPass());
console.log(yoyo.changeUsername());