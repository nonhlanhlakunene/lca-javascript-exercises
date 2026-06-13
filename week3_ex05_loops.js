// TODO: Create an array called numbers with values 1 through 5
const numbers = [1, 2, 3, 4 ,5];

// TODO: Write a for loop that prints each number in the array
console.log("A for loop that prints each number in the array");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); 
}

// TODO: Write a while loop that counts down from 5 to 1
console.log("A while loop that counts down from 5 to 1")
let count = 5;
while (count>=1) {
  console.log(count);
  count-=1
  
}
// TODO: Create a loop that prints only even numbers from the numbers array
console.log("A loop that only prints even numbers from the numbers array")
for (let i = 1; i < numbers.length; i+=2 ) {
  console.log(numbers[i]);
  
}

// TODO: Create a loop that calculates the sum of all numbers in the array
console.log("A loop that calculates the sum of all numbers in the array")
let n=0 ;
for (const ans of numbers ) {
  n+=ans;
}
console.log("The sum is:",n);
