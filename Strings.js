// @JavaScript Strings
//------------------------------- String Creation -------------------------------
// Example 1:
// let text = "John Doe";
// let carName1 = "Volvo XC60";  // Double quotes
// let carName2 = 'Volvo XC60';  // Single quotes
// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';
// let text1 = `He's often called "Johnny"`;
// console.log(text);
// console.log(carName1);
// console.log(carName2);
// console.log(answer1);
// console.log(answer2);
// console.log(answer3);
// console.log(text1);

// Example 2:
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// Example 3:
// let text = 'We are the so-called \'Vikings\' from the north.';
// console.log(text);

//------------------------------- Create using Literals - Recommended -------------------------------
// Example 1
// let s1 = 'abcd';
// console.log(s1);

// // Using Double Quote
// let s2 = "abcd";
// console.log(s2);

//------------------------------- Create using Constructor -------------------------------
// Example 1 
// let s = new String('abcd');
// console.log(s);

//------------------------------- Template Literals (String Interpolation) -------------------------------
// Example 1
// let s1 = 'Deepan Raj';
// let s2 = `You are learning from ${s1}`;
// console.log(s2);

//------------------------------- Empty String -------------------------------
// Example 1
// let s1 = 6;
// let s2 = "";
// console.log(s1);
// console.log(s2);
// console.log(typeof(s1, s2, s1));
// console.log(typeof(s2, s1));


//------------------------------- Multiline Strings (ES6 and later) -------------------------------
// let s = `
//     This is a
//     multiline
//     string`;

// console.log(s);


// @JS String Operations
//------------------------------- Finding the length of a String -------------------------------
// syntax: string.length

// Example 1
// let s = 'JavaScript';
// let len = s.length;
// console.log("String Length: " + len);

// Example 2: Measuring the Length of a Basic String
// function func() {

//     console.log("GFG".length)
// }
// func();

// console.log("Sivaji".length);


// Example 3: Checking if a String is Empty
// let emptyString = '';

// console.log(emptyString.length === 0);

// Example 4: Accessing the Last Character of a String
// let str = 'GeeksforGeeks';

// const lastIndex = str.length - 1;
// console.log(lastIndex);


//------------------------------- String Concatenation -------------------------------
// Example 1:
// let s1 = 'Java';
// let s2 = 'Script';
// let res = s1 + ' ' + s2;
// console.log("Concatenated String: " + res);

// Example 2:
// console.log(1 + 2);
// console.log(NaN + 1);
// console.log(true + 1);
// console.log(false + 1);

// Example 3:
// console.log("1" + 2);
// console.log("Hello " + "Geek");

//------------------------------- Escape Characters -------------------------------
// Example 1: 
// const s1 = "\"GfG\" is a learning portal";  
// const s2 = '\'GfG\' is a learning portal';  
// const s3 = "\\GfG\\ is a learning portal";  
// console.log(s1);
// console.log(s2);
// console.log(s3);


//------------------------------- Breaking Long Strings -------------------------------
// Example 1:
// const s = "'GeeksforGeeks' is \
// a learning portal\
// hjkjkjk\
// ABCDEFGHIJKLMNOPQRSTUVWXYZ \
// dfghj \
// sdfghj \
// dfghj \
// dfggfg\
// kjhg\
//     .oiuytr";
// console.log(s);

// Example 2:    Recommended
// const s = "'GeeksforGeeks' is a"
//     + " learning portal";

// console.log(s);

// Example 3:
// a = "Sivaji ";
// b = "The boss ";
// c = 87654;
// console.log(a + b + c);

//------------------------------- Find Substring of a String -------------------------------
// syntax: string.substring(startIndex, endIndex);

// Example 1:
// let s1 = 'JavaScript \u2764 Tutorial';
// let s2 = s1.substring(0);
// console.log(s2);

// Example 2: 
// let s1 = "Hellooo\babc";
// console.log(s1);

// Example 2:
// let s = "Hello, World!";
// // Extract substring from index 7 to index 12
// let res = s.substring(7, 12);
// console.log(res);

// Example 3: Extracting Substrings by Character Index
// let s1 = "Amit Ray";
// let s2 = s1.substring(0, 4);
// let s3 = s1.substring(5);
// console.log(s2);
// console.log(s3);

