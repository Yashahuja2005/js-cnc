const nam = "Yash"
const age = 20
console.log(nam + age + " Value");

console.log(`Hello my name is ${nam} and I am ${age} years old`);

const gameName = new String("Yoyo-yashu-nanno")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newStr = gameName.substring(0, 3)

console.log(newStr);

const aStr = gameName.slice(-2, 4)
console.log(aStr);

const newStr1 = "    Yash     "
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://www.google.com/yash%20ahuja"

console.log(url.replace('%20', '-'));

console.log(url.includes('yash'));

console.log(gameName.split('-'));
