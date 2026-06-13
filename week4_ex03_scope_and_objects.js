// TODO: Create a global variable called globalCount
let globalCount = 12;

// TODO: Create a function that demonstrates local scope
function localScope () {
  let localCount = 6;

  console.log("Local Count:", localCount)
  console.log("Global Count:", globalCount)
}
localScope();

// TODO: Create a function that tries to modify both variables
function modifyVar() {
  let localCount = 2;

  globalCount++;

  localCount++;

  console.log("Modified local count:", localCount)
  console.log("Modified global count:", globalCount)
}
modifyVar();

// TODO: Create a Student constructor function
function Student(fName, lName, age) {
  this.fName = fName;
  this.lName =lName;
  this.age = age ;

  this.greeting = function() {
    console.log("Hello, my name is " + this.fName + " " + this.lName);
  }
}

// TODO: Create several student instances
let student1 = new Student("Nonhlanhla", "Kunene", 21);
let student2 = new Student("Onela", "Jones", 19);
let student3 = new Student("Sam", "Smith", 43);

student1.greeting();
student2.greeting();
student3.greeting();

// TODO: Create an object literal with nested properties
let person = {
    firstName: "Nonhlanhla",
    lastName: "Onela",

    address: {
        street: "Main Road",
        city: "Cape Town",
        country: "South Africa"
    },

    contact: {
        email: "soso@email.com",
        phone: "0123456789"
    }
};

console.log(person);
console.log(person.address.city);
console.log(person.contact.email);
