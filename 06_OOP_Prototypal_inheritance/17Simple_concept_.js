class Animal{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}




class Dog extends Animal{
  constructor(name, age, speed) {

    super(name, age);
    this.speed = speed;
  }

  eat() {
    console.log("eat modified");
  }
  
  run() {
    console.log(`${this.name} is running at speed of ${this.speed}`);
  }
}

const tommy = new Dog("tommy", 3, 44);
//this will call the base class eat method.
tommy.eat();
tommy.run();