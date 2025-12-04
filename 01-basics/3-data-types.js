// ==============================================================
// 1) PRIMITIVE DATA TYPES (7) — Immutable
// ==============================================================


// --------------------------------------------------------------
// 1.1 String
// --------------------------------------------------------------

let name = "Saifullah";
let message = 'Hello World';
let info = `My name is ${name}`;   // Template literal (string interpolation)


// --------------------------------------------------------------
// 1.2 Number
// --------------------------------------------------------------

let age = 23;
console.log(`I am ${age} years old.`);

let price = 99.99;
let negative = -10;

// Special numeric values:
console.log(10 / 0);        // Infinity
console.log(-10 / 0);       // -Infinity
console.log(0 / 0);         // NaN (Not a Number)


// --------------------------------------------------------------
// 1.3 Boolean
// --------------------------------------------------------------

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Welcome back!");
}


// --------------------------------------------------------------
// 1.4 Null  → intentional absence of value
// --------------------------------------------------------------

let data = null;

console.log(typeof null);   // "object" ❗ (JavaScript historical bug)


// --------------------------------------------------------------
// 1.5 Undefined  → declared but not assigned
// --------------------------------------------------------------

let x;
console.log(x);             // undefined


// --------------------------------------------------------------
// 1.6 BigInt (for very large integers)
// --------------------------------------------------------------

let big = 123456789012345678901234567890n; // "n" makes it BigInt

10n + 20n;  // ✔ allowed
// 10n + 20; // ❌ TypeError → cannot mix BigInt and Number


// --------------------------------------------------------------
// 1.7 Symbol  → unique identifiers (used in advanced JS)
// --------------------------------------------------------------

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);  // false → each Symbol is always unique



// ==============================================================
// 2) NON-PRIMITIVE DATA TYPE (1) — Mutable
// ==============================================================

// Everything complex in JS is an object.


// --------------------------------------------------------------
// Object
// --------------------------------------------------------------

let user = {
  name: "Saifullah",
  age: 23,
  isAdmin: true
};


// --------------------------------------------------------------
// Array  (arrays are objects)
// --------------------------------------------------------------

let numbers = [1, 2, 3];


// --------------------------------------------------------------
// Date  (built-in object)
// --------------------------------------------------------------

let today = new Date();



// ==============================================================
// typeof Operator Summary
// ==============================================================

console.log(typeof "Hi");         // "string"
console.log(typeof 123);          // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"  ❗ bug
console.log(typeof {});           // "object"
console.log(typeof []);           // "object" (array is also an object)
console.log(typeof Symbol());     // "symbol"
console.log(typeof 123n);         // "bigint"
