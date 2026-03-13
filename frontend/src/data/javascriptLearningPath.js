const javascriptLearningPath = {
  hero: {
    title: "JavaScript Core Concepts",
    subtitle: "Master the fundamental concepts of JavaScript.",
    audience: "Learn variables, functions, arrays, objects, DOM manipulation, and ES6 basics."
  },
  topics: [
    {
      id: "variables",
      title: "Variables",
      shortDescription: "Learn how to declare and use variables in JavaScript.",
      subtopics: [
        { id: "var-let-const", title: "var, let, and const" },
        { id: "data-types", title: "Data Types" },
        { id: "scope", title: "Variable Scope" },
        { id: "hoisting", title: "Hoisting" }
      ]
    },
    {
      id: "functions",
      title: "Functions",
      shortDescription: "Reusable blocks of code to perform specific tasks.",
      subtopics: [
        { id: "function-declaration", title: "Function Declarations" },
        { id: "arrow-functions", title: "Arrow Functions" },
        { id: "parameters-arguments", title: "Parameters & Arguments" },
        { id: "callbacks", title: "Callback Functions" }
      ]
    },
    {
      id: "arrays",
      title: "Arrays",
      shortDescription: "Store and manipulate collections of data.",
      subtopics: [
        { id: "array-basics", title: "Array Basics" },
        { id: "array-methods", title: "Common Array Methods" },
        { id: "iteration", title: "Iterating Arrays" },
        { id: "map-filter-reduce", title: "Map, Filter, Reduce" }
      ]
    },
    {
      id: "objects",
      title: "Objects",
      shortDescription: "Key-value pairs for structuring complex data.",
      subtopics: [
        { id: "object-basics", title: "Object Basics" },
        { id: "methods-this", title: "Methods and 'this'" },
        { id: "object-destructuring", title: "Object Destructuring" },
        { id: "classes", title: "Classes (ES6)" }
      ]
    },
    {
      id: "dom-manipulation",
      title: "DOM Manipulation",
      shortDescription: "Interact with the browser's Document Object Model.",
      subtopics: [
        { id: "selecting-elements", title: "Selecting Elements" },
        { id: "modifying-elements", title: "Modifying Elements" },
        { id: "event-listeners", title: "Event Listeners" },
        { id: "creating-elements", title: "Creating Elements dynamically" }
      ]
    },
    {
      id: "es6-basics",
      title: "ES6 Basics",
      shortDescription: "Modern syntax features introduced in ECMAScript 2015.",
      subtopics: [
        { id: "template-literals", title: "Template Literals" },
        { id: "destructuring", title: "Destructuring Assignment" },
        { id: "spread-rest", title: "Spread and Rest Operators" },
        { id: "modules", title: "ES6 Modules" }
      ]
    }
  ]
};

export default javascriptLearningPath;
