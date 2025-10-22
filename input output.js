// 1️⃣ In Browser (Front-End JavaScript)

//----------------- prompt()----------------------------
// let name = prompt("Enter your name:");
// console.log("Hello, " + name);

//------------------HTML Input + JS --------------------
{/* <input type="text" id="nameInput" placeholder="Enter name">
<button onclick="greet()">Submit</button>

<script>
function greet() {
  let name = document.getElementById("nameInput").value;
  alert("Hello " + name);
}
</script>
</input> */}

//--------------------console.log()-----------------------------------
//console.log("Hellow World");

//---------------------alert()--------------------------------------
// alert("Hello World");

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Greet Example</title>
// </head>
// <body>
//   <script>

//       alert("Hello World");
    
//   </script>
// </body>
// </html>


//---------------------document.write()-------------------------------
//document.write("Hello World");

//<!DOCTYPE html>
// {/* <html>
// <head>
//   <title>Greet Example</title>
// </head>
// <body>
//   <script>

//       document.write("Hello World");
    
//   </script>
// </body>
// </html> */}


//---------------------Updating HTML content------------------------------
//document.getElementById("output").innerText = "Hello World";


//-------------------------browser version input and output examples-------------

//----------------- using console.log()--------------------------
// console.log("Hello, World!");
// console.log("This appears in the console!");


//----------------- Using alert() ------------------------------
// alert("Welcome to JavaScript!");


//-------------- Using document.write()---------------------------
// document.write("Hello from JavaScript!");
// document.write("<br>Welcome to the page.");

//---------------- Using innerHTML -----------------------
{/* <p id="output"></p>

<script>
document.getElementById("output").innerHTML = "Displayed using innerHTML!";
</script> */}


//----------------- Using prompt() ---------------------------
// let name = prompt("Enter your name:");
// document.write("Hello, " + name + "!");

//------------- Using HTML Input Field ------------------------
{/* <input type="text" id="userInput" placeholder="Enter something">
<button onclick="showOutput()">Submit</button>
<p id="result"></p>

<script>
function showOutput() {
  let input = document.getElementById("userInput").value;
  document.getElementById("result").innerHTML = "You entered: " + input;
}
</script>
//</input> */}

//------------------ Combined Example: Simple Calculator --------------------
// <!DOCTYPE html>
// <html>
// <body>
// <h2>Simple Calculator</h2>

// <script>
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let sum = num1 + num2;

// document.write("The sum is: " + sum);
// </script>

// </body>
// </html>




//2️⃣ In Node.js (Back End Js)
//----------------------------------------readline module----------------------------------------
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your name: ", (name) => {
//   console.log("Hello " + name);
//   rl.close();
// });


//---------------------------process.stdin (low-level input)---------------------
// process.stdin.on("data", (data) => {
//   console.log("You typed: " + data.toString().trim());
// });


//----------------------------console.log()---------------------------------------------
// console.log("Hello World");


//-------------------process.stdout.write()---------------------
//process.stdout.write("Hello\tWorld\n");


// // --------------------------------------input_output_node.js---------------------------------
// const readline = require("readline");

// // Create interface for input/output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask user for input
// rl.question("Enter your name: ", (name) => {
//   // Output: print to terminal
//   console.log("Hello, " + name + "!");

//   // Another way to output
//   process.stdout.write("Welcome, " + name + "!\n");

//   // Close the input interface
//   rl.close();
// });




//---------------------------------------number_guessing_game.js--------------------------------------------
// const readline = require("readline");

// // 1️⃣ Create readline interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // 2️⃣ Generate a random number between 1 and 50
// const targetNumber = Math.floor(Math.random() * 50) + 1;
// let attempts = 0;

// // 3️⃣ Function to ask user for a guess
// function askGuess() {
//   rl.question("Guess a number between 1 and 50: ", (input) => {
//     const guess = parseInt(input);
//     attempts++;

//     if (isNaN(guess)) {
//       console.log("⚠️ Invalid input! Please enter a number.");
//       askGuess(); // Ask again
//     } else if (guess < targetNumber) {
//       console.log("⬆️ Too low! Try a higher number.");
//       askGuess(); // Ask again
//     } else if (guess > targetNumber) {
//       console.log("⬇️ Too high! Try a lower number.");
//       askGuess(); // Ask again
//     } else {
//       console.log(`🎉 Correct! You guessed the number ${targetNumber} in ${attempts} attempts.`);
//       rl.close(); // End game
//     }
//   });
// }

// // 4️⃣ Start the game
// console.log("Welcome to the Number Guessing Game!");
// askGuess();


// -----------------------node.js version input and output examples---------------------

//--------------------console.log()-----------------
// console.log("Hello World!");
// console.log("This is Node.js output.");


//--------------------process.stdout.write()---------
// process.stdout.write("Hello ");
// process.stdout.write("World!\n");


//--------------------Simple Input and Output-----------
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your name: ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });


//------------------------ Taking Two Numbers and Adding Them --------------------------------
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter first number: ", (num1) => {
//   rl.question("Enter second number: ", (num2) => {
//     const sum = parseFloat(num1) + parseFloat(num2);
//     console.log(`The sum is: ${sum}`);
//     rl.close();
//   });
// });


// ---------------------------Continuous Input Example (Loop-like behavior), Ask until correct answer -----------------
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const secret = "node";

// function askPassword() {
//   rl.question("Enter the secret word: ", (word) => {
//     if (word === secret) {
//       console.log("✅ Correct! Access granted.");
//       rl.close();
//     } else {
//       console.log("❌ Wrong! Try again.");
//       //askPassword(); // ask again
//       rl.close();
//     }
//   });
// }

// askPassword();



// ---------------------- Using process.stdin (Low-Level Input) ---------------------------------------
// process.stdout.write("Type something: ");

// process.stdin.on("data", (data) => {
//   const input = data.toString().trim();
//   console.log(`You typed: ${input}`);
//   process.exit(); // End program
// });



