// solution:

// Exercise 1: 

function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [index0, , index2] = arr;

  return {
    name,
    age,
    index0,
    index2
  };
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
console.log('Exercise 1: ', destructureExample(obj, arr));


// Exercise 2:
function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log('Exercise 2: ', sumNumbers(1, 2, 3, 4, 5));

// Exercise 3:

function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

console.log('Exercise 3: ', createGreeting('Alice'));

// Exercise 4:

function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log('Exercise 4: ', isEven(7));

// Exercise 5:

const multiply = (a, b) => a * b;


// Exercise 6:

function getLargestNumber(a, b) {
  return a || b;
}

console.log('Exercise 6: ', getLargestNumber(10, 5));

// Exercise 7:

function getAddressCity(address) {
  return address?.city ?? "Unknown";
}
const address = { street: '123 Main St', country: 'USA' };
console.log('Exercise 7: ', getAddressCity(address));

// Exercise 8:

function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

console.log('Exercise 8: ', doubleNumbers([1, 2, 3, 4, 5]));

// Exercise 9:

function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

console.log('Exercise 9: ', filterEvenNumbers([1, 2, 3, 4, 5]));

// Exercise 10:

function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log('Exercise 10: ', sumArray([1, 2, 3, 4, 5]));

// Exercise 11:

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log('Exercise 11: ', sortNumbers([5, 2, 8, 1, 4]));