// Example 4: Extracting a Portion of a URL
// let url = "https://www.geeksforgeeks.org/javascript/javascript-tutorial/";
// let domain = url.substring(8, 29); // Extract the domain
// let path = url.substring(29);      // Extract the path
// console.log(domain);
// console.log(path);

// Example 5: String Validation
// let email = "user@example.com";
// let domain = email.substring(email.indexOf('@') + 1);
// console.log(domain);

// Example 6: Removing a Prefix or Suffix
// let fName = "re.port.pdf";
// let ext = fName.substring(fName.lastIndexOf('.') + 1);
// console.log(ext);
// let ext1 = fName.substring(fName.indexOf('.') + 1);
// console.log(ext1);


// EXample 7:When the Starting Idex is Greater
// let s = "Learning JavaScript";
// let res = s.substring(8, 13);
// let res1 = s.substring(13, 0);
// console.log(res);
// console.log(res1);


// EXample 8:Using Only the Starting Index
// let s = "JavaScript is amazing!";
// let res = s.substring(11);
// console.log(res);

// EXample 9: Immutability
// let s1 = "I love coding";
// let s2 = s1.substring(2, 6);
// console.log(s1);
// console.log(s2);



//------------------------------- Convert String to Uppercase and Lowercase -------------------------------

// EXample 1
// let s = 'JavaScript';
// let uCase = s.toUpperCase();
// let lCase = s.toLowerCase();
// console.log(uCase);
// console.log(lCase);

// Example 2:
// let str = 'It iS a 5r&:ampe@@t Day.'
// let string = str.toUpperCase();
// console.log(string);

// Example 3: Array of data, using map() and toUpperCase() to convert each element to uppercase.
// let data = [ 'javascript', 'html', 'css' ];
// let result = data.map(data => data.toUpperCase());
// console.log(result);


// Example 4: Converting elements of array to lowercase
// let languages = ['JAVASCRIPT', 'HTML', 'CSS'];
// let result = languages.map(lang => lang.toLowerCase());
// console.log(result);

//------------------------------- String Search in JavaScript -------------------------------
// syntax: str.indexOf(searchValue , index);

// Example 1:
// let s1 = 'adef abc abc';
// let i = s1.indexOf('abc');
// let last = s1.lastIndexOf('abc');
// console.log(i);
// console.log(last);

// Example 1: Finding the First Occurrence of a Substring
// let str = 'Departed Train';
// let index = str.indexOf('Train');
// console.log(index);

// Example 2: Using indexOf() to Locate Substrings
// let str = 'Departed Train';
// let index = str.indexOf('ed Tr');
// console.log(index);

// Example 3: Handling Case Sensitivity in indexOf() Method
// let str = 'Departed Train';
// let index = str.indexOf('train');
// console.log(index);   //The indexOf() method is case-sensitive. If the cases don’t match, the method will return -1:


// Example 4: Using an Index to Start the Search
// let str = 'Departed Train before another Train';
// let index = str.indexOf('Train');
// console.log(index);

//------------------------------- String Replace in JavaScript -------------------------------
// syntax: str.replace(value1, value2);

// Example 1:
// let s1 = 'Learn HTML at GfG and HTML is useful';
// let s2 = s1.replace(/HTML/g, 'JavaScript');
// let s3 = s1.replace(/HTML/, 'JavaScript');
// console.log(s2);
// console.log(s3);



// Example 2:
// let string = 'GeeksForGeeks';
// let newstring = string.replace('GeeksForGeeks', 'GfG');
// console.log(newstring);

// Example 3:
// let string = 'GeeksForGeeks is a CS portal';
// let newstring = string.replace(/GeeksForGeeks/, 'gfg');
// console.log(newstring);

// Example 4: Below is an example of the string.replace() Method. 
// // Taking a regular expression
// let re = /GeeksForGeeks/;

// // Taking a string as input
// let string = 'GeeksForGeeks is a CS portal';

// // Calling replace() method to replace
// // GeeksForGeeks from string with gfg
// let newstring = string.replace(re, 'gfg');

// // Printing new string with replaced items
// console.log(newstring);



//------------------------------- Trimming Whitespace from String -------------------------------
// Example 1:
// let s1 = '    Learn JavaScript       ';
// let s2 = s1.trim();
// console.log(s2);

