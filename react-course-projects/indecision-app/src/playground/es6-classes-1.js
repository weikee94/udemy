
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


