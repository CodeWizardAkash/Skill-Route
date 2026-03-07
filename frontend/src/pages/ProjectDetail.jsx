import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Tag,
  BookOpen,
  Clock,
  Lightbulb,
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6 transition-colors duration-300">
        <div className="text-gray-400 mb-4">
          <Lightbulb className="w-16 h-16" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Project not found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          The project you are looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/projects"
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    );

  const getDifficultyColor = (difficulty) => {
    const diff = difficulty?.toLowerCase();
    if (diff === "beginner")
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50";
    if (diff === "intermediate")
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800/50";
    if (diff === "advanced" || diff === "hard")
      return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800/50";
    return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 md:p-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 transition-colors group"
        >
          <span className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 mr-2 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </span>
          Back to Projects
        </Link>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(project.difficulty)} flex items-center gap-1.5`}
            >
              <Clock className="w-3.5 h-3.5" />
              {project.difficulty}
            </span>
            <span className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 flex items-center gap-1.5 shadow-sm">
              <Tag className="w-3.5 h-3.5" />
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {project.title}
          </h1>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-8 md:p-10 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Project Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          <div className="p-8 md:p-10 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                <Code2 className="w-5 h-5 text-indigo-500" />
                Required Skills & Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all font-semibold w-full sm:w-auto"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-400 rounded-xl border border-amber-200 dark:border-amber-800/50">
                  <Lightbulb className="w-6 h-6 shrink-0" />
                  <p className="text-sm font-medium">
                    This is a project idea waiting to be built. Grab your
                    favorite tools and get started!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
