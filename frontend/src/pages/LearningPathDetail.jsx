import { useParams, Link } from "react-router-dom"
import paths from "../data/learningPaths.json"
import dsaLearningPath from "../data/dsaLearningPath"
import aiMlLearningPath from "../data/aiMlLearningPath"
import cssLearningPath from "../data/cssLearningPath"
import javascriptLearningPath from "../data/javascriptLearningPath"
import Chatbot from "../components/Chatbot"
import reactLearningPath from "../data/reactLearningPath"

function NonDsaPathDetail({ path }) {
  return (
    <div className="p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
      <h1 className="mb-4 text-3xl md:text-4xl font-bold">{path.title}</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{path.description}</p>

      <h2 className="mb-3 text-xl md:text-2xl font-semibold">Topics</h2>
      <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
        {path.topics.map((topic, index) => (
          <li key={`${path.slug}-${index}`}>
            {path.slug === "web-development" && topic === "CSS Fundamentals" ? (
              <Link to="/css" className="text-cyan-600 dark:text-cyan-400 hover:underline transition-colors">
                {topic}
              </Link>
            ) : path.slug === "web-development" && topic === "JavaScript Basics" ? (
              <Link to="/javascript" className="text-cyan-600 dark:text-cyan-400 hover:underline transition-colors">
                {topic}
              </Link>
            ) : path.slug === "web-development" && topic === "React Basics" ? (
              <Link to="/react" className="text-cyan-600 dark:text-cyan-400 hover:underline transition-colors">
                {topic}
              </Link>
            ) : (
              topic
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function WebDevelopmentPathDetail({ path }) {
  const learningPath = {
    hero: {
      title: path.title,
      subtitle: "Follow a structured frontend-first roadmap with the same card-based topic flow used in DSA.",
      audience: "Start with markup, move into styling and scripting, then build real projects with modern UI tools."
    },
    topics: path.topics.map(topic => {
      const descriptions = {
        "HTML Basics": "Learn semantic structure, forms, media, and page foundations.",
        "JavaScript Basics": "Build interactivity with variables, functions, arrays, and DOM events.",
        "React Basics": "Understand components, props, state, hooks, and modern SPA patterns.",
        "Build Mini Projects": "Combine fundamentals into practical projects that reinforce the stack."
      }

      if (topic === "CSS Fundamentals") {
        return {
          id: "css-fundamentals",
          title: topic,
          shortDescription: cssLearningPath.hero.subtitle,
          to: "/css"
        }
      }

      if (topic === "JavaScript Basics") {
        return {
          id: "javascript-basics",
          title: topic,
          shortDescription: javascriptLearningPath.hero.subtitle,
          to: "/javascript"
        }
      }

      if (topic === "React Basics") {
        return {
          id: "react-basics",
          title: topic,
          shortDescription: reactLearningPath.hero.subtitle,
          to: "/react"
        }
      }

      if (topic === "HTML Basics") {
        return {
          id: "html-basics",
          title: topic,
          shortDescription: descriptions[topic] || "Learn semantic structure, core tags, links, tables, and forms step by step.",
          to: "/web-development/html-basics"
        }
      }

      return {
        id: topic.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: topic,
        shortDescription: descriptions[topic] || "Content for this topic is being expanded.",
        to: null
      }
    })
  }
  return <DetailedPathView path={path} learningPath={learningPath} getTopicHref={topic => topic.to} />
}

export default function LearningPathDetail() {
  const { slug } = useParams()
  const path = paths.find(item => item.slug === slug)

  if (!path) {
    return <p className="p-10">Path not found</p>
  }

  if (path.slug === "dsa") {
    return <DetailedPathView path={path} learningPath={dsaLearningPath} pathSlug="dsa" />
  }

  if (path.slug === "ai-ml") {
    return <DetailedPathView path={path} learningPath={aiMlLearningPath} pathSlug="ai-ml" />
  }

  if (path.slug === "web-development") {
    return <WebDevelopmentPathDetail path={path} />
  }

  return <NonDsaPathDetail path={path} />
}

function DetailedPathView({ path, learningPath, pathSlug, getTopicHref }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 p-4 md:p-10 transition-colors">
      <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm dark:shadow-none p-5 md:p-8 transition-colors">
        <h1 className="mb-2 md:mb-3 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">{learningPath.hero.title}</h1>
        <p className="mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300 transition-colors">{path.description}</p>
        <p className="mb-2 text-gray-600 dark:text-gray-400 transition-colors">{learningPath.hero.subtitle}</p>
        <p className="text-sm text-cyan-600 dark:text-cyan-200 transition-colors">{learningPath.hero.audience}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-200 transition-colors">Choose Topic</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningPath.topics.map(topic => {
            const href = getTopicHref ? getTopicHref(topic) : `/${pathSlug}/${topic.id}`

            if (!href) {
              return (
                <article
                  key={topic.id}
                  className="rounded-xl border p-4 md:p-5 text-left transition-colors border-gray-200 bg-gray-100/70 dark:border-gray-700 dark:bg-gray-800/20 opacity-80"
                >
                  <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-colors">{topic.title}</h3>
                  <p className="text-xs md:text-sm leading-snug text-gray-600 dark:text-gray-300 transition-colors">{topic.shortDescription}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 transition-colors">Coming soon</p>
                </article>
              )
            }

            return (
              <Link
                key={topic.id}
                to={href}
                className="rounded-xl border p-4 md:p-5 text-left transition-colors border-gray-200 bg-white shadow-sm hover:border-cyan-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40 dark:shadow-none dark:hover:border-cyan-600 dark:hover:bg-gray-800/70"
              >
                <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-colors">{topic.title}</h3>
                <p className="text-xs md:text-sm leading-snug text-gray-600 dark:text-gray-300 transition-colors">{topic.shortDescription}</p>
              </Link>
            )
          })}
        </div>
      </section>
      <Chatbot />
    </div>
  )
}
