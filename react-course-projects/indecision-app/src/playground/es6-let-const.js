var nameVar = 'Andrew';
var nameVar = 'Jason';
console.log(nameVar); // Jason (can reassign and redefine)

let nameLet = 'Jin';
nameLet = 'Jia';
console.log(nameLet); // Jia (can reassign but cannot redefine)

const nameConst = 'Con';
console.log(nameConst); // Con (cannot reassign and redefine)


// Block Scoping

const fullName = 'Wkhaw K';
// let firstName;

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}



