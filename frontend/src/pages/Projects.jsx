import { Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Add Project Card */}
        <Link to="/add-project">
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6
                          flex items-center justify-center text-gray-400
                          hover:border-blue-500 hover:text-blue-400 transition">
            + Add Project Idea
          </div>
        </Link>

        {/* Project Cards */}
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
          >
            <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400 mt-1">
                {project.category}
              </p>
              <p className="text-sm mt-2">{project.difficulty}</p>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}
