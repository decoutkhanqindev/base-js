// 1. Basic example
// for (initialization; condition; increment/decrement) {
//     // Code to execute in each iteration
// }
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i)
}

console.log("====================================")

// 2. Looping Over an Array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("====================================")

// 3. Using break and continue
// break: Exits the loop immediately.
// continue: Skips the current iteration and proceeds to the next.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // Logs only odd numbers below 5
}

// 4. Nested for Loops
// The inner loop runs to completion for each iteration of the outer loop.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

console.log("====================================")

// 5. Using for...in
// The for...in loop iterates over the keys of an object or the indices of an array.
let person = {
  name: "Khang",
  age: 21,
  address: "Vietnam"
}

console.log("Person:", person)
for (let key in person) {
  console.log(key + ": " + person[key]);
}

console.log()

console.log("Fruits:", fruits)
for (let index in fruits) {
  console.log(index + ": " + fruits[index]);
}

console.log("====================================")

// 6. Using for...of
// The for...of loop iterates over the values of an iterable (like arrays, strings, or sets).
console.log("Fruits:", fruits)
for (let fruit of fruits) {
  console.log(fruit);
}

console.log()

let word = "HELLO";
console.log("Word:", word)
for (let letter of word) {
    console.log(letter);
}

// 7. When to Use for Loops
// Use for loops for precise control over iterations.
// Use for...in for objects.
// Use for...of for iterable values (arrays, strings, etc.).