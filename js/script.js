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