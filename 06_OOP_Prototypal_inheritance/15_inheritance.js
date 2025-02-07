class Animal{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}


//Dog is a sub class here , Animal is Parent class here.


class Dog extends Animal{

}
//look here when we create object of Dog class and as Dog class does not have it's own constructor but it derives Animal class so animal class constructor will be called.and now this object tommy can call methods of Dog class also.
const tommy = new Dog("tommy", 3);
tommy.eat();