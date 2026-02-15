import { Link } from "react-router-dom"
import paths from "../data/learningPaths.json"
import Card from "../components/Card"

export default function LearningPaths() {
  return (
    <div className="p-10 grid md:grid-cols-2 gap-6">
      {paths.map((p, i) => (
        <Link
          key={i}
          to={`/learning-paths/${p.slug}`}
        >
          <Card
            title={p.title}
            description={p.description}
          />
        </Link>
      ))}
    </div>
  )
}
