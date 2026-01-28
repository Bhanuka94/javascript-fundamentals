// create a function

function greet(name) {
	return `Hello, ${name}`;
}

console.log(greet("sonny"));


// arrow function

const greeter = (name) => `Hello, ${name}!`;

console.log(greeter("rohan"));


// Function with Multiple Parameters

function add(a, b) {
	return a + b; 
}

console.log(add(3,2));

// arrow function
 const adding = (a,b) => a+b;

console.log(add(5,7));

// expanded. same results
const addArrow2 = (a, b) => {
  return a + b;
};


// Arrow Function with Array Method

const numberset = [10,20,30,40,50];

// substract 5 from each number
const result = numberset.map(num => num-5);

console.log(result);




//Function that Returns a Function

function multiplier(x){
	return function(y) {
		return x*y;	
	};
}

const double = multiplier(2);
console.log(double(5));


// arrow function version
const multiplier2 = x => y => x*y;

const double2 = multiplier2(2);
console.log(double2(5));



// Real-World Example - Calculate Discount

function calculateDiscount(price, discountPercent) {
	return price  - (price * discountPercent / 100);
}

console.log(calculateDiscount(100, 20));

// arrow version
const calculateDiscount2 = (price, discountPercent) =>
  price - (price * discountPercent / 100);

console.log(calculateDiscount2(500, 15));



// Array Filter with Function

// Create array of ages
const ages = [12, 19, 32, 43, 53, 11];

// Create the function
function isAdult(age){
	return age >= 18;
}

// Use filter with the function 
const adults = ages.filter(isAdult);

// Log the result
console.log(adults);




// Default Parameters

function orderCoffee(size = "medium", type = "latte"){
	return `ordered a ${size} ${type}`;
}

// No arguments
console.log(orderCoffee());
// Ordered a medium latte

// Only size
console.log(orderCoffee("large"));
// Ordered a large latte

// Size and type
console.log(orderCoffee("small", "cappuccino"));
// Ordered a small cappuccino

// skip the first parameter but pass the second

console.log(orderCoffee(undefined, "espresso"));




// Callback Function Practice


// Create the function
function processArray(numbers, callback) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }

  return result;
}

const square = num => num * num;

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processArray(numbers, square);

console.log(squaredNumbers);


//Above is exactly how .map() works internally


// Temperature Converter

// cels to farehi
function celsiusToFahrenheit(celcius){
	return (celcius * 9/5)+32;
}	

// f to c
function fahrenheitToCelsius(farenheit){
	return (farenheit - 32) * 5/9;	
}

console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(25));   // 77

console.log(fahrenheitToCelsius(32));   // 0
console.log(fahrenheitToCelsius(77));   // 25


































