// @ JavaScript Objects
// An Object is a variable that can hold many variables.
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
// Objects can describe anything like houses, cars, people, animals, or any other subjects.


//--------------------------- JS Objects ---------------------------
// Example 1:
// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car);

// Example 2:
//{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

// Example 3:
// // Create an Object
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));

// Example 4: Spaces and line breaks are not important. 
// Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };


// Example 5: empty object, and add the properties later
// // Create an Object
// const person = {};
// //Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person);
// console.log(person.firstName);
// console.log(Object.keys(person));


// Example 6: Using the new keyword. new Object() can be created.
// // Create an Object
// const person = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// });
// console.log(person);
// console.log(Object.values(person));
// console.log(typeof(person))


//--------------------------- Object Properties ---------------------------------
// An Object is an Unordered Collection of Properties
// Properties are the most important part of JavaScript objects.
// Properties can be changed, added, deleted, and some are read only.

// syntax:
// objectName.propertyName
// objectName["propertyName"]

// Example 1:
// person.lastName;
// person["lastName"];

// ---------------------------Accessing JavaScript Properties ---------------------------

// // Examples1: The syntax for accessing the property of an object is:
// // objectName.property
// let age = person.age;

// //objectName["property"]
// let age = person["age"];

// //objectName[expression]
// let age = person[x];


// Example 2:
// let person = {};
// // let x = "firstname";
// // let y = "age";
// person.x = "Sivaji";
// person.y = 18;
// console.log(person.x + " is " + person.y + " years old.");
// console.log(person["x"] + " is " + person["y"] + " years old.");

//console.log(person[x] + " is " + person[y] + " years old.");



// ---------------------------Adding New Properties ---------------------------
// Examples1
// person.nationality = "English";



// ---------------------------Property Default Values ---------------------------
// Example 1:
// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
//   this.nationality = "English";
//   console.log(this.firstName, this.lastName, this.age, this.eyeColor, this.nationality);
// }

// let p1 = new Person ("Sivaji", "Sathira",19, "black", "Tamil");
// let p2 = new Person ("Gokul", "Nathan", 25, "blue", "Hindi");



// ---------------------------Deleting Properties
// // Example 1:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
  
// };
// console.log(person);
// delete person.age;
// console.log(person);


// Example 2:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// delete person["age"];




// ---------------------------Nested Objects
// Example 1:
// myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }



// Example 2:
// console.log(myObj);
// console.log(myObj.myCars.car2);
// console.log(myObj.myCars["car2"]);
// console.log(myObj["myCars"]["car2"]);
// console.table(myObj);

// let p1 = "myCars";
// let p2 = "car2";
// console.log(myObj[p1][p2]);









//--------------------------- Object Methods
// Object methods are actions that can be performed on objects.

// A method is a function definition stored as a property value.

//Example 1:
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };


//---------------------------Accessing Object Methods
//Example1:
// // objectName.methodName()
// name = person.fullName();
// console.log(name);
// //name = person.fullName;





//---------------------------Adding a Method to an Object
//Example1:
// person.name = function () {
//   return this.firstName + " " + this.lastName;
// };


//---------------------------Using JavaScript Methods
//Example1:
// person.name = function () {
//   return (this.firstName + " " + this.lastName).toUpperCase();
// };


//--------------------------- How to Display JavaScript Objects?
// Example 1:
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// let text = person;


//--------------------------- Displaying Object Properties
// Example 1:
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// // Add Properties
// let text = person.name + "," + person.age + "," + person.city;

//--------------------------- Using a For .. In Loop
//The properties of an object can be collected in a loop:
// Example 1:
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Build a Text
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };

// ---------------------------Using Object.values()
// Object.values() creates an array from the property values:

// Example 1
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Create an Array
// const myArray = Object.values(person);

// // Stringify the Array
// let text = myArray.toString();


// --------------------------- Using Object.entries()
// Object.entries() makes it simple to use objects in loops:

// // Example 1:
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }

// console.log(Object.entries(fruits));
// console.log(text);

// --------------------------- Using JSON.stringify()
//JavaScript objects can be converted to a string with JSON method JSON.stringify().
//JSON.stringify() is included in JavaScript and supported in all browsers.

// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Stringify Object
// let text = JSON.stringify(person);
// console.log(text);
// console.log(typeof(person["age"]));



// --------------------------- Object Constructor Functions
// ---------------------------Object Type Person 
// Example 1:
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Example 2:
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");
// const mySelf = new Person("Johnny", "Rally", 22, "green");



//----------------Other Examples from ChatGPT--------------------------

// JS Objects
// An object in JavaScript is a collection of key–value pairs — where each key (called a property) is a string (or Symbol), and each value can be anything: a string, number, array, function, or even another object.

// Example 1:
// const person = {
//   name: "Alice",
//   age: 25,
//   job: "Engineer"
// };

//--------------------------- Creating Objects ---------------------------
// 1️⃣ Object Literal (most common)
// const car = {
//   brand: "Tesla",
//   model: "Model 3",
//   year: 2022
// };


// 2️⃣ Using new Object()
// const user = new Object();
// user.name = "Deepan";
// user.age = 22;

// 3️⃣ Using a Constructor Function
// function Student(name, grade) {
//   this.name = name;
//   this.grade = grade;
// }
// const s1 = new Student("John", "A");


// 4️⃣ Using class (ES6+)
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const p1 = new Person("Emma", 30);


// --------------------------- Acccessing Object Properties ---------------------------

// // ➤ Dot Notation
// console.log(person.name);  // Output: Alice


// // ➤ Bracket Notation
// console.log(person["age"]);  // Output: 25


// --------------------------- 🛠️ Adding, Modifying, Deleting ---------------------------
// Example 1:
// person.country = "India";     // Add new property
// person.age = 26;              // Modify
// delete person.job;            // Remove


// --------------------------- 🔁 Looping through an Object
// for (let key in person) {
//   console.log(key + ":", person[key]);
// }


// --------------------------- 📦 Object Methods
// Objects can also have functions as values, called methods.

// // Example 1:
// const calculator = {
//   add: function(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;  // Shorter syntax
//   }
// };

// console.log(calculator.add(5, 3));      // 8
// console.log(calculator.subtract(5, 3)); // 2




// ---------------------------Built-in Object Methods
// Object.keys(obj)	Returns an array of property names
// Object.values(obj)	Returns an array of property values
// Object.entries(obj)	Returns key–value pairs as arrays
// Object.assign(target, source)	Copies properties from one object to another
// Object.freeze(obj)	Makes object read-only
// Object.hasOwn(obj, key)	Checks if key exists in object



// Example 1:
// const user = { name: "Bob", age: 30 };
// console.log(Object.keys(user));   // ["name", "age"]
// console.log(Object.values(user)); // ["Bob", 30]


// ---------------------------🧬 Nested Objects
// const student = {
//   name: "Sara",
//   marks: {
//     math: 90,
//     science: 85
//   }
// };
// console.log(student.marks.math); // 90



// --------------------------- End --------------------------- 