// 1. Basic example
// while (condition) {
    // Code to execute as long as the condition is true
// }
let i = 0;

while (i < 5) {
    console.log("Iteration:", i);
    i++; // Increment i to avoid an infinite loop
}

console.log("--------------------");

// 2. Using break
// The break statement can terminate the loop before the condition becomes false.
let  j = 0;

while (true) {
    console.log("Iteration:",  j);
    if ( j == 2) {
        break; // Exit the loop when i equals 2
    }
     j++;
}

console.log("--------------------");

// 3. Using continue
// The continue statement skips the rest of the loop for the current iteration and proceeds to the next iteration.
let x = 0;

while (x < 5) {
    x++;
    if (x % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(x); // Logs only odd numbers
}

console.log("--------------------");

// 4. Infinite Loops
// If the condition never becomes false, the loop will run indefinitely.
// let y = 0;

// while (y >= 0) { // This condition is always true
//   console.log(y);
//   y++; // Be careful to use a condition that eventually stops
//   if (y == 10) break
// }

console.log("--------------------");

// 5. Looping Through Arrays
// Although for or for...of loops are more common for arrays, you can use a while loop for custom iteration.
let fruits = ["Apple", "Banana", "Cherry"];
let index = 0;

while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

console.log("--------------------");

// 6. Nested while Loops
// You can use a while loop inside another while loop for multi-dimensional data.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let row = 0;

while (row < matrix.length) {
    let column = 0;
    while (column < matrix[row].length) {
        console.log(matrix[row][column]);
        column++;
    }
    row++;
}

console.log("--------------------");

// 7. Do...While Loop
// A do-while loop ensures that the block of code runs at least once, even if the condition is false.
let count = 0;

do {
    console.log("Count:", count);
    count++;
} while (count < 3);


// 8. When to Use a while Loop
// When the number of iterations is unknown and depends on a condition.
// When waiting for a specific user input or external event.
// For scenarios where the condition needs to be checked before executing the loop.