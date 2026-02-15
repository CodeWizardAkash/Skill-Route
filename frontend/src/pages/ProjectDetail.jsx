import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p className="text-white">Project not found</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-2 text-gray-300">{project.description}</p>

      <p className="mt-4">
        <b>Category:</b> {project.category}
      </p>

      <p>
        <b>Difficulty:</b> {project.difficulty}
      </p>

      <p className="mt-2">
        <b>Skills:</b> {project.skills.join(", ")}
      </p>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          className="inline-block mt-4 text-blue-400 underline"
        >
          View Project
        </a>
      ) : (
        <p className="mt-4 text-yellow-400">
          This is a project idea. You can build it!
        </p>
      )}
    </div>
  );
}
