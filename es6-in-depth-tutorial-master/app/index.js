// API and ES6 Fetch

const root = 'https://jsonplaceholder.typicode.com/posts/1';

// chaining promises
// if we return response to JSON we could handle the return JSON from this promise with another then statement
fetch(root, { method: "GET" })
    .then(response => response.json())
    .then(json => console.log(json));


    