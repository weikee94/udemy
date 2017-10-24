const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrow2 = (x) => x * x;

console.log(squareArrow2(4));

// Challenge - use arrow functions
// getFirstName('Mike Smith') => 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (x) => {
    return x.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));

const getFirstName2 = (x) => x.split(' ')[0];

console.log(getFirstName2('Mike Smith'));