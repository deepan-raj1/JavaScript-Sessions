// // ----------------------Functions examples----------------------
// //Example 1 
// function greet() {
//   console.log("Hello, Developer!");
// }
// greet();

// // Example 2
// function myFunction(p1, p2) {
//   return p1 * p2;
// }

// // Example 3
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius(77);



// // ----------------------Function declaration----------------------
// // Example 1 
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 3)); // 8

// // Example 2
// function myFunction(a, b) {
//   return a * b;
// }


// // ----------------------Function expression----------------------
// // Example 1
// const x = function (a, b) {return a * b};

// // Example 2
// const x = function (a, b) {return a * b};
// let z = x(4, 3);

// // Example 3
// const multiply = function(a, b) {
//   return a * b;
// };
// console.log(multiply(4, 2)); // 8




// // ----------------------Arrow functions----------------------
// // Example 1
// let myFunction = (a, b) => a * b;

// // Example 2
// const greet = (name) => {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Deepan"));

// // Example 3
// const square = n => n * n * n;
// console.log(square(5)); // 25





// // ----------------------Parameters----------------------
// // Example 1
// function greet(name, age) {
//   return `Hello ${name}! You are ${age} years old.`;
// }
// console.log(greet("Ajay", 21)); // Hello Ajay! You are 21 years old.

// // Example 2
// function welcome(name = "Guest", age = 18) {
//   console.log(`Welcome, ${name}!, ${age}`);
// }
// //welcome(1,2,3);         // Welcome, Guest!
// //welcome("Sivaji"); // Welcome, Deepan!
// welcome("Sivaji")



// // ----------------------Arguments----------------------
// // Example 1
// greet("John", 21);

// // ----------------------Return Values----------------------
// // Example 1
// function add(a, b) {
//   return a + b;
// }

// let result = add(10, 20);
// console.log(result); // 30


// // ----------------------Anonymous Functions----------------------
// // Example 1
// setTimeout(function() {
//   console.log("This is an anonymous function!");
// }, 1000);

// // Arrow Function Equivalent:
// setTimeout(() => console.log("Arrow version!"), 1000);



// // ----------------------Functions used as variables----------------------
// // Example 1
// let x = toCelsius(77);
// let text = "The temperature is " + x + " Celsius";

// // Example 2
// let text = "The temperature is " + toCelsius(77) + " Celsius";

// // ----------------------function scope & closures----------------------
// // Example 1 
// function showMessage() {
//   let message = "Hello World!";
//   console.log(message);
// }
// showMessage();
//console.log(message); // ❌ Error: message is not defined

// // Example 2 Closure
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }

// const counter = outer();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// // ----------------------Immediately Invoked Function Expressions (IIFE)---------------------- 
// // syntax
// (function() {
//   console.log("IIFE executed!");
// })();

// // with arrow function
// (() => {
//   console.log("IIFE with arrow!");
// })();

// // Example 1
// (function() {
//     // IIFE code block
//     var localVar = 'This is a local variable';
//     console.log(localVar); // Output: This is a local variable
// })();

// // Example 2
// var result = (function() {
//     var x = 10;
//     var y = 20;
//     return x + y;
// })();

// console.log(result); // Output: 30


// // ----------------------Higher-order functions (functions as arguments)----------------------
// // Example 1
// function repeat(fn, times) {
//   for (let i = 1; i <= times; i++) console.log(fn);
// }
// //repeat(() => console.log("Hello!"), 3);
// console.log(repeat("hello",3));


// // Example 2
// function multiplyBy(factor) {
//   return function(num) {
//     return num * factor;
//   };
// }

// const double = multiplyBy(2);
// console.log(double(5)); // 10



// // ----------------------Callback functions----------------------
// // Example 1
// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Ajay", sayBye);

// // Example 2
// function greetUser(name, callback) {
//   console.log(`Hi, ${name}!`);
//   callback();
// }

// function bye() {
//   console.log("Goodbye!");
// }

// greetUser("Deepan", bye);



// // ----------------------Constructor Function----------------------
// // Example 1
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user = new Person("Neha", 22);
// console.log(user.name); // Neha


// // ----------------------Async Function----------------------
// // Example 1
// async function fetchData() {
//   return "Data fetched!";
// }
// fetchData().then(console.log); // Data fetched!

// // ----------------------Generator Function----------------------
// // Example 1
// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = numbers();
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2


// // ----------------------Recursive Function----------------------
// // Example 1
// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// // ----------------------Nested Functions----------------------
// // Example 1
// function outerFun(a) {
//     function innerFun(b) {
//         return a + b;
//     }
//     return innerFun;
// }

// const addTen = outerFun(10);
// console.log(addTen(5));

// // Example 2
// function outer() {
//     console.log('This is the outer function')
//     function inner() {
//         console.log("This is the inner function.")
//     }
//     inner();
// }
// outer();

// // Example 3
// function outer(a, b) {
//     function inner() {
//         return a + b;
//     }
//     console.log(inner());
// }
// outer(2, 3)

// // ----------------------Pure Functions----------------------
// // Example 1
// function pureAdd(a, b) {
//     return a + b;
// }

// console.log(pureAdd(2, 3));

// Impure function
// let count = 0;
// function impureAdd() {
//     count++;
//     return count;
// }
// console.log(impureAdd());

// // ----------------------Default Parameter Function----------------------
// function greet(name = "Guest") {
//   return "Hello, " + name;
// }
// console.log(greet());      // Hello, Guest
// console.log(greet("Aman"));// Hello, Aman

// // ----------------------Rest Parameter Function----------------------
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);

// }
// console.log(sum(1, 2, 3, 4)); // 10

// // ----------------------Live coding tasks----------------------
// // Function to calculate factorial


// // Arrow function to check even/odd


// // Higher-order function to apply a discount on prices


// // Callback example with setTimeout()


// // ----------------------Practice tasks Homework----------------------
// // Write a function that takes a number and returns its square.


// // Create a function that converts Celsius to Fahrenheit.


// // Make a function that accepts two numbers and returns the larger one.


// // Use a callback to print “Task complete” after 2 seconds.


// // Build a calculator using functions for +, -, ×, ÷.


// // Create an IIFE that logs today’s date.


// // Use an anonymous function with setInterval() to print a message every 2 seconds.


// // Write a pure function that multiplies two numbers.


// // Make an impure function that updates a global score.


// // Create a closure-based counter with increment() and reset() methods.




// // ----------------------Practice demos ----------------------
// // Demo 1: IIFE (Immediately Invoked Function Expression)


// // Demo 2: Pure vs Impure Function


// // Demo 3: Closures (Function Scope Memory)




// // -------------------------Practice tasks 10-------------------------------

// // ------------------------- 3 Mini projects --------------------------------
