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
    //super keyword is used to call the super class constructor.also we can pass the constructor parameters also
    super(name, age);
    this.speed = speed;
  }
  
  run() {
    console.log(`${this.name} is running at speed of ${this.speed}`);
  }
}

const tommy = new Dog("tommy", 3,44);
tommy.eat();
tommy.run();