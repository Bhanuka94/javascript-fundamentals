// Exercise 1 : Create Variables / Template literals

// create variables
let name = "sam";
let age = 33;
let isLearningReact = true;

// log them to the console
console.log(name);
console.log(age);
console.log(isLearningReact);

console.log('Name: ' + name + ' | Age: ' + age + ' | Learning React: ' + isLearningReact);

// template literals (better and cleaner)
console.log(`Name: ${name} | Age: ${age} | Learning React: ${isLearningReact}`);


// Exercise 2: Arrays

//  create an array
let languages = ['js', 'react', 'laravel', 'python', 'go'];

// find how many languages
console.log(languages.length);

// log the first language
console.log(languages[0]);

// log the last one
console.log(languages.length -1);



// Exercise 3: Objects

// Create an object

let me = {
	name:  "sam",
	job: 'it',
	yearsExperience: 3,
	skills: ['js', 'wrodpress', 'php', 'moodle']
}

// Log the entire object
console.log(me);

// Log just the skills
console.log(me.skills);



// Exercise 4: Array methods

// Create array of numbers
let numbers = [1, 2, 3, 4, 5];

// Double each number using map
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);


// Get only numbers greater than 2 using filter
let filteredNumbers = numbers.filter(num => num > 2);
console.log(filteredNumbers);






