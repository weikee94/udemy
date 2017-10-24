// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['A', 'B', 'C'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived ' + city);
    }
}
console.log(user.printPlacesLived());

// Challenge area

// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the number have been multiplied

const multiplier = {
    number: [1, 5, 10],
    multiplyBy: 3,
    multiply() {
        return this.number.map((nums) => nums * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
