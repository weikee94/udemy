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


//understanding and spread operator
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

// destructuring assignment- arrays
let number = [1, 2];
let [anumber, bnumber] = number;
console.log(anumber, bnumber);
