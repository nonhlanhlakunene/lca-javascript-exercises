// TODO: Create a function called sum. The function will take in a parameter andcalculate all the numbers from 0 -> the parameter. You must check if the parameterisan integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowedtouse methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Makesureto test your code effectively.

function sum(x) {
  if (typeof x !== "number" || x<0) {
    return "The value passed is not a number" ;  
  }
  let m = 0;
  for (let n = 0; n <= x; n++) {
    m+=n

  }
  return m
  
}
let theSum = sum(5);
console.log("The sum is:", theSum);

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(num) {
   if (num<0) {
    return "There's no factorial for negative numbers!"
   }
    
    let count=1;
    for (let i= 1;   i<=num ; i++) {
        count=count*i
    }
     return count
   }

let ans = factorial(4);
console.log("Factorial:",ans);

// TODO: Create a function called funkyMath . If this function is calledwith2arguments the function will subtract the first from the second. If the functionis calledwith 3 arguments it will add all 3 numbers together. If the function is calledwith4arguments it will add together argument 1 and 2 , 3 and 4 separately. Thendividethem accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25

function funkyMath() {
  if (arguments.length === 2) {
    return arguments[1] - arguments[0]
  }

  if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2]  
  }

  if (arguments.length === 4) {
    let firstArgs = arguments[0] + arguments[1]
    let secondArgs = arguments[2] + arguments[3]

    return firstArgs / secondArgs
  }
  return "Invalid number of arguments passed"
}

console.log(funkyMath(8, 2, 3, 5))

// TODO: Create a loop that will remove all the odd numbers fromthe array andaddthem to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

oddNumbers.sort((a, b) => a - b);

console.log("Odd numbers:" ,oddNumbers);


// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
  firstName: "Anela",
  lastName: "Yapi",
  age: 24,
  favColor: "yellow",
  dreamCar: "audi"
}
console.log(me)


// TODO: Create and add a new property and value of ‘favourite food’ to the object.
me.favFood = "Vetkoeks";

// TODO: . Now delete the age property from the object.

delete me.age;
console.log(me)
