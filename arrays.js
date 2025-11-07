// @JavaScript Arrays
// ---------------------------------- 1. Create Array using Literal ----------------------------------
// Example 1:
// //Creating an Empty Array
// let a = [];
// console.log(a);
// // Creating an Array and Initializing with Values
// let b = [10, 20, 30, "Sivaji", true, false, 10.20, {a:1, b:2}];
// console.log(b);
// console.log(typeof(b));

// ---------------------------------- 2. Create using new Keyword (Constructor) ----------------------------------
// Example 1:
// // Creating and Initializing an array with values
// let a = new Array(10, 20, 30);
// console.log(a);
// let b = new Object([]);
// b.obj1 = 10;
// b.obj2 = 20;
// b.obj3 = 30;
// console.log(b);
// let c = new Object(10,20,30);
// console.log(c);



// @Basic Operations on JavaScript Arrays
// ---------------------------------- 1. Accessing Elements of an Array----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Accessing Array Elements
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[a.length - 1]);
// console.log(a.length)
// console.log(a[a.length - 3]);



// ---------------------------------- 2. Accessing the First Element of an Array ----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Accessing First Array Elements
// let fst = a[0];
// console.log("First Item: ", fst);


// ---------------------------------- 3. Accessing the Last Element of an Array----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Accessing Last Array Elements
// let lst = a[a.length - 1];
// console.log("First Item: ", lst);

//---------------------------------- 4. Modifying the Array Elements----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// console.log(a);
// a[1]= "Bootstrap";
// console.log(a);
// a[a.length-1] = "Python";
// console.log(a);

//----------------------------------  5. Adding Elements to the Array----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Add Element to the end of Array
// a.push("Node.js");
// // Add Element to the beginning
// a.unshift("Web Development");
// console.log(a);
// a.push("Sivaji The Boss");
// a.unshift("Gokulnath Krishnakumar")
// console.log(a);
// a.push("apple", "mango", "banana", "grapes");
// console.log(a);

//----------------------------------  6. Removing Elements from an Array----------------------------------
// Example 1:
// Creating an Array and Initializing with Values
//let a = ["HTML", "CSS", "JS"];
// console.log("Original Array: " + a);
// // Removes and returns the last element
//let lst = a.pop();
// console.log("After Removing the last: " + a);
// Removes and returns the first element
// let fst = a.shift();
// console.log("After Removing the First: " + a);
// Removes 2 elements starting from index 1
// a.splice(1, 2);
// console.log("After Removing 2 elements starting from index 1: " + a);
// a.splice(1, 1, "Jeba kumar");
// console.log(a);


//----------------------------------------------- JavaScript Array - splice() Method----------------------------------
// syntax: array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

// Example 1: Removing Elements from an Array
// let a = ["Apple", "Banana", "Cherry", "Date"];
// a.splice(1, 2);
// console.log(a);

// Example 2: Adding Elements to an Array
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.splice(2, 0, "Mango", "Peach");
// console.log(fruits);

// Example 3: Replacing Elements in an Array
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.splice(1, 2, "Orange", "Grape");
// console.log(fruits);

// Example 4: Adding or Removing Elements from the End of the Array
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// let a = ["sivaji", "gokul", "krishna"];
// fruits.splice(fruits.length - 1, 1,"Custard Apple", a);  // Removes the last element
// a.splice(a.length-1, 1, "Umar");
// console.log(fruits);


// Example 5: Handling Negative Indices
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.splice(-2, 1, "Mango");
// console.log(fruits);


//----------------------------------  7. Array Length----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // let len = a[a.length-1];
// // console.log("Array Length: " + len);
// let b = a.length-2;
// console.log(b);
// console.log(typeof(b));
// console.log(a[a.length-3]);


//----------------------------------  8. Increase and Decrease the Array Length----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"]
// // Increase the array length to 7
// a.length = 7;
// console.log("After Increasing Length: ", a);
// // Decrease the array length to 2
// a.length = 2;
// console.log("After Decreasing Length: ", a)


//----------------------------------  9. Iterating Through Array Elements----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Iterating through for loop
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }


