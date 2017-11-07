// Object Destructuring
// const person = {
//     name: 'weikee',
//     age: 23,
//     location: {
//         city: 'johor',
//         temp: 32
//     }
// };

// const { name: firstName = 'Anony', age } = person;
// const { city, temp } = person.location;
 
// console.log(`${city} with temp of ${temp}`);
// console.log(`${firstName} with age ${age}`);

// challenge
// const book = {
//     title: 'Ego',
//     author: 'Ryan',
//     publisher: {
//         name: 'Peng'
//     }
// };

// const { name: publisherName = 'Annony' } = book.publisher;
// console.log(`publisher with name ${publisherName}`);

// Array Destructuring
const address = [
    '1299 Street',
    'New York',
    'Pen',
    '19147'
];

const [ street, city, state, zip ] = address;

console.log(`You are in ${street} ${city}`);

// challenge
// grab first and third items using array destructuring
const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [coffeName, smallPrice, mediumPrice, largePrice] = item;
console.log(`${coffeName} small with price ${smallPrice}`);

