import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import {
  FolderPlus,
  Code,
  Database,
  Globe,
  Layout,
  Smartphone,
} from "lucide-react";

const getCategoryIcon = (category) => {
  const cat = category.toLowerCase();
  if (cat.includes("web")) return <Globe className="w-5 h-5" />;
  if (cat.includes("data")) return <Database className="w-5 h-5" />;
  if (cat.includes("app") || cat.includes("mobile"))
    return <Smartphone className="w-5 h-5" />;
  if (cat.includes("ui") || cat.includes("ux"))
    return <Layout className="w-5 h-5" />;
  return <Code className="w-5 h-5" />;
};

const getDifficultyColor = (difficulty) => {
  const diff = difficulty.toLowerCase();
  if (diff === "beginner")
    return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50";
  if (diff === "intermediate")
    return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800/50";
  if (diff === "advanced" || diff === "hard")
    return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800/50";
  return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700";
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 tracking-tight">
            Explore Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Discover a variety of project ideas to build your skills, or
            contribute your own to the community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add Project Card */}
          <Link to="/add-project" className="group h-full block">
            <div
              className="h-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-8
                            flex flex-col items-center justify-center text-gray-500 dark:text-gray-400
                            hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 
                            hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                <FolderPlus className="w-8 h-8" />
              </div>
              <span className="font-semibold text-lg">Add Project Idea</span>
              <span className="text-sm mt-2 opacity-80 text-center">
                Got something cool? Share it!
              </span>
            </div>
          </Link>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <Link
              key={project.id || index}
              to={`/projects/${project.id}`}
              className="block group h-full"
            >
              <div className="h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${getDifficultyColor(project.difficulty)}`}
                  >
                    {project.difficulty}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 grow line-clamp-2">
                  {project.description ||
                    `A ${project.category} project suitable for ${project.difficulty.toLowerCase()} level developers.`}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {project.category}
                  </span>
                  <div className="flex -space-x-2">
                    {/* Just visual indicators for skills, max 3 circles */}
                    {project.skills?.slice(0, 3).map((skill, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[8px] font-bold text-gray-600 dark:text-gray-300"
                        title={skill}
                      >
                        {skill.substring(0, 1)}
                      </div>
                    ))}
                    {project.skills?.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[8px] font-bold text-gray-500 dark:text-gray-300">
                        +
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
