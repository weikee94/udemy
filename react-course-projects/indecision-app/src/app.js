// import './utils.js';

// import sub, { square, add } from './utils';

// console.log('this is running');
// console.log("square: " + square(8));
// console.log("add: " + add(12, 23));
// console.log("subtract: " + sub(2, 1));


// person.js
// name export isAdult(18) - true if adult, otherwise is false
// name export canDrink(18) - true if 18 and over, otherwise false

// imoort isAdult and canDrink
// use bvoth printing result to the console

import isSenior, { isAdult, canDrink } from './person';

// setting the default export and function
// grab the default and call it

console.log('can drink 19: '+ canDrink(19));
console.log('is adult 10: ' + isAdult(10));
console.log('is senior 66: ' + isSenior(64));