//A function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number.

function multiply(num1, num2, num3) {
  if (num1 != num2 && num2 != num3 && num1 != num3) {
    return num1 * num2 * num3 
  } else {
    return "Use values that are different from each other."  // 'return' sends a value back out of the function 
  }
}
let ans = multiply(2, 9, 3);
console.log("The answer is:", ans);

//A function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. *

function convertToSeconds(min) {
  return min*60

}
let sec = convertToSeconds(30);
console.log("Seconds:", sec.toFixed(2)); // toFixed lets you control how many decimal places you want


//A function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. 

function fahrenheitToCelsius(temperature) {
  return (temperature - 32) * 5/9
}

let temp = fahrenheitToCelsius(57.2);
console.log("The temperature in Celsius is:", temp.toFixed(2)); 

//A function that takes a string as a parameter and returns thereverseof the string.

function reverseOf(word) {
  return word.split("").reverse().join("");

}
let str = reverseOf("Goodbye");
console.log("The reverse word is:", str)

// A function that takes in a string and returns the number of Vowelsinthe sentence.

function countVowels(vowels) {
  count = 0;
  for (let i= 0; i< vowels.length; i++ ) {
    if (vowels[i] == 'a' || vowels[i] == 'e' || vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u') { 
      count= count+1
    } 
  }
  return count
}
let answer = countVowels('colour');
console.log("Number of vowels is:",answer);

//A "isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers.

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number%2 != 0) {
      return true;
    }
  }
  return false;
}

let num = isPrime(9);
console.log(num); 

// num = isPrime(12);
// console.log(num); returns false

// num = isPrime(5);
// console.log(num); returns true

// num = isPrime(20);
// console.log(num); false
