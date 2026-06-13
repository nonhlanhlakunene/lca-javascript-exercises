// TODO: Create a function that validates user input
// Welcome example
function validatesInput(name) {
  try {
    if (typeof name !== "string") {
      throw new TypeError("Input a string!");
    }

    if (name.trim() === "") {
      throw new Error("Input can not be empty!");
    }

    console.log(`Hello ${name}!`)

  } catch (error) {
    console.error(error.message);

  } 

}

validatesInput(12)
validatesInput("Nonhlanha")
validatesInput("")
validatesInput(" ")

// TODO: Create a function that demonstrates multiple error types
function errorTypes(input) {
  try {
    if (typeof input !== "string") {
      throw new TypeError("Expected a string, but got " + typeof input);
    }

    if (input.length < 3) {
      throw new RangeError("Input must be at least 3 characters long");
    }

    if (input.length > 20) {
      throw new RangeError("Input must be less than 20 characters");
    }

    if (input.includes(" ")) {
      throw new Error("Input cannot contain spaces");
    }

    console.log(`✅ Valid input: "${input}"`);

  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  } finally {
    console.log("Validation complete.\n");
  }
}


errorTypes(123);          
errorTypes("Hi");         
errorTypes("This is a very very long string");
errorTypes("Hello World"); 
errorTypes("Thabo");    

// TODO: Create a collection of helper functions for string manipulation
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
 
 
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}
 

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_ ](\w)/g, (_, c) => c.toUpperCase());
}
 

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(capitalize("hello world"));       
console.log(truncate("Hello world", 5));        
console.log(toCamelCase("my-variable_name"));   
console.log(reverseString("hello"));

// TODO: Create helper functions for array operations

function demonstrateErrors() {
  const results = [];

  try { null.toUpperCase(); }
  catch(e) { results.push({ type: e.constructor.name, message: e.message }); }

  try { new Array(-1); }
  catch(e) { results.push({ type: e.constructor.name, message: e.message }); }

  try { decodeURIComponent("%"); }
  catch(e) { results.push({ type: e.constructor.name, message: e.message }); }

  try { throw new ValidationError("Invalid email", "email"); }
  catch(e) { results.push({ type: e.constructor.name, message: e.message }); }

  return results;
}
