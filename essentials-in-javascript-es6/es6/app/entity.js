// class in ES6
class Entity {
    constructor(name, height) {
      this.name = name;
      this.height = height;
    }
  
    greed() {
      console.log(`Hi I am ${this.name}`);
    }
  }


  export default Entity;