// Example 2:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Iterating through forEach loop
// a.forEach(function myfunc(x) {
//     console.log(x);
// });

// Example 3:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Iterating through forEach loop
// let b = a.forEach(function myfunc(x) {
//     console.log(x);
// });
// console.log(b);


//----------------------------------  10. Array Concatenation----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS", "React"];
// let b = ["Node.js", "Expess.js"];
// let c = ["Sivaji", "Ram Kumar", "BAMU"];
// // Concatenate both arrays
// let concateArray = a.concat(b, c);
// console.log("Concatenated Array: ", concateArray);



//----------------------------------  11. Conversion of an Array to String----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Convert array ot String
// console.log(a.toString());
// let c = a.toString();
// console.log(typeof (a));
// console.log(typeof(c));



//----------------------------------  12. Check the Type of an Arrays----------------------------------
// Example 1:
// // Creating an Array and Initializing with Values
// let a = ["HTML", "CSS", "JS"];
// // Check type of array
// console.log(typeof a);



//----------------------------------  Recognizing a JavaScript Array----------------------------------
//- By using Array.isArray() method
//- By using instanceof method 

// Example 1:
// const courses = ["HTML", "CSS", "Javascript"];
// console.log("Using Array.isArray() method: ", Array.isArray(courses))
// console.log("Using instanceof method: ", courses instanceof Array)

// let a = [3];
// console.log(a instanceof Array);


// Example 2:
// Example 
// const a1 = [5]
// console.log(a1)
// // Example 
// const a2 = new Array(5) 
// console.log(a2)

//@----------------------------------------------- @JavaScript Array Methods
//----------------------------------  1. JavaScript Array length ----------------------------------
// Example 1:
// let a = ["HTML", "CSS", "JS", "React"];
// console.log(a.length);

//----------------------------------  2. JavaScript Array toString() Method----------------------------------
// Example 1:
// let a  = ["HTML", "CSS", "JS", "React"];
// let s = a.toString();
// console.log(s);

//----------------------------------  3. JavaScript Array join() Method----------------------------------
// Example 1:
// let a = ["HTML", "CSS", "JS", "React"];
// console.log(a.join('|'));
// console.log(a.join(' $ '));

//----------------------------------  4. JavaScript Array delete Operator----------------------------------
// // Example 1:
// let emp = { 
//     firstName: "Riya", 
//     lastName: "Kaur", 
//     salary: 40000
// } 
// console.log(delete emp.salary); 
// console.log(emp);

// Example 2:
// let ary = [1,2,3,4,5];
// delete ary[1];
// console.log(ary);



//----------------------------------  5. JavaScript Array concat() Method----------------------------------
// // Example 1:
// let a1 = [11, 12, 13];
// let a2 = [14, 15, 16];
// let a3 = [17, 18, 19];
// let newArr = a1.concat(a2, a3);
// console.log(newArr);


//----------------------------------  6. JavaScript Array flat() Method----------------------------------
// Example 1:
// const a1 = [['1', '2'], ['1', '3', '4', '5',['6','8', ['11','12','13']], '7']];
// const a2 = a1.flat(Infinity);
// console.log(a2);


//----------------------------------  7. JavaScript Array.push() Method----------------------------------
// Example 1:
// let a = [10, 20, 30, 40, 50];
// a.push(60);
// a.push(70, 80, 90);
// console.log(a);


//----------------------------------  8. JavaScript Array.unshift() Method----------------------------------
// Example 1:
// let a = [20, 30, 40];
// a.unshift(10, 20);
// console.log(a);


//----------------------------------  9. JavaScript Array.pop() Method----------------------------------
// Example 1:
// let a = [20, 30, 40, 50];
// a.pop();
// console.log(a);


//----------------------------------  10. JavaScript Array.shift() Method----------------------------------
// Example 1:
// let a = [20, 30, 40, 50];
// a.shift();
// console.log(a);


//----------------------------------  11. JavaScript Array.splice() Method----------------------------------
// Example 1:
// let a = [20, 30, 40, 50];
// a.splice(1, 3);
// a.splice(1, 0, 3, 4, 5);
// console.log(a);


