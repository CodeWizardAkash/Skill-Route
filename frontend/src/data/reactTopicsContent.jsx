export const reactTopicsContent = {
  components: {
    "what-is-a-component": {
      title: "What is a Component?",
      explanation: "Components let you split the UI into independent, reusable pieces. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called 'props') and return React elements describing what should appear on the screen.",
      code: {
        javascript: `function Welcome() {
  return <h1>Hello, World!</h1>;
}

// In another file
// <Welcome />`
      }
    },
    "functional-components": {
      title: "Functional Components",
      explanation: "Functional components are plain JavaScript functions that return JSX. With the introduction of Hooks, they are the standard way to write React components instead of class components.",
      code: {
        javascript: `const Button = () => {
  return (
    <button className="btn-primary">
      Click Me
    </button>
  );
};

export default Button;`
      }
    },
    "jsx-syntax": {
      title: "JSX Syntax",
      explanation: "JSX is a syntax extension for JavaScript recommended by React. It produces React 'elements' and allows us to write HTML-like structures in our JavaScript code. You must wrap multiple elements in a single parent or a Fragment (<></>).",
      code: {
        javascript: `const name = "Alice";
const element = (
  <div>
    <h1>Hello, {name}</h1>
    <p>Good to see you here.</p>
  </div>
);`
      }
    },
    "rendering-elements": {
      title: "Rendering Elements",
      explanation: "Elements are the smallest building blocks of React apps. Unlike browser DOM elements, React elements are plain objects. React DOM takes care of updating the DOM to match the React elements.",
      code: {
        javascript: `import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
const element = <h1>Hello, world</h1>;
root.render(element);`
      }
    }
  },
  props: {
    "understanding-props": {
      title: "Understanding Props",
      explanation: "Props (short for properties) are how we pass data from one component to another, typically from parent to child. Props are read-only; a component must never modify its own props.",
      code: {
        javascript: `function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Greeting name="Sara" />;
}`
      }
    },
    "destructuring-props": {
      title: "Destructuring Props",
      explanation: "A common and cleaner way to use props is by destructuring them directly in the function signature.",
      code: {
        javascript: `// Destructuring in the parameter list
function UserCard({ username, age }) {
  return (
    <div className="card">
      <h2>{username}</h2>
      <p>Age: {age}</p>
    </div>
  );
}`
      }
    },
    "children-props": {
      title: "The `children` Prop",
      explanation: "The `children` prop allows you to pass components as data to other components. It lets you compose components easily.",
      code: {
        javascript: `function Card({ children }) {
  return (
    <div className="card-container border shadow">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h3>Card Title</h3>
      <p>This paragraph is passed as the children prop!</p>
    </Card>
  );
}`
      }
    },
    "prop-types-default-props": {
      title: "PropTypes and Default Props",
      explanation: "You can specify default values for your `props` and enforce types using `PropTypes` to catch bugs early. (Note: Many modern projects use TypeScript instead of PropTypes).",
      code: {
        javascript: `import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return <h1>Hi {name}, you are {age}</h1>;
}

Greeting.defaultProps = {
  name: "Guest"
};

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};`
      }
    }
  },
  state: {
    "usestate-hook": {
      title: "The useState Hook",
      explanation: "The `useState` hook lets you add React state to functional components. It returns an array with two values: the current state and a function to update it.",
      code: {
        javascript: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
      }
    },
    "updating-state": {
      title: "Updating State Correctly",
      explanation: "State updates might be asynchronous. If your new state relies on the previous state, you should pass a function to the state setter instead of a direct value.",
      code: {
        javascript: `function AdvancedCounter() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    // Correct way
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return <button onClick={incrementTwice}>+2</button>;
}`
      }
    },
    "state-vs-props": {
      title: "State vs Props",
      explanation: "Props are passed to the component (similar to function parameters), while state is managed within the component (similar to variables declared within a function). Props are immutable, state is mutable (via the setter function).",
      code: {
        javascript: `function Parent() {
  // State is managed here
  const [score, setScore] = useState(0);
  
  // Passed to child as props
  return <Child scoreProp={score} />;
}

function Child({ scoreProp }) {
  // Read-only prop
  return <p>Score: {scoreProp}</p>;
}`
      }
    },
    "lifting-state-up": {
      title: "Lifting State Up",
      explanation: "When multiple components need to share the same changing data, you should 'lift' the state up to their closest common ancestor.",
      code: {
        javascript: `function Ancestor() {
  const [sharedText, setSharedText] = useState("");
  return (
    <>
      <Input siblingText={sharedText} setSiblingText={setSharedText} />
      <Display sharedText={sharedText} />
    </>
  );
}

function Input({ siblingText, setSiblingText }) {
  return <input value={siblingText} onChange={e => setSiblingText(e.target.value)} />;
}

function Display({ sharedText }) {
  return <p>{sharedText}</p>;
}`
      }
    }
  },
  hooks: {
    "useeffect-hook": {
      title: "The useEffect Hook",
      explanation: "The `useEffect` Hook lets you perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the first render and after every update, depending on the dependency array.",
      code: {
        javascript: `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []); // Empty array means it runs once on mount

  return <h1>Rendered {count} times!</h1>;
}`
      }
    },
    "custom-hooks": {
      title: "Creating Custom Hooks",
      explanation: "Custom Hooks let you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks.",
      code: {
        javascript: `import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// In your component: const width = useWindowWidth();`
      }
    },
    "usecontext-hook": {
      title: "Context API & useContext",
      explanation: "Context provides a way to pass data through the component tree without having to pass props down manually at every level. The `useContext` hook makes consuming this context easy.",
      code: {
        javascript: `import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <MainDisplay />
    </ThemeContext.Provider>
  );
}

function MainDisplay() {
  const theme = useContext(ThemeContext);
  return <div className={\`theme-\${theme}\`}>It is {theme}</div>;
}`
      }
    },
    "useref-hook": {
      title: "The useRef Hook",
      explanation: "`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument. The returned object will persist for the full lifetime of the component and doesn't trigger a re-render when it changes.",
      code: {
        javascript: `import { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // .current points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`
      }
    }
  },
  routing: {
    "react-router-dom": {
      title: "Introduction to React Router",
      explanation: "React Router is the standard routing library for React. It keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling.",
      code: {
        javascript: `// Installation:
// npm install react-router-dom

import { BrowserRouter } from "react-router-dom";

// Wrap your app with BrowserRouter
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}`
      }
    },
    "defining-routes": {
      title: "Defining Routes",
      explanation: "Use the `Routes` and `Route` components to define what should render based on the current URL path.",
      code: {
        javascript: `import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
}`
      }
    },
    "navigation": {
      title: "Link and Navigation",
      explanation: "Use the `Link` component instead of standard anchor tags (`<a>`) to navigate between pages without triggering a full page reload. You can also use the `useNavigate` hook for programmatic navigation.",
      code: {
        javascript: `import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      <button onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
    </nav>
  );
}`
      }
    },
    "url-parameters": {
      title: "URL Parameters",
      explanation: "You can define routes with URL parameters to pass values dynamically. Use the `useParams` hook to access these values within the component.",
      code: {
        javascript: `// In your routes:
// <Route path="/users/:userId" element={<UserProfile />} />

import { useParams } from "react-router-dom";

function UserProfile() {
  // 'userId' matches the parameter name in the path
  const { userId } = useParams();

  return <div>Showing profile for user: {userId}</div>;
}`
      }
    }
  }
};
