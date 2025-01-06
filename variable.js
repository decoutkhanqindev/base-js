// 1. var
// Scope: Function-scoped.
// Hoisting: Variables declared with var are hoisted to the top of their scope and initialized as undefined.
// Re-declaration: Can be re-declared within the same scope.
function testVar() {
  console.log(a) // undefined (hoisted)
  var a = 10
  console.log(a) // 10
}
testVar()

if (true) {
  var x = 5 // x is available outside the block
}
console.log(x) // 5

console.log("-----------------------------------")

// 2. let
// Scope: Block-scoped (defined by {} braces).
// Hoisting: Variables declared with let are hoisted but not initialized. Accessing them before
// declaration throws a ReferenceError.
// Re-declaration: Cannot be re-declared in the same scope.
function testLet() {
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  console.log(b); // 20
}
testLet();

if (true) {
  let y = 10; // y is block-scoped
  console.log(y); // 10
}
// console.log(y); // ReferenceError: y is not defined

console.log("-----------------------------------")

// 3. const
// Scope: Block-scoped.
// Hoisting: Like let, variables declared with const are hoisted but not initialized.
// Re-declaration and Re-assignment:
// - Cannot be re-declared in the same scope.
// - Cannot be re-assigned after initialization.
// Immutability: The binding is immutable, not the value. For objects and arrays, you can still modify their contents.
const z = 30;
// z = 40; // TypeError: Assignment to constant variable

const obj = { name: "John" };
obj.name = "Doe"; // Allowed: modifying the property
console.log(obj); // { name: "Doe" }

const arr = [1, 2, 3];
arr.push(4); // Allowed: modifying the array
console.log(arr); // [1, 2, 3, 4]