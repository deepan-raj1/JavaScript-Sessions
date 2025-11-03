// @ JavaScript Objects
// An Object is a variable that can hold many variables.
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
// Objects can describe anything like houses, cars, people, animals, or any other subjects.


//--------------------------- JS Objects ---------------------------
// Example 1: Creation Using Object Literal {key : value}
// let obj = {
//     name: "Sourav",
//     age: 23,
//     job: 'Developer',
//     gender: `male`
// };
// console.log(obj);


// Example 2: Creation Using new Object() Constructor
// let obj = new Object();
// obj.name= "Sourav",
// obj.age= 23,
// obj.job= "Developer"
// obj.experience = 3;
// console.log(obj);
// console.table(obj);
// console.error("erro message");
// console.warn("warning message");



//---------------------------Basic Operations on JavaScript Objects----------------------
// 1. Accessing Object Properties
// let obj = { name: "Sourav", age: 23, job:"software developer" };
// //Using Dot Notation
// console.log(obj.name);
// //Using Bracket Notation
// console.log(obj["age"]);

// console.log(obj.job);
// console.log(obj["job"]);
// console.log(obj)


// 2. Modifying Object Properties (key):
// let obj = { name: "Sourav", age: 22 };
// console.log(obj);
// obj.age = 23;
// obj.name = "Sivaji";
// console.log(obj);

// 3. Adding Properties to an Object
// let obj = { model: "Tesla" };
// obj.color = "Red";
// obj.year = "2026";
// obj.cost = 1000000
// console.log(obj);
// obj.model = "Tata";
// console.log(obj)
// obj.brand = obj.model;
// console.log(obj);

// 4. Removing Properties from an Object
// Example 1:
// let obj = { model: "Tesla", color: "Red" };
// delete obj.color;
// delete obj.model;
// console.log(obj);


// 5. Checking if a Property Exists
// let obj = { model: "Tesla" };
// console.log("color" in obj);
// console.log(obj.hasOwnProperty("model"));
// console.log("model" in obj);

//--------------------------- hasOwnProperty() method-------------------
// syntax: object.hasOwnProperty( prop );

// Example 1:
// let exampleObj = {};
// exampleObj.height = 100;
// exampleObj.width = 100;
// // Checking for existing property
// let result1 = exampleObj.hasOwnProperty("height");
// // Checking for non-existing property
// let result2 = exampleObj.hasOwnProperty("breadth");
// console.log(result1);  // true
// console.log(result2);  // false


// Example 2:
// function checkProperty() {

//     function Car(a, b) {
//         this.model = a;
//         this.name = b;
//     }

//     let car1 = new Car("Mazda", "Laputa");

//     // Checking for existing property
//     result1 = car1.hasOwnProperty("model");

//     // Checking for non-existing property
//     result2 = car1.hasOwnProperty("wheels");

//     console.log(result1);

//     console.log(result2);
// }
// checkProperty()




// 6. Iterating Through Object Properties
// let obj = { name: "Sourav", age: 23 };
// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }


// 7. Merging Objects: spread property ... 
// let obj1 = { name: "Sourav" };
// let obj2 = { age: 23};
// let obj3 = { job: "developer"};
// let obj4 = {experience: "5 years"};

// let obj5 = { ...obj1, ...obj2, ...obj3, ...obj4 };
// console.log(obj5);


//---------------------------Object assign() Method ---------------------------
// syntax: Object.assign(target, ...sources);

//  Example 1:
// creating an object constructor 
// and assigning values to it
// const obj1 = { a: 1 };
// const obj2 = { b: 2};
// const obj3 = {year:2025};
// // creating a target object and copying values and 
// // properties to it using object.assign() method
// // Here, obj1 is the source object
// // const new_obj = Object.assign(obj2, obj1, obj3);
// const new_obj = Object.assign({},obj1, obj2, obj3);


// // Displaying the target object 
// console.log(new_obj);





// Example 2:
// // creating 3 object constructors and assigning values to it
// let obj1 = { a: 10 };
// let obj2 = { b: 20 };
// let obj3 = { c: 30 };

// // Creating a target object and copying values 
// // and properties to it using object.assign() method 
// let new_obj = Object.assign({}, obj1, obj2, obj3);

// // Displaying the target object
// console.log(new_obj);


// Example 3:
// Creating 3 object constructors and assigning values to it
// let obj1 = { a: 10, b: 10, c: 10 };
// let obj2 = { b: 20, c: 20 };
// let obj3 = { c: 30 };

