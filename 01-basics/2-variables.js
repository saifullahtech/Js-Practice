// -----------------------------------------------------
// JavaScript variables are containers for storing data.
// -----------------------------------------------------

// Variable Declaration Methods (4 Ways)


// -----------------------------------------------------
// 1) Using var  (Older JavaScript)  ❌ Not Recommended
// -----------------------------------------------------

var x = 5;
var y = 6;
var z = x + y;


// -----------------------------------------------------
// 2) Automatically (Without var/let/const) ❌ Not Recommended
// Creates GLOBAL variables → Dangerous
// -----------------------------------------------------

x = 5;
y = 6;
z = x + y;


// -----------------------------------------------------
// Modern JavaScript — Best Practices
// -----------------------------------------------------


// -----------------------------------------------------
// 3) Using let (Recommended when value needs to change)
// -----------------------------------------------------

let a1 = 5;
let b1 = 6;
let c1 = a1 + b1;


// -----------------------------------------------------
// 4) Using const (Recommended for fixed values)
// -----------------------------------------------------

const p = 5;
const q = 6;
const r = p + q;


// -----------------------------------------------------
// Redeclaration Rules
// -----------------------------------------------------

let a = 2;
// let a = 3;  // ❌ Not allowed → cannot redeclare let in same scope


// -----------------------------------------------------
// Variable Declaration (without values)
// -----------------------------------------------------

let length;
let width;
let area;

// At this point: length, width, area → undefined


// -----------------------------------------------------
// Assigning Values (using "=")
// -----------------------------------------------------

length = 5;
width = 6;
area = length * width;


// -----------------------------------------------------
// Valid JavaScript Variable Names
// -----------------------------------------------------

let name;
let userName;
let _count;             // underscore allowed
let $salary;            // dollar allowed
let first_name;         // snake_case
let camelCaseVariable;  // camelCase (recommended)
let PascalCaseVariable; // PascalCase (used for Classes)
let snake_case_variable;
let num1;
let value_2;


// -----------------------------------------------------
// ❌ Invalid Variable Names (Do NOT use)
// -----------------------------------------------------

// let 1user;          // Cannot start with a number
// let 99value;

// let my variable;    // Cannot contain spaces

// let user-name;      // Cannot use special characters except _ and $
// let total%value;
// let @amount;

// let let;            // Cannot use JavaScript keywords
// let class;
// let return;

// let *value;         // Cannot start with operators or punctuation
// let .data;


/// ------------------------------
// VAR — FUNCTION SCOPED
// ------------------------------

// Global scope
var g = 10;
console.log(g); // ✔ allowed → 10

// var inside block
if (true) {
  var gp = 20; // NOT block scoped → moves to nearest function/global scope
}

console.log(gp); // ✔ allowed → 20


// var inside function
function hello() {
  var name1 = "ali"; // function scope ONLY
  console.log(name1); // ✔ allowed → "ali"
}

hello();

console.log(name1); // ❌ NOT allowed → ReferenceError


// ------------------------------
// Re-declaration (var allows it)
// ------------------------------

var g = 20; // ✔ allowed (var can be redeclared in same scope)
g = 30;     // ✔ allowed (reassignment)

console.log(g); // → 30



// ------------------------------
// LET — BLOCK SCOPED
// ------------------------------

// Global (or top-level) scope
let x = 1;
console.log(x); // ✔ allowed → 1

// let x = 2;  // ❌ NOT allowed → cannot redeclare in same scope

x = 2; // ✔ allowed → reassignment is fine
console.log(x); // → 2


// ------------------------------
// Block Scope
// ------------------------------

{
    // console.log(y); // ❌ NOT allowed (y not declared yet)

    let y = 5;        // block-scoped variable
    console.log(y);   // ✔ allowed → 5

    let z = 10;
    console.log(z);   // ✔ allowed → 10

    // let z = 20;    // ❌ NOT allowed → redeclaration in same block

    z = 15;           // ✔ allowed → reassignment
    console.log(z);   // → 15


    // Shadowing example
    let x = 100;      // ✔ allowed → new x only inside this block
    console.log(x);   // → 100
}

console.log(x); // ✔ allowed → outer x → 2

console.log(y); // ❌ NOT allowed → y was block scoped
console.log(z); // ❌ NOT allowed → z was block scoped



// ------------------------------
// CONST — BLOCK SCOPED
// ------------------------------

// Must be initialized at the time of declaration
const f = 10;
console.log(f); // ✔ allowed → 10

// const a = 20;   // ❌ NOT allowed → cannot redeclare in same scope
// a = 30;         // ❌ NOT allowed → cannot reassign const



// ------------------------------
// Block Scope
// ------------------------------

{
    const g = 5;
    console.log(g); // ✔ allowed → 5

    // const b = 6;  // ❌ NOT allowed → redeclaration in same block
    // b = 7;        // ❌ NOT allowed → reassignment not allowed

    const h = 100;
    console.log(h); // ✔ allowed → 100
}

console.log(f); // ✔ allowed → 10
console.log(g); // ❌ NOT allowed → block scoped
console.log(h); // ❌ NOT allowed → block scoped



// ------------------------------
// CONST with objects (important)
// ------------------------------

const person = { name: "Ali", age: 20 };

// person = { name: "Adeel" }; // ❌ NOT allowed → cannot reassign const

person.age = 21; // ✔ allowed → modifying properties is allowed
person.city = "Lahore"; // ✔ allowed

console.log(person); // → { name: "Ali", age: 21, city: "Lahore" }




// -----------------------------------------------------
// HOISTING BASICS
// -----------------------------------------------------
// Hoisting means: Declarations are moved to the top of their scope
// BUT their values are NOT hoisted.


// -----------------------------------------------------
// 1) var Hoisting
// -----------------------------------------------------

console.log(v);   // ✔ allowed → prints: undefined
var v = 10;
console.log(v);   // ✔ allowed → 10

// Behind the scenes:
// var a;          (hoisted)
// console.log(a); (undefined)
// a = 10;


// -----------------------------------------------------
// 2) let Hoisting (TDZ - Temporal Dead Zone)
// -----------------------------------------------------

// console.log(b); // ❌ NOT allowed → ReferenceError (TDZ)
let b = 20;
console.log(b);   // ✔ allowed → 20


// -----------------------------------------------------
// 3) const Hoisting (TDZ)
// -----------------------------------------------------

// console.log(c); // ❌ NOT allowed → ReferenceError (TDZ)
const c = 30;
console.log(c);   // ✔ allowed → 30


// -----------------------------------------------------
// 4) Function Hoisting
// -----------------------------------------------------

sayHello(); // ✔ allowed → function is fully hoisted

function sayHello() {
  console.log("Hello!");
}


// -----------------------------------------------------
// 5) Function Expressions (NOT hoisted like functions)
// -----------------------------------------------------

// greet(); // ❌ NOT allowed → TypeError or ReferenceError
var greet = function () {
  console.log("Hi");
};

greet(); // ✔ allowed → "Hi"


// -----------------------------------------------------
// 6) let + const inside block (hoisting + TDZ)
// -----------------------------------------------------

{
    // console.log(x); // ❌ ReferenceError (TDZ)
    let x = 100;
    console.log(x); // ✔ 100

    // console.log(y); // ❌ ReferenceError (TDZ)
    const y = 200;
    console.log(y); // ✔ 200
}
