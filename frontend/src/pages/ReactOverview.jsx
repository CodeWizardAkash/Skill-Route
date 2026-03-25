import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import reactLearningPath from "../data/reactLearningPath";

function toggleOpenId(id, setState) {
  setState((previousIds) =>
    previousIds.includes(id)
      ? previousIds.filter((previousId) => previousId !== id)
      : [...previousIds, id],
  );
}

export default function ReactOverview() {
  const [openTopics, setOpenTopics] = useState([]);
  const navigate = useNavigate();

  const isTopicOpen = (topicId) => openTopics.includes(topicId);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 p-4 md:p-10">
        <Link
          to="/learning-paths/web-development"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4 transition-colors"
        >
          <span className="mr-2">&lt;-</span> Back to Web Development
        </Link>

        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm dark:shadow-none p-5 md:p-8 transition-colors">
          <h1 className="mb-2 md:mb-3 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
            {reactLearningPath.hero.title}
          </h1>
          <p className="mb-2 text-sm md:text-base text-gray-700 dark:text-gray-300 transition-colors">
            {reactLearningPath.hero.subtitle}
          </p>
          <p className="text-cyan-600 dark:text-cyan-200 transition-colors">
            {reactLearningPath.hero.audience}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-200 transition-colors">
            React Topics
          </h2>

          <div className="space-y-4">
            {reactLearningPath.topics.map((topic) => {
              return (
                <div
                  key={topic.id}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 shadow-sm dark:shadow-none transition-colors overflow-hidden"
                >
                  {/* Topic Header */}
                  <button
                    type="button"
                    onClick={() => toggleOpenId(topic.id, setOpenTopics)}
                    aria-expanded={isTopicOpen(topic.id)}
                    className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 transition-colors">
                        {topic.shortDescription}
                      </p>
                    </div>
                    <span className="shrink-0 text-2xl text-cyan-600 dark:text-cyan-400 transition-transform">
                      {isTopicOpen(topic.id) ? "−" : "+"}
                    </span>
                  </button>

                  {/* Subtopics Grid */}
                  {isTopicOpen(topic.id) && (
                    <div className="border-t border-gray-200 dark:border-gray-700 px-4 md:px-6 py-6 bg-gray-50 dark:bg-gray-900/30 transition-colors">
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {topic.subtopics.map((subtopic) => (
                          <button
                            key={subtopic.id}
                            onClick={() =>
                              navigate(`/react/${topic.id}/${subtopic.id}`)
                            }
                            className="text-left p-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-cyan-500 hover:bg-cyan-50 dark:hover:border-cyan-600 dark:hover:bg-gray-800/80 transition-all"
                          >
                            <h4 className="font-semibold text-gray-900 dark:text-white transition-colors">
                              {subtopic.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 transition-colors">
                              Click to learn
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
