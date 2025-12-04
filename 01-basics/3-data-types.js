
// Data Types 8

//==============================================================//
//1 Primitive immutable Data Types (7)

//----------------------------//
// 1.1 String

let name = "Saifullah";
let message = 'Hello World';
let info = `My name is ${name}`; //interpolation

//----------------------------//
//1.2 Number

let age = 23;
console.log(`I am ${age} years old.`);

let price = 99.99;
let negative = -10;

// Special numbers:

console.log(10 / 0);       // Infinity
console.log(-10 / 0);      // -Infinity
console.log(0 / 0);        // NaN (Not a Number)

//----------------------------//
//1.3 Boolean

let isLoggedIn = true;
let isAdmin = false;

// Common use in conditions:

if (isLoggedIn) {
  console.log("Welcome back!");
}

//----------------------------//
//1.4 Null

//absence of value


let data = null;  // we know it’s empty on purpose

typeof null; // "object"  (this is a historical bug in JS)


//----------------------------//
//1.5 Undefined

// Means: “Value not assigned yet”.
let x;
console.log(x);       // undefined


//----------------------------//
//1.6 BigInt

let big = 123456789012345678901234567890n; // note the `n`

// You cannot mix BigInt and Number directly:
10n + 20n;   // OK
10n + 20;    // ❌ TypeError


//----------------------------//
//1.8 Symbol
//Used to create unique identifiers, often in advanced JS / frameworks.

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (always unique)


//==============================================================//
//2 Non-Primitive mutable Data Types (1)

// Everything “complex” in JS is an object.

//Object 
let user = {
  name: "Saifullah",
  age: 23,
  isAdmin: true
};
 //array
let numbers = [1, 2, 3]; // array (also object)

//Date
let today = new Date();  // Date object




//==============================================================//


console.log(typeof "Hi");         // "string"

console.log(typeof 123);          // "number"

console.log(typeof true);         // "boolean"

console.log(typeof undefined);    // "undefined"

console.log(typeof null);         // "object"  ❗ (quirk)

console.log(typeof {});           // "object" 

console.log(typeof []);           // "object" (array is also object)

console.log(typeof Symbol());     // "symbol"

console.log(typeof 123n);         // "bigint"

