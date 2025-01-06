// I. Primitive Data Types: These are immutable and stored by value.
// 1. String
// Represents textual data.
// Enclosed in single quotes ('), double quotes ("), or backticks (`) for template literals.
// Example:
let name = "Khang" // Khang
let hello = 'hello' // hello
let template = `Hello, ${name}!` // Hello, Khang!
console.log(typeof name) // string
console.log(typeof hello) // string
console.log(typeof template) // string

console.log("-----------------------------------")

// 2. Number
// Represents both integers and floating-point numbers.
// Special values: Infinity, -Infinity, and NaN (Not-a-Number).
let num1 = 42  // Integer
let num2 = 3.14  // Float
console.log(num1 / 0)  // Infinity
console.log("abc" * 2)  // NaN

console.log("-----------------------------------")

// 3. BigInt (ES2020)
// Used for integers larger than Number.MAX_SAFE_INTEGER.
// Created by appending n to the end of an integer.
let bigInt = 123456789012345678901234567890n 
console.log(bigInt + 1n)  // 123456789012345678901234567891n

console.log("-----------------------------------")

// 4. Boolean
// Represents logical values: true or false.
let isActive = true 
console.log(isActive)  // true
console.log(5 > 10)  // false

console.log("-----------------------------------")

// 5. Undefined
// A variable that has been declared but not assigned a value.
let x 
console.log(x)  // undefined

console.log("-----------------------------------")

// 5. Null
// Represents the intentional absence of any object value
let object = null
console.log(object)  // null

console.log("-----------------------------------")

// II. Reference Data Types
// These are mutable and stored as references.

// 1. Object
// Used to store collections of data and more complex entities.
const person = {
  name: "Khang",
  age: 21,
  address: "Vietnam"
}
person.name = "abc"
console.log(person.name)  // Khang
console.log(person.age)  // 21
console.log(person.address)  // Vietnam
console.log(person)  // { name: 'Khang', age: 21, address: 'Vietnam' }

console.log("-----------------------------------")

// 2. Array
// A special type of object for storing ordered collections.
const numbers = [1, 2, 3, "four"];
console.log(numbers) // 2
console.log(numbers[3]) // four

console.log("-----------------------------------")

// 3. Function
// A block of code designed to perform a particular task
function sayHello(name) {
  console.log("Hello " + name)
}
sayHello("Khang")  // Hello Khang

console.log("-----------------------------------")

// 4. Date
// Used for working with dates and times
const today = new Date()
console.log(today) // current date and time

console.log("-----------------------------------")

// 5. Map and Set
// Map: A collection of key-value pairs.
// Set: A collection of unique values
const map = new Map()
map.set("name", "Khang")
map.set("age", 21)
console.log(map.get("name")) // value of key "name" in map is "Khang"

const set = new Set([1, 2, 3, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

console.log("-----------------------------------")

// III. Type checking
// 1. Using the typeof operator
// Returns the data type as a string
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof null); // "object" (quirk in JavaScript)

console.log("-----------------------------------")

// 2. Using instanceof
// Checks if an object is an instance of a class.
const arr = [];
console.log(arr instanceof Array); // true
