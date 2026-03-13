export const javascriptTopicsContent = {
  variables: {
    "var-let-const": {
      title: "var, let, and const",
      explanation: "JavaScript provides three ways to declare a variable: `var`, `let`, and `const`. `var` is function-scoped and allows redeclaration, which can lead to bugs. `let` is block-scoped and allows reassignment but not redeclaration within the same scope. `const` is block-scoped and cannot be reassigned after declaration, though properties of objects declared with `const` can be modified.",
      code: {
        javascript: `// var (function scope)
var oldWay = "Hello";
var oldWay = "World"; // No error

// let (block scope)
let newWay = "Hello";
newWay = "World"; // Valid
// let newWay = "Again"; // SyntaxError

// const (block scope)
const constantValue = 42;
// constantValue = 43; // TypeError`
      }
    },
    "data-types": {
      title: "Data Types",
      explanation: "JavaScript has primarily two categories of data types: Primitive (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and Reference/Object (Object, Array, Function). Primitives are immutable and compared by value, while objects are mutable and compared by reference.",
      code: {
        javascript: `// Primitive Types
let name = "Alice"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let notAssigned; // Undefined
let emptyVal = null; // Null

// Reference Types
let person = { name: "Bob", age: 25 }; // Object
let colors = ["red", "green", "blue"]; // Array
let greet = function() { return "Hi!"; }; // Function`
      }
    },
    "scope": {
      title: "Variable Scope",
      explanation: "Scope determines the accessibility of variables. Global scope means the variable is accessible everywhere. Function scope (created by functions) limits variable access to within that function. Block scope (created by `{}` when using `let` or `const`) restricts accessibility to that block.",
      code: {
        javascript: `let globalVar = "I am global";

function testScope() {
  let localScope = "I am local";
  console.log(globalVar); // Accessible
}
// console.log(localScope); // ReferenceError

if (true) {
  let blockScoped = "I am inside a block";
  var functionScoped = "I ignore blocks";
}
// console.log(blockScoped); // ReferenceError
console.log(functionScoped); // Accessible`
      }
    },
    "hoisting": {
      title: "Hoisting",
      explanation: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Variable declarations (`var`) and function declarations are hoisted. However, with `let` and `const`, variables are hoisted but reside in a 'Temporal Dead Zone' until execution reaches them.",
      code: {
        javascript: `console.log(hoistedVar); // Output: undefined
var hoistedVar = 5;

// console.log(notHoistedLet); // ReferenceError
let notHoistedLet = 10;

hoistedFunction(); // Output: "I run!"
function hoistedFunction() {
  console.log("I run!");
}`
      }
    }
  },
  functions: {
    "function-declaration": {
      title: "Function Declarations",
      explanation: "A function declaration defines a named function. Due to hoisting, these functions can be called before they are defined in the code.",
      code: {
        javascript: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // "Hello, Alice!"`
      }
    },
    "arrow-functions": {
      title: "Arrow Functions",
      explanation: "Arrow functions provide a concise syntax for writing function expressions. They do not have their own bindings to `this` or `arguments` and are always anonymous.",
      code: {
        javascript: `// Traditional Function Expression
const addClassic = function(a, b) {
  return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3)); // 8`
      }
    },
    "parameters-arguments": {
      title: "Parameters & Arguments",
      explanation: "Parameters are the variables defined in the function signature, whereas arguments are the actual values passed to the function when it is invoked. ES6 introduced Default Parameters allowing you to initialize parameters with default values if no value or undefined is passed.",
      code: {
        javascript: `function multiply(a, b = 2) { // b has a default value of 2
  return a * b;
}

console.log(multiply(5)); // Output: 10
console.log(multiply(5, 3)); // Output: 15`
      }
    },
    "callbacks": {
      title: "Callback Functions",
      explanation: "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. They are fundamental for asynchronous operations in JavaScript.",
      code: {
        javascript: `function processUserInput(callback) {
  let name = "Charlie";
  callback(name);
}

function greet(name) {
  console.log("Welcome, " + name);
}

processUserInput(greet); // Output: "Welcome, Charlie"`
      }
    }
  },
  arrays: {
    "array-basics": {
      title: "Array Basics",
      explanation: "An array is a data structure used to store an ordered collection of values in a single variable. Arrays in JavaScript can contain elements of mixed data types.",
      code: {
        javascript: `let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: "Apple"

fruits[1] = "Mango"; // Modifying an element
console.log(fruits.length); // Output: 3`
      }
    },
    "array-methods": {
      title: "Common Array Methods",
      explanation: "JavaScript arrays have built-in methods to manipulate elements. Common ones include push() (add to end), pop() (remove from end), shift() (remove from start), and unshift() (add to start).",
      code: {
        javascript: `let numbers = [1, 2, 3];

numbers.push(4); // [1, 2, 3, 4]
numbers.pop(); // Returns 4, array is now [1, 2, 3]

numbers.unshift(0); // [0, 1, 2, 3]
numbers.shift(); // Returns 0, array is now [1, 2, 3]`
      }
    },
    "iteration": {
      title: "Iterating Arrays",
      explanation: "You can loop through array elements using a `for` loop, a `for...of` loop, or the `forEach()` method.",
      code: {
        javascript: `let colors = ["red", "green", "blue"];

// for...of loop
for (let color of colors) {
  console.log(color);
}

// forEach method
colors.forEach((color, index) => {
  console.log(index + ": " + color);
});`
      }
    },
    "map-filter-reduce": {
      title: "Map, Filter, Reduce",
      explanation: "These are powerful array methods that create new arrays based on conditions or transformations without mutating the original array. `map` transforms elements, `filter` extracts elements meeting a condition, and `reduce` accumulates values into a single result.",
      code: {
        javascript: `const nums = [1, 2, 3, 4];

// map
const doubled = nums.map(n => n * 2); // [2, 4, 6, 8]

// filter
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// reduce
const sum = nums.reduce((total, n) => total + n, 0); // 10`
      }
    }
  },
  objects: {
    "object-basics": {
      title: "Object Basics",
      explanation: "An object is an unordered collection of related data in the form of key-value pairs. Keys are strings (or Symbols), and values can be any data type.",
      code: {
        javascript: `const user = {
  name: "Dan",
  age: 28,
  isAdmin: true
};

// Dot notation
console.log(user.name); // "Dan"

// Bracket notation
console.log(user["age"]); // 28`
      }
    },
    "methods-this": {
      title: "Methods and 'this'",
      explanation: "Functions bound to an object are called methods. Inside a method, the `this` keyword refers to the object that owns the method.",
      code: {
        javascript: `const calculator = {
  value: 10,
  add: function(n) {
    this.value += n; // 'this' refers to 'calculator'
  }
};

calculator.add(5);
console.log(calculator.value); // 15`
      }
    },
    "object-destructuring": {
      title: "Object Destructuring",
      explanation: "Destructuring is a syntax that allows us to unpack properties from objects into distinct variables.",
      code: {
        javascript: `const profile = {
  username: "coder123",
  email: "coder@example.com",
  level: 42
};

// Extracting properties into variables
const { username, level } = profile;
console.log(username); // "coder123"`
      }
    },
    "classes": {
      title: "Classes (ES6)",
      explanation: "Classes provide a clearer and simpler syntax to create objects and deal with inheritance. They are syntactical sugar over JavaScript's existing prototype-based inheritance.",
      code: {
        javascript: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

const dog = new Dog("Rex");
dog.speak(); // "Rex barks."`
      }
    }
  },
  "dom-manipulation": {
    "selecting-elements": {
      title: "Selecting Elements",
      explanation: "To manipulate the DOM, you first need to grab elements. Methods like `getElementById`, `querySelector`, and `querySelectorAll` are the most common ways to find HTML elements.",
      code: {
        javascript: `// Select by ID
const title = document.getElementById("main-title");

// Select by CSS selector
const button = document.querySelector(".btn-submit");

// Select multiple elements
const listItems = document.querySelectorAll("li.item");`
      }
    },
    "modifying-elements": {
      title: "Modifying Elements",
      explanation: "Once an element is selected, you can modify its content, attributes, and styles.",
      code: {
        javascript: `const element = document.querySelector("#my-box");

// Change text content
element.textContent = "New Content!";

// Change HTML content
element.innerHTML = "<strong>Bold</strong> content";

// Modify styles
element.style.backgroundColor = "blue";
element.classList.add("active");`
      }
    },
    "event-listeners": {
      title: "Event Listeners",
      explanation: "Event listeners allow JavaScript to respond to user interactions like clicks, keyboard presses, or mouse movements.",
      code: {
        javascript: `const btn = document.querySelector("#click-me");

btn.addEventListener("click", function(event) {
  console.log("Button was clicked!");
  alert("You clicked the button.");
});`
      }
    },
    "creating-elements": {
      title: "Creating Elements",
      explanation: "You can dynamically add new elements to the DOM by creating them and then appending them to an existing parent element.",
      code: {
        javascript: `// Create a new div element
const newDiv = document.createElement("div");

// Add some content to it
newDiv.textContent = "I was safely added via JS!";
newDiv.classList.add("dynamic-box");

// Append it to the body
document.body.appendChild(newDiv);`
      }
    }
  },
  "es6-basics": {
    "template-literals": {
      title: "Template Literals",
      explanation: "Template literals allow for easier string interpolation and multi-line strings using backticks (`) instead of quotes.",
      code: {
        javascript: `const name = "Eve";
const age = 24;

// Interpolation
const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;

// Multi-line
const multi = \`Line 1
Line 2
Line 3\`;`
      }
    },
    "destructuring": {
      title: "Destructuring Assignment",
      explanation: "Destructuring provides a concise way to extract values from arrays or objects into distinct variables.",
      code: {
        javascript: `// Array Destructuring
const coords = [10, 20];
const [x, y] = coords;
console.log(y); // 20

// Object Destructuring
const person = { first: "Jane", last: "Doe" };
const { first, last } = person;
console.log(first); // "Jane"`
      }
    },
    "spread-rest": {
      title: "Spread and Rest Operators",
      explanation: "The `...` syntax serves two purposes. 'Spread' expands an array or object into its elements. 'Rest' collects multiple elements and condenses them into a single array.",
      code: {
        javascript: `// Spread (arrays)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Spread (objects)
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Rest
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3)); // 6`
      }
    },
    "modules": {
      title: "ES6 Modules",
      explanation: "Modules allow you to break your code into separate files. You can `export` parts of your code to be imported in other files using `import`.",
      code: {
        javascript: `// math.js
export const pi = 3.14159;
export function square(x) { return x * x; }

// main.js
import { pi, square } from './math.js';
console.log(square(5)); // 25`
      }
    }
  }
};
