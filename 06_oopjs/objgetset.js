const User = {
    _email: 'yoyo@ya.ai',
    _password: 'pass',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const yamal = Object.create(User)
console.logk(yamal.email);