// Example 2:
// let s = "   GeeksforGeeks    ";
// let s1 = s.trim();
// console.log(s1);

//------------------------------- Access Characters from String -------------------------------
// syntax: character = str.charAt(index);

// Example 1: 
// let s1 = 'Learn JavaScript';
// let s2 = s1[6];
// console.log(s2);

// s2 = s1.charAt(6);
// console.log(s2);


// Example 2:
// function func() {
//     // Original string
//     let str = 'JavaScript is object oriented language';

//     // Finding the character at given index
//     let value = str.charAt(0);
//     let value1 = str.charAt(4);
//     console.log(value);
//     console.log(value1);
// }
// func();

//------------------------------- String Comparison in JavaScript -------------------------------
// Example 1:
// let s1 = "Ajay"
// let s2 = new String("Ajay");
// console.log(s1 == s2);  // true (type coercion)
// console.log(s1 === s2); // false (strict comparison)
// console.log(s1.localeCompare(s2)); // 0 (means they are equal lexicographically)

// Example 2:
// let a = "5";
// let b = "7";
// console.log(a.localeCompare(b));

// Example 2:
// let str1 = "apple";
// let str2 = "banana";
// let result = str1.localeCompare(str2);
// console.log(result);


// Example 3: localeCompare() Method to sort the elements.
// Taking some elements to sort alphabetically
// let elements = ['gfg', 'geeksforgeeks', 'cse', 'department'];
// let a = elements.sort((a, b) => a.localeCompare(b));

// // Returning sorted elements
// console.log(a)

//------------------------------- Passing JavaScript String as Objects -------------------------------
// Example 1:
// const str = new String("GeeksforGeeks");
// console.log(str);

// Are the strings created by the new keyword is same as normal strings?
// No, the string created by the new keyword is an object and is not the same as normal strings.

// Example 2:
// const str1 = new String("GeeksforGeeks");
// const str2 = "GeeksforGeeks";
// console.log(str1 == str2);
// console.log(str1 === str2);

// @String Methods
//------------------------------- slice() -------------------------------
// syntax: string.slice(startingIndex, endingIndex);

//Example 1: Slicing String
// // Define a string variable 
// let A = 'Geeks for Geeks';

// // Use the slice() method to extract a substring
// let b = A.slice(0, 5);
// let c = A.slice(6, 9);
// let d = A.slice(10);

// // Output the value of variable
// console.log(b);
// console.log(c);
// console.log(d);


// Example 2: Negative start or end index case
// let A = 'Ram is going to school';

// // Calling of slice() Method
// b = A.slice(0, 5);

// // Here starting index is 1 given
// // and ending index is not given to it so
// // it takes to the end of the string  
// c = A.slice(1);

// // Here endingindex is -1 i.e, second last character
// // of the given string.
// d = A.slice(3, -1);
// e = A.slice(6);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);





//------------------------------- substring() -------------------------------
// syntax: string.substring(startIndex, endIndex);

//Example 1:
// // Define a string variable
// let str = "Mind, Power, Soul";

// // Use the substring() method to extract a substring 
// let part = str.substring(6, 11);

// // Output the value of variable
// console.log(part);

// Example 2:
// let s = "Hello, World!";

// // Extract substring from index 7 to index 12
// let res = s.substring(7, 12);

// console.log(res);

//------------------------------- substr() -------------------------------
// syntax: str.substr(start, length)

//Example 1:
// // Define a string variable 'str'
// let str = "Mind, Power, Soul";

// // Use the substr() method to extract a substring f
// let part = str.substr(6, 5);

// // Output the value of variable
// console.log(part);


// Example 2: Extract Substring using substr()
// JavaScript to illustrate substr() method
// function func() {

//     // Original string
//     let str = 'It is a great day.';
//     let sub_str = str.substr(5);
//     console.log(sub_str);
// }

// func();


// Example 3: Negative Length in substr() Method


// JavaScript to illustrate substr() method
// function func() {

//     // Original string
//     let str = 'It is a great day.';

//     let sub_str = str.substr(5, -7);
//     console.log(sub_str);
// }
// func();

//------------------------------- replace() -------------------------------
//Example 1:
// // Define a string variable 'str' 
// let str = "Mind, Power, Soul";

// // Use the replace() method to replace the substring
// let part = str.replace("Power", "Space");

// // Output the resulting string after replacement
// console.log(part);

