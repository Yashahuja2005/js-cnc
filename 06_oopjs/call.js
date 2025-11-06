function setUsername(username){
    // comple DB calls
    this.username = username
    console.log(`called`);    
}
function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}
const yo = new createUser("Yoyo", 'yoyo@gmail.com', 123)
console.log(yo);