// @JavaScript Numbers

// -------------------------- JavaScript Numbers
// Example 1
// let x = 3.14;    // A number with decimals
// let y = 3;       // A number without decimals
// console.log(x, y)

// Example 2: Extra large or extra small numbers can be written with scientific (exponent) notation:
// let x = 123e7;    // 12300000
// let y = 123e-7;   // 0.00123
// let z = 567e9
// let a = 567e-7;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);

// Example 3 (numbers upto 15) : Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
// let x = 999999999999999;   // x will be 999999999999999
// let y = 9999999999999991;  // y will be 10000000000000000
// console.log(x);
// console.log(y);

// Example 4 (floating point precision not 100% accurate)
// let x = 0.2 + 0.1;
// console.log(x);

// let y = 5 + 0.1;
// console.log(y);

// let z = 0.8 + 5.1;
// console.log(z);

// Example 5:
// let x = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(x);


// -------------------------- Adding numbers and strings
// Example 1:  If you add two numbers, the result will be a number:
// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(x,y,z);

// Example 2 : If you add two strings, the result will be a string concatenation:
// let x = "10";
// let y = "20";
// let z = x + y;
// console.log(x, y, z)

// Example 3 : If you add a number and a string, the result will be a string concatenation:
// let x = 10;
// let y = "20";
// let z = x + y;
// console.log(z);

// Example 4: If you add a string and a number, the result will be a string concatenation:
// let x = "10";
// let y = 20;
// let z = x + y;
// console.log(z);

// Example 5:
// let x = 10;
// let y = 20;
// let z = "The result is: " + x + y;
// let a = `The result of  ${x} + ${y} = ${x+y}`
// console.log(x, y);
// console.log(z);
// console.log(a);

// Example 6:
// let x = 10;
// let y = "20";
// let z = 30;
// let result = x + y + z;
// console.log(result);
// console.log(typeof(result))




// -------------------------- Numeric Strings
// Example 1
// let x = 100;         // x is a number
// let y = "100";       // y is a string
// let z = [1,2,3,4,5];
// let a = true;
// let b = 10.321;
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(a));
// console.log(typeof(b));


// Example 2: JavaScript will try to convert strings to numbers in all numeric operations:
// let x = "100";
// let y = "10";
// let z = x / y;
// console.log(z);
// console.log(typeof(z));

// Example 3:
// let x = "100";
// let y = "10";
// let z = x * y;
// console.log(z);

// Example 4:
// let x = "100";
// let y = "10";
// let z = x - y;
// console.log(z);

// Example 5:
// let x = "100";
// let y = "10";
// let z = x + y;
// console.log(z);


// -------------------------- NaN - Not a Number

// Example 1:
// let x = 100 / "Apple";
// console.log(x);

// Example 2:
// let x = 100 / "10";
// console.log(x);

// Example 3:
// let x = 100 / 10;
// console.log(x);    // 10 
// console.log(isNaN(x));   // false
// console.log(Number.isInteger(x));   // true

// Example 4:
// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z);

// Example 5:
// let x = NaN;
// let y = "5";
// let z = x + y;
// console.log(z);
// console.log(typeof(x));

// Example 6:
// console.log(typeof NaN);

// Example 7: arrow function 
// add = (a,b) => a + b;
// console.log(add("5", NaN));


// -------------------------- Infinity

// Example 1:
// let myNumber = 2;
// // Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
//   console.log(myNumber);
// }

// Example 2:
// let x =  2 / 0;
// let y = -2 / 0;
// console.log(x);
// console.log(y);

// Example 3:
// console.log(typeof Infinity);


// -------------------------- Hexadecimal
//JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

// Example 1:
// let x = 0xFF;
// let y = 55;
// console.log(x);
// console.log(typeof(x));
// console.log(y.toString(2));

// Example 2:
// let myNumber = 32;
// console.log(myNumber.toString(32));
// console.log(myNumber.toString(16));
// console.log(myNumber.toString(12));
// console.log(myNumber.toString(10));
// console.log(myNumber.toString(8));
// console.log(myNumber.toString(2));

// Output:
// The toString() method can output numbers from base 2 to 36:
// Decimal 32 =
// Hexatrigesimal (base 36): w
// Duotrigesimal (base 32): 10
// Hexadecimal (base 16): 20
// Duodecimal (base 12): 28
// Decimal (base 10): 32
// Octal (base 8): 40
// Binary (base 2): 100000



// -------------------------- JS Numbers as Objects
// Example 1:
// let x = 123;
// let y = new Number(123);
// console.log(x);
// console.log(y);

// Example 2:
// let x = 123;
// let y = new String(123);
// console.log(x);
// console.log(y);


// Example 2:
// let x = 500;
// let y = new Number(500);
// console.log(x);
// console.log(y);
// console.log(x==y);
// console.log(x===y);

// Example 3:
// let x = new Number(500);
// let y = new Number(500);
// console.log(x);
// console.log(y);
// console.log(x==y);
// console.log(x===y);



// -------------------------- JS BigInt
// Example 1 (JavaScript Numbers are only accurate up to 15 digits:)
// 15 digits:
// let x = 999999999999999;

// // 16 digits:
// let y = 9999999999999999;