//----------------------------------  12. JavaScript Array.slice() Method----------------------------------
// Example 1:
// const a = [1, 2, 3, 4, 5];
// const res = a.slice(1, 4);
// console.log(res); 
// console.log(a)


//----------------------------------  13. JavaScript Array some() Method----------------------------------
// Example 1:
// const a = [1, 2, 3, 4, 5];
// let res = a.some((val) => val > 4);
// console.log(res);


//----------------------------------  14. JavaScript Array map() Method----------------------------------
// Theory concept: The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. It skips empty elements and does not modify the original array.
// syntax: arr.map((element, index, array) => { /* … */ })


// Example 1:
// let a = [4, 9, 16, 25];
// let sub1 = geeks();
// let sub2 = a.map(geeks);
// function geeks() {
//     return a.map(Math.sqrt);
// }
// console.log(sub1);
// console.log(sub2);

// let b = a.map(Math.sqrt);
// console.log(b);

// let c = a.map(x => x * 5);
// console.log(c);

// let d = a.map(x => x*x);
// console.log(d);


// Example 2:
// const a = [1, 2, 3, 4];
// // Use map to create a new array with elements doubled
// const b = a.map(x => x * 2);
// console.log(b);


// Example 3:
// const a = [1, 4, 9, 16, 25];
// const sr = a.map(num => Math.sqrt(num)); 
// console.log(sr);


// Example 4: This example uses the array map() method and returns the square of the array element. 
// let a = [2, 5, 6, 3, 8, 9];
// // Using map to transform elements
// let res = a.map(function (val, index) {
//     return { key: index, value: val * val };
// })
// console.log(res)


// Example 5: This example uses the array map() method to concatenate the character 'A' with every character of the name. 
// let s = "Geeks";
// // New array of character and names
// // concatenated with 'A'
// let res = Array.prototype.map.call(s, function (item) {
//     return item + 'A';
// })
// console.log(res)


// Example 6: Passing a method as parameter to map()
// const a = ['10', '20', '30'];
// const b = a.map(s => parseInt(s));
// console.log(b);


//----------------------------------  15. JavaScript Array filter() method----------------------------------
// Theory concept:The filter() method creates a new array containing elements that satisfy a specified condition. This method skips empty elements and does not change the original array.
// syntax: array.filter(callback(element, index, arr), thisValue)

// Example 1:
// let a1 = [1, 2, 3, 4, 5]
// let a2 = a1.filter((num) => num > 1)
// console.log(a2)

// Example 2:
// JavaScript to illustrate findIndex() method
// function canVote(age) {
//     return age >= 18;
// }
// let filtered = [24, 33, 16, 40].filter(canVote);
// console.log(filtered);


// Example 3: 
// function isPositive(value) {
//     return value > 0;
// }
// let filtered = [112, 52, 0, -1, 944].filter(isPositive);
// console.log(filtered);

// Example:
// let a = [1,2,3,4,5,6,7,8,9,10];
// let b = a.filter(n => n%2 == 0 );
// let c = a.map(n => n%2 == 0);
// let d = a.map(n => n>0);
// console.log(b);
// console.log(c);
// console.log(d);

// Example:
// let numbers = new Array(50).fill(0).map((_, i) => i + 1);
// console.log(numbers);


// Example 4: 
// function isEven(value) {
//     return value % 2 == 0;
// }

// let filtered = [11, 98, 31, 23, 944].filter(isEven);
// console.log(filtered);


//----------------------------------  16. JavaScript Array reduce() Method----------------------------------
// Theory coccepts: The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, accumulating a single output value. It takes an initial value and processes elements from left to right, reducing the array to a single result. It is useful for doing operations like max in an array, min in an array and sum of array
// syntax: array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

// Example 1:
// let a = [88, 50, 25, 10];
// let sub = a.reduce(geeks);
// function geeks(tot, num) {
//     return tot - num;
// }
// console.log(sub);


