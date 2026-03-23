const reactLearningPath = {
  hero: {
    title: "React Basics",
    subtitle: "Master modern UI development with React.",
    audience: "Learn components, props, state, hooks, context, and routing."
  },
  topics: [
    {
      id: "components",
      title: "Components",
      shortDescription: "The building blocks of React applications.",
      subtopics: [
        { id: "what-is-a-component", title: "What is a Component?" },
        { id: "functional-components", title: "Functional Components" },
        { id: "jsx-syntax", title: "JSX Syntax" },
        { id: "rendering-elements", title: "Rendering Elements" }
      ]
    },
    {
      id: "props",
      title: "Props",
      shortDescription: "Passing data from parent to child components.",
      subtopics: [
        { id: "understanding-props", title: "Understanding Props" },
        { id: "destructuring-props", title: "Destructuring Props" },
        { id: "children-props", title: "The `children` Prop" },
        { id: "prop-types-default-props", title: "PropTypes and Default Props" }
      ]
    },
    {
      id: "state",
      title: "State",
      shortDescription: "Managing dynamic data within a component.",
      subtopics: [
        { id: "usestate-hook", title: "The useState Hook" },
        { id: "updating-state", title: "Updating State Correctly" },
        { id: "state-vs-props", title: "State vs Props" },
        { id: "lifting-state-up", title: "Lifting State Up" }
      ]
    },
    {
      id: "hooks",
      title: "Hooks",
      shortDescription: "Using React features in functional components.",
      subtopics: [
        { id: "useeffect-hook", title: "The useEffect Hook" },
        { id: "custom-hooks", title: "Creating Custom Hooks" },
        { id: "usecontext-hook", title: "Context API & useContext" },
        { id: "useref-hook", title: "The useRef Hook" }
      ]
    },
    {
      id: "routing",
      title: "Routing",
      shortDescription: "Navigating between pages in a Single Page Application.",
      subtopics: [
        { id: "react-router-dom", title: "Introduction to React Router" },
        { id: "defining-routes", title: "Defining Routes" },
        { id: "navigation", title: "Link and Navigation" },
        { id: "url-parameters", title: "URL Parameters" }
      ]
    }
  ]
};

export default reactLearningPath;
