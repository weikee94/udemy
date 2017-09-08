let a = 'Hello';

console.log("Using let as declare variable: " + a);

// stand alone block
{
	let a = 'GoodBye';
	console.log("This is stand alone block: " + a);
}

// const enable protection for variables that must remain the same (const cannot be reassign)
const array = [1,2,3];
array.push(4);
console.log(array);

// template literals/strings
var c = 'c';
var b = 'b';
var d = c + '' + b;
console.log(d);

let e = `hello ${b}`;
console.log(e);


//understanding and spread operator ...
let arrayA = [3, 4];
let arrayB = [1, 2, ...arrayA, 5, 6];

console.log(arrayB);

function print(a, b, c) {
	console.log(a, b, c);
}

let arrayC = [7, 8, 9];
print(...arrayC);

function butter() {
  let a = [1, 2, 3];
  let c = [4, 5, 6];
  let ca = [...a, ...c];
  return ca;
}

butter(4, 5, 6);

// destructuring assignment- arrays (allows us to extract data from arrays or objetcs)
let number = [1, 2];
let [anumber, bnumber] = number;
console.log(anumber, bnumber);

// destructuting assignments - objects
let ranger = { magical: false, power: 9 };
let { magical, power } = ranger;
console.log(magical, power);

// arrow function
// arrow functions do not bind their own this
// this is an object within the function scope, the function then bind key and values to the object 
function blastOff() {
  console.log("3 2 1 blastoff!");
}

setTimeout(function(){
  blastOff();
}, 1000);

const blastOffArr = () => {
  console.log("3 2 1 blastoff!");
}

blastOffArr();

// arrow with map method
let points = [1, 2, 3];

let addOne = (element) => {
  return element + 1;
}
points = points.map(addOne);

let points2 = [2, 3, 4];
points2 = points2.map(element => {
  return element + 1;
});

let points3 = [3, 4, 5];
points3 = points3.map(element => element + 1);

console.log(points);
console.log(points2);
console.log(points3);

// filter
// method one 
// let isPassing = (grade) => {
//   return grade >= 70;
// }
// let passing = scores.filter(isPassing);


// method two
let scores = [1, 50, 75, 80];
let passing = scores.filter(element => element >= 70);

console.log(passing);

import { students, total } from './student';
console.log(students, total);

import { add, multiply } from './calculator';
console.log("Mutiply number is: " + multiply(3, 5));

import minus from './calculator';
console.log("A - B is: " + minus(5, 3));


import Entity from './entity';
class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height);
  }
}

let Frodo = new Hobbit('Gem', 4.5);
Frodo.greed();
console.log(Frodo);