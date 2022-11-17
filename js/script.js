// 'use strict';
// console.log(this);

// function foo() {
//     console.log(this);
// };

// foo();

// const JohnDoe = {
//     firstName: 'John',
//     lastName: 'Doe',
//     hobbies: ['sport', 'movies'],
//     sayHello: function() {
//     console.log('Hello!');
//     }
// };
// JohnDoe.sayHello();

// const foo = {
//     bar: function() {
//     console.log(this);
//     }
//    }
//    foo.bar();


// function func() {
//     console.log(this);
//    }
//    const foo = {
//     bar: func
//    }
// foo.bar();


// function func() {
//     console.log(this);
//    }
//    const obj1 = {
//     name: 'object 1',
//     bar: func
//    }
//    const obj2 = {
//     name: 'object 2',
//     bar: func
//    }
//    obj1.bar(); // this = obj1
//    obj2.bar(); // this = obj2

// const button = document.querySelector('#btn');
// function foo(event) {
//  console.log(event, this);
// }
// button.addEventListener('click', foo);

// func.call(thisArg, param1, param2);

// func.apply(thisArg, [argsArray]);


// function addEventListener(eventType, callback) {
//     const targetElement = this;
//     /* ... then when JS observes eventType, it reacts. */
//     /* eventData object with details is created and.. */
//     callback.call(targetElement, eventData);
//    }

// function foo() {
//     console.log(this);
//    }
//    foo.call({ bar: 'baz' });


// function foo(param) {
//     console.log(this, param);
//    }
//    const lockedFoo = foo.bind({ bar: 'baz' });
//    const obj = {
//     foo: lockedFoo
//    };
//    lockedFoo('Spam!');
//    obj.foo('Spam!'); // this = { bar: 'baz' }
// function foo() {
//     this.bar = 'baz';
//     console.log(this);
// }
//    foo();

// function foo() {
//     this.bar = 'baz';
//     console.log(this);
//    }
//    foo();
//    const obj = new foo();
//    console.log(obj);


// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//    }
//    const JohnDoe = new Person('John', 'Doe', 22);
//    const AmandaDoe = new Person('Amanda', 'Doe', 30);
//    const ThomasJefferson = new Person('Thomas', 'Jefferson', 25);


// function Person(firstName, lastName, age) {
//     const this = {}; // it's hidden from us
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     return this; // it's hidden from us
//    }

class Employee{
    constructor(name, age, yearlySalary){
      const thisEmployee = this;
  
      thisEmployee.name = name;
      thisEmployee.age = age;
      thisEmployee.yearlySalary =yearlySalary;
  
      thisEmployee.calculateMonthlySalary();
    }
  
    calculateMonthlySalary(){
      const thisEmployee = this;
  
      thisEmployee.monthlySalary = thisEmployee.yearlySalary / 12;
    }
  
    showDetails(){
      const thisEmployee = this;
  
      console.log(thisEmployee.name, thisEmployee.age, thisEmployee.monthlySalary);
    }
  }


const john = new Employee('John Doe', 20, 12000);

console.log('john:', john);
// john: Employee {name: "John Doe", age: 20, yearlySalary: 12000, monthlySalary: 1000}

console.log('john.age:', john.age);
// john.age: 20

john.showDetails(); 
// 'John Doe', 20, 1000

const jane = new Employee('Jane Stevens', 35, 18000);

console.log('jane:', jane); 
// jane: Employee {name: "Jane Stevens", age: 35, yearlySalary: 18000, monthlySalary: 1500}

console.log('jane.age:', jane.age);
// jane.age: 35

jane.showDetails(); 
// 'Jane Stevens', 35, 1500

console.log('john.age:', john.age);
      // john.age: 20
      console.log('jane.age:', jane.age);
      // jane.age: 35
      
      john.age++;
      
      console.log('john.age:', john.age);
      // john.age: 21 <== CHANGED
      console.log('jane.age:', jane.age);
      // jane.age: 35