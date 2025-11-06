const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// console.log(descripter);
const yoyo = {
    username: 'maggi',
    price: 100,
    inAvai: true,
    orderMaggi: function(){
        console.log('Maggi nhi bani');
        
    }
}
// console.log(yoyo);
// console.log(Object.getOwnPropertyDescriptor(yoyo, "username"));
// Object.defineProperty(yoyo, 'username', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(yoyo, "username"));
for (let [key, value] of Object.entries(yoyo)) {
    if(typeof value !== 'function') console.log(`${key} : ${value}`);
}