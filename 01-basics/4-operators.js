//  JavaScript Operators

// ======================================================================
// 1) ARITHMETIC OPERATORS
// ======================================================================

let a = 10;
let b = 3;

console.log(a + b);  // Addition → 13
console.log(a - b);  // Subtraction → 7
console.log(a * b);  // Multiplication → 30
console.log(a / b);  // Division → 3.333
console.log(a % b);  // Modulus (remainder) → 1
console.log(a ** 2); // Exponentiation → 100

let c = 5;
console.log(c++); // Post-increment → prints 5, then becomes 6
console.log(++c); // Pre-increment → becomes 7, prints 7
console.log(c--); // Post-decrement → prints 7, then becomes 6
console.log(--c); // Pre-decrement → becomes 5, prints 5



// ======================================================================
// 2) ASSIGNMENT OPERATORS
// ======================================================================

let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 5;   // x = x % 5  → 1
x **= 3;  // x = x ** 3 → 1

console.log(x);



// ======================================================================
// 3) COMPARISON OPERATORS
// ======================================================================

console.log(5 == "5");   // true  (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != 3);     // true
console.log(5 !== "5");  // true

console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false



// ======================================================================
// 4) LOGICAL OPERATORS
// ======================================================================

let loggedIn = true;
let admin = false;

console.log(loggedIn && admin); // AND → false
console.log(loggedIn || admin); // OR → true
console.log(!loggedIn);         // NOT → false



// ======================================================================
// 5) BITWISE OPERATORS
// ======================================================================
// (Work on 32-bit integers)

console.log(5 & 1);  // AND → 1
console.log(5 | 1);  // OR  → 5
console.log(5 ^ 1);  // XOR → 4
console.log(~5);     // NOT → -6
console.log(5 << 1); // Left shift → 10
console.log(5 >> 1); // Right shift → 2
console.log(5 >>> 1);// Unsigned right shift → 2



// ======================================================================
// 6) STRING OPERATORS
// ======================================================================

let first = "Hello";
let second = "World";

console.log(first + " " + second); // Concatenation
console.log("Age: " + 25);         // Number → string

let str = "Hello";
str += " JS!";                     // += works for strings too
console.log(str);



// ======================================================================
// 7) CONDITIONAL (TERNARY) OPERATOR
// ======================================================================

let marks = 75;
let result = (marks >= 50) ? "Pass" : "Fail";

console.log(result); // Pass



// ======================================================================
// 8) TYPE OPERATORS
// ======================================================================

// typeof → returns type as string
console.log(typeof 123);        // "number"
console.log(typeof "Hi");       // "string"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (quirk)
console.log(typeof Symbol());   // "symbol"
console.log(typeof 10n);        // "bigint"

// instanceof → checks if object belongs to a class
let arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true



// ======================================================================
// 9) SPREAD & REST OPERATORS (...)
// ======================================================================

// Spread → expands values
let nums = [1, 2, 3];
console.log(...nums); // 1 2 3

let copy = [...nums];
console.log(copy);

// Rest → gathers values into array
function add(...values) {
  return values.reduce((sum, v) => sum + v, 0);
}

console.log(add(1, 2, 3, 4)); // 10



// ======================================================================
// 10) UNARY OPERATORS
// ======================================================================

let n = "10";

console.log(+n);      // Unary + → converts to number → 10
console.log(-n);      // Unary - → converts & negates → -10

console.log(typeof + "55"); // "number"



// ======================================================================
// 11) COMMA OPERATOR
// ======================================================================
// Evaluates multiple expressions, returns the last one

let k = (1, 2, 3); // 3
console.log(k);

let t = (console.log("A"), console.log("B"), 50);
console.log(t); // prints A, B then 50


