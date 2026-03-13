import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import javascriptLearningPath from "../data/javascriptLearningPath";
import { javascriptTopicsContent } from "../data/javascriptTopicsContent";

function toggleOpenId(id, setState) {
  setState((previousIds) =>
    previousIds.includes(id)
      ? previousIds.filter((previousId) => previousId !== id)
      : [...previousIds, id],
  );
}

function getDefaultOpenSections(content) {
  const defaultOpenSections = ["explanation"];
  if (content?.visual) {
    defaultOpenSections.push("visual");
  }
  if (content?.code) {
    defaultOpenSections.push("code");
  }
  return defaultOpenSections;
}

export default function JavascriptSubtopicDetail() {
  const { topicId, subtopicId } = useParams();
  const topic = javascriptLearningPath.topics.find((t) => t.id === topicId);
  const content = javascriptTopicsContent[topicId]?.[subtopicId];
  const [openSectionIds, setOpenSectionIds] = useState(() =>
    getDefaultOpenSections(content),
  );

  if (!content || !topic) {
    return (
      <div className="p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
        <h1 className="text-xl md:text-2xl font-bold">Content not found</h1>
      </div>
    );
  }

  const isSectionOpen = (sectionId) => openSectionIds.includes(sectionId);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-4xl mx-auto p-4 md:p-10">
        <Link
          to={`/javascript`}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
        >
          <span className="mr-2">&lt;-</span> Back to JavaScript
        </Link>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 md:p-8 shadow-sm dark:shadow-none transition-colors">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors">
            {content.title}
          </h1>

          <div className="space-y-4">
            <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
              <button
                type="button"
                onClick={() => toggleOpenId("explanation", setOpenSectionIds)}
                aria-expanded={isSectionOpen("explanation")}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                  Explanation
                </h2>
                <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                  {isSectionOpen("explanation") ? "Hide" : "Show"}
                </span>
              </button>

              {isSectionOpen("explanation") && (
                <div className="px-4 pb-4">
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed transition-colors">
                    {content.explanation}
                  </p>
                </div>
              )}
            </section>

            {content.visual && (
              <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleOpenId("visual", setOpenSectionIds)}
                  aria-expanded={isSectionOpen("visual")}
                  className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
                >
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                    Visual Walkthrough
                  </h2>
                  <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                    {isSectionOpen("visual") ? "Hide" : "Show"}
                  </span>
                </button>

                {isSectionOpen("visual") && (
                  <div className="px-4 pb-4">{content.visual}</div>
                )}
              </section>
            )}

            {content.code && (
              <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleOpenId("code", setOpenSectionIds)}
                  aria-expanded={isSectionOpen("code")}
                  className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
                >
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                    Code Example
                  </h2>
                  <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                    {isSectionOpen("code") ? "Hide" : "Show"}
                  </span>
                </button>

                {isSectionOpen("code") && (
                  <div className="px-4 pb-4">
                    <div className="bg-gray-50 dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-colors">
                      <pre className="p-4 md:p-5 overflow-x-auto min-h-37.5">
                        <code className="text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre transition-colors">
                          {content.code.javascript}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
