// 1. Basic example
// switch (expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break 
//     case value2:
//         // Code to execute if expression === value2
//         break 
//     default:
//         // Code to execute if no case matches
// }
let day = 3 

switch (day) {
  case 1:
    console.log("Monday") 
    break 
  case 2:
    console.log("Tuesday") 
    break 
  case 3:
    console.log("Wednesday") 
    break 
  default:
    console.log("Invalid day") 
}

console.log("-------------------------") 

// 2. Grouping Cases
let grade = "A" 

switch (grade) {
    case "A":
    case "B":
        console.log("Excellent") 
        break 
    case "C":
    case "D":
        console.log("Good") 
        break 
    default:
        console.log("Needs Improvement") 
}

console.log("-------------------------")

// 3. Using Expressions
let number = 25;

switch (true) {
    case number < 10:
        console.log("Small number");
        break;
    case number >= 10 && number < 50:
        console.log("Medium number");
        break;
    default:
        console.log("Large number");
}

console.log("-------------------------")    

// 4. Type Checking in switch
// The switch statement uses strict equality (===), so the types must match.
let value = "1";

switch (value) {
    case 1:
        console.log("Number 1");
        break;
    case "1":
        console.log("String 1");
        break;
    default:
        console.log("No match");
}