// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

/* let myCreatedDate = new Date(2026, 0, 23, 5, 45)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString()); */

let myCreatedDate = new Date("2025-10-27")
console.log(myCreatedDate.toLocaleString());

console.log(Math.floor(Date.now()));


let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
