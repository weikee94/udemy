// Class

class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    hello() {
        console.log(`Hi! I'm ${this.name} from the Animal Kingdom!`);
    }
}

let king = new Animal('Mufasa', 4.5);
king.hello();