//------------------------------- replaceAll() -------------------------------
//Example 1:
// // Define a string variable 'str'
// let str = "Mind, Power, Power, Soul";

// // Use the replaceAll() method to replace all occurrences
// //of "Power" with "Space" in the string 'str'
// let part = str.replaceAll("Power", "Space");

// // Output the resulting string after replacement
// console.log(part);


//------------------------------- toUpperCase() -------------------------------
//Example 1:
// // Define a string variable
// let gfg = 'GFG ';

// // Define another string variable 
// let geeks = 'stands-for-GeeksforGeeks';

// // Convert the string 'geeks' to uppercase using the toUpperCase() method
// console.log(geeks.toUpperCase());


//------------------------------- toLowerCase() -------------------------------
//Example 1:
// // Define a string variable
// let gfg = 'GFG ';

// // Define a string variable 
// let geeks = 'stands-for-GeeksforGeeks';

// // Convert the string 'geeks' to lowercase using the toLowerCase() method
// console.log(geeks.toLowerCase());


//------------------------------- concat() -------------------------------
// //Example 1:
// let gfg = 'GFG ';
// let geeks = 'stands for GeeksforGeeks';
// let sivaji = " sivaji"

// // Accessing concat method on an object
// // of String passing another object 
// // as a parameter
// console.log(gfg.concat(geeks, sivaji));


//------------------------------- trim() -------------------------------
// //Example 1:
// let gfg = 'GFG    ';
// let geeks = 'stands-for-GeeksforGeeks';

// // Storing new object of string
// // with removed white spaces
// let newGfg = gfg.trim();

// // Old length
// console.log(gfg.length);

// // New length
// console.log(newGfg.length)


//------------------------------- trimStart() -------------------------------
//Example 1:
// // Define a string variable 
// let str = "  Soul";

// // Output the original value of the string 
// console.log(str);

// // Use the trimStart() method to remove leading whitespace from the string 'str'
// let part = str.trimStart();

// // Output the resulting string after removing leading whitespace
// console.log(part);


//------------------------------- trimEnd() -------------------------------
//Example 1:
// // Define a string variable 
// let str = "Soul  ";

// // Output the original value of the string 'str'
// console.log(str);

// // Use the trimEnd() method to remove trailing whitespace from the string 'str'
// let part = str.trimEnd();

// // Output the resulting string after removing trailing whitespace
// console.log(part);


//------------------------------- padStart() -------------------------------
// //Example 1:
// // Define a string variable 
// let stone = "Soul";

// // Use the padStart() method to add padding characters "Mind "
// //to the beginning of the string 'stone' 
// stone = stone.padStart(4, "Mind ");
// a = stone.padStart(50, "Spirit");

// // Output the resulting string after padding
// console.log(stone);
// console.log(a);


//------------------------------- padEnd() -------------------------------
//Example 1:
// // Define a string variable 
// let stone = "Soul";

// // Use the padEnd() method to add padding characters
// //" Power" to the end of the string 'stone' 
// stone = stone.padEnd(10, " Power");
// let a = stone.padEnd(52, " Heart");

// // Output the resulting string after padding
// console.log(stone);
// console.log(a);


//------------------------------- charAt() -------------------------------
// //Example 1:
// let gfg = 'GeeksforGeeks';
// let geeks = 'GfG is the best platform to learn and\n'+
// 'experience Computer Science.';

// // Print the string as it is
// console.log(gfg); 

// console.log(geeks); 

// // As string index starts from zero
// // It will return first character of string
// console.log(gfg.charAt(0)); 
// console.log(geeks.charAt(5));
// console.log(geeks[0]);
// console.log(gfg[gfg.length-2]);

//------------------------------- charCodeAt() -------------------------------
// //Example 1:
// let gfg = 'AaGeeksforGeeks';
// let geeks = 'GfG is the best platform\n\
// to learn and experience\n\
// Computer Science.';

// // Return a number indicating Unicode
// // value of character at index 0 ('G')
// console.log(gfg.charCodeAt(0));
// console.log(geeks.charCodeAt(5));

//------------------------------- split() -------------------------------
// //Example 1:
// let gfg = 'GFG '
// let geeks = 'stands-for-GeeksforGeeks'

// // Split string on '-'. 
// console.log(geeks.split('-'))