// console.log(x);
// console.log(y);


// Example 2:
//JavaScript can only safely represent integers up to 2^53-1 (9007199254740991).
//JavaScript can only safely represent integers down to -2^53-1 (-9007199254740991).

// MAX = 1
// let x = Number.MAX_SAFE_INTEGER;

// MIN = -9007199254740991
// let y = Number.MIN_SAFE_INTEGER;
// console.log(x);
// console.log(y);


// Example 3
// // Max (accurate)
// let x = 9007199254740991;
// // Max + 10 (inaccurate)
// let y = x + 10;
// console.log(x);
// console.log(y);

// Example 4:
// Min (accurate)
// let x = -9007199254740991;

// // Min - 10 (inaccurate)
// let y = x - 10;

// console.log(x);
// console.log(y);


// Example 5:
// // // Using an integer literal with an n suffix:
// let x = 999999999999999n;
// // Using the BigInt() constructor with a string:
// let y = BigInt("999999999999999");
// console.log(x);
// console.log(y);
// console.log(typeof(x));
// console.log(typeof(y));

// Example 6:
// let x = 12345678901234567890n;
// let y = BigInt("12345678901234567890")

// Example 7:
// let x = BigInt(9999999999999999);

// Example 8:
// let x = 9007199254740995n;
// let y = 9007199254740995n;
// let z = x * y;
// console.log(z);

// Example 9: (You cannot mix BigInt and Number directly:)
// let x = 10n;
// let y = 5;
// let z = x + y; // b TypeError


// Example 10 (To fix that, explicitly convert one:)
// let x = 10n;
// let y = 5;
// let z = Number(x) + y;
// console.log(z);
// console.log(typeof(x));



// @JS Number Methods (Basic Methods)
// -------------------------- toString() Method

// Example 1:
// let x = 123;
// let y = x.toString()
// console.log(x.toString());   
// console.log((133).toString());
// console.log((100 + 23).toString());
// console.log(typeof(x));
// console.log(typeof(y));

// Example 2:
// let x = 123;
// let text = x.toString(2);
// console.log(x);
// console.log(text);


// -------------------------- toExponential() Method
// Example 1:
// let x = 9.656;
// console.log(x.toExponential(2));
// console.log(x.toExponential(4));
// console.log(x.toExponential(6));
// console.log(x.toExponential(10));
// console.log(x.toExponential(0));



// -------------------------- toFixed() Method
// Example 1:
// let x = 9.656;
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// console.log(x.toFixed(4));
// console.log(x.toFixed(6));


// -------------------------- toPrecision() Method
// let x = 9.656345678;
// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(4));
// console.log(x.toPrecision(6));


// -------------------------- valueOf() Method
// Example 1
// let x = 123;
// console.log(x.valueOf());
// console.log((123).valueOf());
// console.log((100 + 23).valueOf());

// -------------------------- Converting Variables to Numbers
// -------------------------- Number() Method
// Example 1:
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("  10"));
// console.log(Number("10  "));
// console.log(Number(" 10  "));
// console.log(Number("10.33"));
// console.log(Number("10,33"));
// console.log(Number("10 33"));
// console.log(Number("John"));
// console.log(Number("33", "44"));



// -------------------------- The Number() Method Used on Dates
// // Example 1:
// console.log(Number(new Date("1970-01-01")))

// // Example 2:
// console.log(Number(new Date("1970-01-02")));

// // Example 3:
// console.log(Number(new Date("2017-09-30")));


// -------------------------- parseInt() Method
// Example 1:
// console.log(parseInt("-10"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("10 years"));
// console.log(parseInt("years 10"));


// -------------------------- parseFloat() Method
// console.log(parseFloat("10"));
// console.log(parseFloat("10.33"));
// console.log(parseFloat("10 20 30"));
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));


// @JS Number Methods (Static Methods)
// -------------------------- Number.isInteger()
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));
// console.log(Number.isInteger("Sivaji2345"));


// -------------------------- Number.isFinite() Method
// console.log(Number.isFinite(123));
// console.log(Number.isFinite(1/0));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(-Infinity));




// -------------------------- Number.isNaN()
//console.log(Number.isNaN(123));


// -------------------------- Number.isSafeInteger()
// console.log(Number.isSafeInteger(10));
// console.log(Number.isSafeInteger(12345678901234567890));



// -------------------------- Number.parseFloat()
// console.log(Number.parseFloat("10"));
// console.log(Number.parseFloat("10.33"));
// console.log(Number.parseFloat("10 20 30"));
// console.log(Number.parseFloat("10 years"));
// console.log(Number.parseFloat("years 10"));

// -------------------------- Number.parseInt()
// console.log(Number.parseInt("-10"));
// console.log(Number.parseInt("-10.33"));
// console.log(Number.parseInt("10"));
// console.log(Number.parseInt("10.33"));
// console.log(Number.parseInt("10 20 30"));
// console.log(Number.parseInt("10 years"));
// console.log(Number.parseInt("years 10"));


// -------------------------- Number.isInteger()
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));


// -------------------------- Number.isSafeInteger()
// console.log(Number.isSafeInteger(10));
// console.log(Number.isSafeInteger(12345678901234567890));

// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.


