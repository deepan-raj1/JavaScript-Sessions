//----------- if statement-------------------
// let age = 21;
// if (age >= 18) {
//   console.log("You can vote!");
// }


//--------------if....else statement--------------
// let score = 95;
// if (score >= 50) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }


//---------------else if Ladder----------------------------
// let marks = 85;
// if (marks >= 90) console.log("A Grade");
// else if (marks >= 75) console.log("B Grade");
// else console.log("C Grade");

//---------------switch statement-----------------------------
// let day = "Mon";

// switch (day) {
//   case "Mon":
//     console.log("Start of week");
//     break;
//   case "Fri":
//     console.log("Weekend is near!");
//     break;
//   default:
//     console.log("Midweek day");
// }


//-----------------for loop-----------------------------------
// for (let i = 1; i <= 5; i++) {
//   console.log("Count:", i);
// }


//------------------while loop---------------------------------
// let i = 1;
// while (i <= 5) {
//   console.log("While:", i);
//   i++;
// }


//------------------do while loop---------------------------------
// let i = 1;
// do {
//   console.log("Do-While:", i);
//   i++;
// } while (i <= 5);


//------------------brak & continue ----------------------------
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   if (i === 5) break;
//   console.log(i);
// }



//------------------for....in   vs  for.....of---------------------
// let obj = { name: "John", age: 25 };
// for (let key in obj) console.log(key, obj[key]);

// let arr = [10, 20, 30];
// for (let val of arr) console.log(val);



//-----------------Nested Loops-------------------------
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }


//---------------Labeled Loops----------------------------
// outerLoop:
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) break outerLoop;
//     console.log(i, j);
//   }
// }


//-------------🧩 Live Coding Demos – JavaScript Control Flow-----------

//1️⃣ Voting Eligibility Checker (if / else)
// let age = 17;

// if (age >= 18) {
//   console.log("✅ You are eligible to vote.");
// } else {
//   console.log("❌ You are not eligible to vote.");
// }


//2️⃣ Grade Calculator (switch)
// let marks = 82;
// let grade;

// switch (true) {
//   case (marks >= 90):
//     grade = "A";
//     break;
//   case (marks >= 75):
//     grade = "B";
//     break;
//   case (marks >= 60):
//     grade = "C";
//     break;
//   case (marks >= 40):
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }

// console.log(`Your Grade: ${grade}`);


// 3️⃣ Multiplication Table (for loop)
// let num = 5;

// console.log(`Multiplication Table of ${num}`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} × ${i} = ${num * i}`);
// }

//4️⃣ Sum of Even Numbers (while loop)
// let i = 1;
// let sum = 0;

// while (i <= 20) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
//   i++;
// }

// console.log("Sum of even numbers from 1 to 20 =", sum);



//5️⃣ Pattern Printing (nested loops)
//Example: Right-angled triangle pattern
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }


//----------------------Practice Tasks Solutions--------------------

//1️⃣ Print all numbers 1–50, but skip multiples of 5.
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     continue; // skip multiples of 5
//   }
//   console.log(i);
// }


//2️⃣ Print multiplication table for a given number.
// let num = 7; // change this number as needed

// console.log(`Multiplication Table of ${num}`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} × ${i} = ${num * i}`);
// }


//3️⃣ Find the sum of all odd numbers up to 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) { // odd number check
//     sum += i;
//   }
// }
// console.log("Sum of odd numbers from 1 to 100 =", sum);


//4️⃣ Display characters of a string one by one using for...of
// let str = "JavaScript";

// for (let char of str) {
//   console.log(char);
// }

//5️⃣ Use switch to print month name based on month number.
// let monthNumber = 4; // 1-12
// let monthName;

// switch(monthNumber) {
//   case 1: monthName = "January"; break;
//   case 2: monthName = "February"; break;
//   case 3: monthName = "March"; break;
//   case 4: monthName = "April"; break;
//   case 5: monthName = "May"; break;
//   case 6: monthName = "June"; break;
//   case 7: monthName = "July"; break;
//   case 8: monthName = "August"; break;
//   case 9: monthName = "September"; break;
//   case 10: monthName = "October"; break;
//   case 11: monthName = "November"; break;
//   case 12: monthName = "December"; break;
//   default: monthName = "Invalid month number";
// }

// console.log(`Month: ${monthName}`);


//6️⃣ Advanced: Print a triangle pattern using nested loops.
// let rows = 5; // number of rows

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }



// ----------------------------🎮Number Guessing Game-----------------

// // 1. Generate a random number between 1 and 50
// let targetNumber = Math.floor(Math.random() * 50) + 1;

// // 2. Initialize guess and attempt counter
// let guess;
// let attempts = 0;

// // 3. Game loop
// while (true) {
//   // Ask user for a guess (in Node.js or browser prompt)
//   guess = parseInt(prompt("Guess a number between 1 and 50:"));

//   attempts++;

//   if (guess === targetNumber) {
//     console.log(`🎉 Correct! You guessed the number ${targetNumber} in ${attempts} attempts.`);
//     break; // Exit loop
//   } else if (guess < targetNumber) {
//     console.log("⬆️ Too low! Try a higher number.");
//   } else if (guess > targetNumber) {
//     console.log("⬇️ Too high! Try a lower number.");
//   } else {
//     console.log("⚠️ Invalid input! Please enter a number.");
//   }
// }




// ----------------------------🎮Number Guessing Game-----------------
const readline = require("readline");

// 1️⃣ Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2️⃣ Generate a random number
let targetNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function askGuess() {
  rl.question("Guess a number between 1 and 50: ", (input) => {
    let guess = parseInt(input);
    attempts++;

    if (guess === targetNumber) {
      console.log(`🎉 Correct! You guessed the number ${targetNumber} in ${attempts} attempts.`);
      rl.close(); // End game
    } else if (guess < targetNumber) {
      console.log("⬆️ Too low! Try a higher number.");
      askGuess(); // Ask again
    } else if (guess > targetNumber) {
      console.log("⬇️ Too high! Try a lower number.");
      askGuess(); // Ask again
    } else {
      console.log("⚠️ Invalid input! Please enter a number.");
      askGuess(); // Ask again
    }
  });
}

// Start the game
askGuess();

