import { useParams, Link } from "react-router-dom"
import paths from "../data/learningPaths.json"
import dsaLearningPath from "../data/dsaLearningPath"
import aiMlLearningPath from "../data/aiMlLearningPath"

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
            ) : (
              topic
            )}
          </li>
        ))}
      </ul>
    </div>
  )
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

  return <NonDsaPathDetail path={path} />
}

function DetailedPathView({ path, learningPath, pathSlug }) {
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
            return (
              <Link
                key={topic.id}
                to={`/${pathSlug}/${topic.id}`}
                className="rounded-xl border p-4 md:p-5 text-left transition-colors border-gray-200 bg-white shadow-sm hover:border-cyan-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40 dark:shadow-none dark:hover:border-cyan-600 dark:hover:bg-gray-800/70"
              >
                <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-colors">{topic.title}</h3>
                <p className="text-xs md:text-sm leading-snug text-gray-600 dark:text-gray-300 transition-colors">{topic.shortDescription}</p>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
