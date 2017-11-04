
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi!' + this.name + '!';
        return `Hi I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

const me = new Person('Wei Kee', 23);

const ano = new Person();

console.log(me.getGreeting());
console.log(me.getDescription());

class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}

const s1 = new Student('Wei Kee',  23, 'Information Technology');
console.log(s1.getDescription());

// Traveler -> Person
// Add support for homelocation
// override get greeting
// 1. Hi I am xxx. I'm visiting from country.
// 2. Hi I am xxx.

class Traveler extends Person {
    constructor(name, age, location = 'undefined') {
        super(name, age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasLocation()) {
            greeting += `I am visiting from ${this.location}.`;
        }

        return greeting;
    }
}

const t1 = new Traveler('Jack', 28, 'Malaysia');
console.log(t1.getGreeting());

