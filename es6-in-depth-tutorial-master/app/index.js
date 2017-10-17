// Promises

let p = new Promise((resolve, reject) => {
    // resolve and reject represent handler that give a function to update the state of the prompts resolve handles successful and fail
    reject('Rejected');
})

// .then method will accepts a function that gets a promise is returned value once is fulfilled
p.then(response => console.log(response))
 .catch(error => console.log(error));

 let p2 = new Promise((resolve, reject) => {
    resolve('Resolved');
 })

 p2.then(response => console.log(response));


 let p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolve after 3 second'), 3000);
 })
 p3.then(response => console.log(response))
   .catch(error => console.log(error));

   