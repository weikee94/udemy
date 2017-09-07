let a = 'Hello';

console.log(a);

// stand alone block
{
	let a = 'GoodBye';
	console.log(a);
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
console.log(points);