// // Creating a target object and copying values and 
// // properties to it using object.assign() method
// let new_obj = Object.assign({}, obj1, obj2, obj3);

// // Displaying the target object
// console.log(new_obj);



// 8. Object Length
// syntax: Object.keys()

// let obj = { name: "Sourav", age: 23 };
// console.log(Object.keys(obj).length);

//----------------------- Object keys() Method -----------------------
// Object.keys(obj);

// Example 1: Enumerating Array Indices with Object.keys()
// // Returning enumerable properties
// // of a simple array 
// let check = ['x', 'y', 'z'];
// console.log(Object.keys(check));

// Example 2: Enumerating Array-Like Object Properties with Object.keys()
// // Returning enumerable properties
// // of an array like object.
// let object = { 0: 'x', 1: 'y', 2: 'z' };
// console.log(Object.keys(object));


// // -----------------------Recognizing a JavaScript Object:
// Example 1:
// let obj = { name: "Sourav" };
// console.log(typeof obj === "object" && obj !== null);
// console.log(typeof(obj));
// let arr = [1, 2, 3];
// console.log(typeof(arr));
// console.log(obj === "object" && obj !== null);


// // In JavaScript, there are two main ways to create objects

// Example 1:
// // Object literal
// const obj1 = { key: "value" };

// // Object constructor
// const obj2 = new Object();
// obj2.key = "value";
// obj2.name = "Balamurugan";
// obj2.name = "Gokul";

// console.log(obj1);
// console.log(obj2);


// --------------------------- JavaScript Object Constructors
// Example 1:
// const GFG = {
//     subject : "programming",
//     language : "JavaScript",
// }
// console.log(GFG);

// //--------------------------- Object Constructor
// // Example 1:
// Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     };
// }


// // //Creating Instances with a Constructor
// const p1 = new Person("Akash", 30);
// const p2 = new Person("Anvesh", 25);
// const p3 = new Person("Sivaji", 20);

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();

//-----------------------this keyword

// Adding Property to an Object
// Example 1:
// const GFG = {
//     articles: 'computer science',
//     quantity: 3000,
// };
// GFG.subject: 'JavaScript';
// GFG['subject']: 'JavaScript';


// Example 2:
// function GFG(a, b, c) {
//     this.A = a;
//     this.B = b;
//     this.C = c;
//     this.G = "GEEK";
// }

// ---------------------------Adding a Method to an Object
// GFG.n = function () {
//     return this.A + this.B;
// };


//---------------------------  Adding a Method to Constructor
// function GFG(a, b, c) {
//     this.A = a;
//     this.B = b;
//     this.C = c;
//     this.n = function () {
//         return this.A + this.B;
//     }
// }

//---------------------------  Instantiating an object constructor
// const object_name = new Object(); // or  
// const object_name = new Object("java", "JavaScript", "C#");

// const object_name = { };


//---------------------------  Assigning properties to the objects:
// Using dot (.) operator:
// object_name . properties = value;

// Using third bracket:
// object_name [ 'properties'] = value;


//---------------------------  Example 1: Object creation by using new keyword and assigning properties to the object using dot(.) operator. 
// let gfg = new Object();
// gfg.a = "JavaScript";
// gfg.b = "GeeksforGeeks";
// console.log("Subject: " + gfg.a);
// console.log("Author: " + gfg.b );


//---------------------------  Example 2: Object creation using curly braces and assigning properties to the object using third bracket "[]" operator. 
// let gfg = { };
// gfg['a'] = "JavaScript";
// gfg['b']= "GeeksforGeeks";
// console.log("Subject: " + gfg.a);
// console.log("Author: " + gfg.b );

//---------------------------  Example 3: This example shows how to use function() with object constructor. 
// let gfg = new Object();
// gfg.a = "JavaScript";
// gfg.b = "GeeksforGeeks";
// gfg.c = function () {
//     return (gfg.a +" "+ gfg.b);
// };
// console.log("Subject: " + gfg.a);
// console.log("Author: " + gfg.b);
// console.log("Adding the strings: "+ gfg.c() );

//--------------------------- Example 4: Another way to create a function using function name. 
// let gfg = { };
// gfg.a = "JavaScript";
// gfg.b = "GeeksforGeeks";
// gfg.c = add;
// // Declare function add()
// function add() {
//     return (gfg.a +" "+ gfg.b);
// };
// console.log("Subject: " + gfg.a);
// console.log("Author: " + gfg.b);
// console.log("Adding the strings: "+ gfg.c());


//--------------------------- End ---------------------------






