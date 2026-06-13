// TODO: Create a multiline string using template literals
let message = `
Hello! Happy Tueday. 
Choose yourself today, and always!!`;

console.log(message);

// TODO: Create a function that uses template literals for HTML generation
function card(name, gender) {
  return `
  <h2>Name: ${name}</h2>
  <p>Gender: ${gender}</p>`
}
console.log(card("Nonhlanhla", "female"))

// TODO: Convert regular functions to arrow function

// Regular function
function add(a, b) {
  return a + b;
}
console.log("Regular function (example):", add(5, 3));

// Arrow function:
const sum = (a, b) => a + b;

console.log("Arrow function (example):", sum(5, 3));

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 33, 45, 6, 44];

// Gets even numbers
const evenNum = numbers.filter(num => num % 2 === 0);

console.log(evenNum);
