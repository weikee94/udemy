const person = {
    name: 'weikee',
    age: 23,
    location: {
        city: 'johor',
        temp: 32
    }
};

const { name: firstName = 'Anony', age } = person;
const { city, temp } = person.location;
 
console.log(`${city} with temp of ${temp}`);
console.log(`${firstName} with age ${age}`);

// challenge
const book = {
    title: 'Ego',
    author: 'Ryan',
    publisher: {
        name: 'Peng'
    }
};

const { name: publisherName = 'Annony' } = book.publisher;
console.log(`publisher with name ${publisherName}`);