// Example 2: Example to do sum of an array using reduce
// const a = [2, 4, 6];
// // Use reduce to calculate the sum
// const sum = a.reduce((acc, x) => acc + x, 0);
// console.log(sum);


// Example 3:
// const a = [2, 4, 6];
// function sum2(acc, x) {
//   return acc + x;
// }
// const sum = a.reduce(sum2, 0);
// console.log(sum);


// Example 3.1:
// const a = [2, 4, 6];
// function sum2(acc, x) {
//   return acc + x;
// }
// console.log(a.reduce(sum2, 0));


// Example 4:
// const a = ["js", "html", "css"];
// // Use reduce to calculate the sum of the lengths of the strings
// const res = a.reduce((acc, str) => acc + str.length, 0);
// console.log(res);



//----------------------------------  17. JavaScript Array reverse() method----------------------------------
// Example 1:
// let a = [1, 2, 3, 4, 5];
// a.reverse();
// console.log(a);

// let b = "Sivaji The Boss";
// let c = b.split(" ").reverse().join(" ");
// console.log(c);

// Example 2:
// function func() {
//     // Original Array
//     let arr = ['Portal', 'Science',
//         'Computer', 'GeeksforGeeks'];
//     console.log(arr);

//     // Reversed array
//     let new_arr = arr.reverse();
//     console.log(new_arr);
// }
// func();


// Example 3:
// function func() {

//     // Original Array
//     let arr = [34, 234, 567, 4];
//     console.log(arr);

//     // Reversed array
//     let new_arr = arr.reverse();
//     console.log(new_arr);
// }
// func();


//----------------------------------  18. JavaScript Array values() method----------------------------------
// Theory: JavaScript array.values() is an inbuilt method in JavaScript that is used to return a new array Iterator object that contains the values for each index in the array i.e., it prints all the elements of the array.
// - Returns an iterator for accessing array values.
// - Does not modify the original array.
// - Works with any array, including sparse ones.
// - Commonly used with for...of loops.
// syntax: arr.values();

// Note => The values() method does not modify the original array. It returns a new array iterator object i.e., elements of the given array. 


// Example 1:
// const a = ["Apple", "Banana", "Cherry"];
// const res = a.values();
// console.log(res);

// for (const value of res) {
//     console.log(value);
// }



// Example 2:
// const a = ['Apple', 'Banana', 'Cherry'];
// const iterator = a.values();

// for (let value of iterator) {
//   	console.log(value);
// }


// Example 3: value(next value of array) : done(boolean)
// let a = [10, ,20, 30];
// let iterator = a.values();
// console.log(iterator.next());  
// console.log(iterator.next());  
// console.log(iterator.next());  
// console.log(iterator.next());
// console.log(iterator.next());


//The next() method of the iterator returns an object with two properties:
//- value: The next value in the array.
// - done: A boolean indicating whether all values have been iterated over (true when the iteration is complete).


// Example 4: Array values() method with for loop.
// let a = ['a', 'gfg', 'c', 'n'];
// let iterator = a.values();
// for (let elements of iterator) {
//     console.log(elements);
// }


// Example 5: Printing elements of array with holes using array values() method.
// let a = ["A", "B", , "C", "D"];
// let iterator = a.values();
// for (let value of iterator) {
//     console.log(value);
// }

// Example 6: Using values() with Object Arrays
// let obj = [
//     { name: 'Jiya', age: 18 },
//     { name: 'Alia', age: 22 },
//     { name: 'Bibita', age: 20 }
// ];

// let iterator = obj.values();

// for (let student of iterator) {
//     console.log(student.name);  
//     console.log(student.age);
//     console.log(student);
// }


// Example 7: Using values() with next()
// let a = [1, 2, 3, 4];
// let iterator = a.values();
// console.log(iterator.next().value);  
// console.log(iterator.next().value);  
// console.log(iterator.next().value);
// console.log(iterator.next());
// console.log(iterator.next());



// ------------------------------------------ End ------------------------------------------

// References 
// 1. GeeksforGeeks 
// 2. W3school
// 3. Online resources from Google & ChatGPT.







