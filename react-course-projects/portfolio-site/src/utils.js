console.log('utils success');

const square = (x) => x * x;

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

// export default sub; this is alternative way to declare default

export { square, add, sub as default };

// exports - default export - named exports