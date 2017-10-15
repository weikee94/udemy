// Set
let a = new Set();
a.add(5);
a.add(40);
a.add("woohoo");
a.add({x: 50, y: 200});
console.log(a);
console.log(a.size); // 4
console.log(a.has(5)); // true
console.log(a.has(7)); // false


let numbers = [1, 4, 5, 21, 13, 14];
// pass array to Set constructor
let numSet = new Set(numbers);
console.log("set: " + numSet);
console.log("array: " + numbers);

for(let element of numSet.values()) {
    console.log(element);
}

// checking the unique character, first split string to array then pass in the array to set constructor
let chars = "asdaqweqwljjqwe";
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);


