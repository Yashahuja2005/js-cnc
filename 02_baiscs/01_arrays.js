// array

/* const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Krrish", 'Flying-Jatt']
const newArr = new Array(1, 2, 3, 4)
console.log(newArr);

console.log(myHeroes);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));
console.log();

const myArr2 = myArr.join()
console.log(myArr2);

// slice, splice

console.log("A ", myArr);

myN1 = myArr.slice(1, 3)

console.log(myN1);

console.log("B ", myArr);

const myN2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myN2); */


// +++++++++++++++ Arrays Part 2 +++++++++++++++++
const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)

console.log(marvel_heroes.concat(dc_heroes))
console.log(marvel_heroes);

const allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes);



const an_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_an_arr = an_arr.flat(Infinity)
console.log(real_an_arr);



console.log(Array.isArray("Yash"));
console.log(Array.from("Yash"));
console.log(Array.from({nam: "Yash"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
