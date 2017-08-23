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
