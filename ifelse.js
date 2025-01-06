// 1. Basic Example
// if (condition) {
//     // code block
// } else {
//     // code block
// }
let age = 18 
console.log('Age is ' + age) 
if (age > 18) {
  console.log('You are an adult') 
} else {
  console.log('You are a minor') 
}

console.log("-------------------------") 

// 2. if...else if...else Ladder
let marks = 85 
console.log('Mark is ' + marks) 
if (marks >= 90) {
    console.log("Grade: A") 
} else if (marks >= 75) {
    console.log("Grade: B") 
} else if (marks >= 50) {
    console.log("Grade: C") 
} else {
    console.log("Grade: F") 
}

console.log("-------------------------")

// 3. Nested if...else
let num = 5 
console.log('Number is ' + num)
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number") 
    } else {
        console.log("Positive odd number") 
    }
} else {
    console.log("Not a positive number") 
}

console.log("-------------------------")

// 4. Ternary Operator (Shorthand for if...else)
// condition ? expressionIfTrue : expressionIfFalse 
let isActive = true
let message = isActive == true ? "Active" : "Inactive"
console.log(message)

console.log("-------------------------")  

// 5. Logical Operators in Conditions
let a = 10 
console.log('Number is ' + a)
if (a > 0 && a < 20) {
  console.log("Number is between 1 and 19") 
}

if (a < 0 || a > 20) {
  console.log("Number is out of range") 
}

if (!(a === 15)) {
  console.log("Number is not 15") 
}
