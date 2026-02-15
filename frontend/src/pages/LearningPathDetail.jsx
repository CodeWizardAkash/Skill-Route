import { useParams } from "react-router-dom"
import paths from "../data/learningPaths.json"

export default function LearningPathDetail() {
  const { slug } = useParams()

  const path = paths.find(
    p => p.slug === slug
  )

  if (!path) return <p className="p-10">Path not found</p>

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        {path.title}
      </h1>

      <p className="text-gray-400 mb-6">
        {path.description}
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Topics
      </h2>

      <ul className="list-disc list-inside text-gray-300">
        {path.topics.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
