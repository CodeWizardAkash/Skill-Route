import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { htmlTopicsContent } from "../data/htmlTopicsContent"

function toggleOpenId(id, setState) {
  setState(previousIds => (
    previousIds.includes(id)
      ? previousIds.filter(previousId => previousId !== id)
      : [...previousIds, id]
  ))
}

function getDefaultOpenSections(content) {
  const sectionIds = ["explanation"]

  if (content?.keyPoints?.length) {
    sectionIds.push("key-points")
  }

  if (content?.code) {
    sectionIds.push("code")
  }

  return sectionIds
}

export default function HtmlPointDetail() {
  const { topicId, pointId } = useParams()
  const content = htmlTopicsContent[pointId]
  const [openSectionIds, setOpenSectionIds] = useState(() => getDefaultOpenSections(content))

  const isSectionOpen = sectionId => openSectionIds.includes(sectionId)

  if (!content) {
    return (
      <div className="p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
        <h1 className="text-xl md:text-2xl font-bold">Lesson not found</h1>
        <Link to={`/web-development/${topicId}`} className="text-cyan-500 dark:text-cyan-300 hover:underline mt-4 inline-block transition-colors">
          Return to HTML roadmap
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
      <Link
        to={`/web-development/${topicId}`}
        className="inline-flex items-center text-cyan-500 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 mb-6 transition-colors"
      >
        <span className="mr-2">&lt;-</span> Back to HTML roadmap
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
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Explanation</h2>
              <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                {isSectionOpen("explanation") ? "Hide" : "Show"}
              </span>
            </button>

            {isSectionOpen("explanation") && (
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-wrap transition-colors">
                  {content.explanation}
                </p>
              </div>
            )}
          </section>

          {content.keyPoints?.length > 0 && (
            <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
              <button
                type="button"
                onClick={() => toggleOpenId("key-points", setOpenSectionIds)}
                aria-expanded={isSectionOpen("key-points")}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Key Points</h2>
                <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                  {isSectionOpen("key-points") ? "Hide" : "Show"}
                </span>
              </button>

              {isSectionOpen("key-points") && (
                <div className="px-4 pb-4">
                  <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-gray-700 dark:text-gray-300 transition-colors">
                    {content.keyPoints.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
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
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Example Markup</h2>
                <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                  {isSectionOpen("code") ? "Hide" : "Show"}
                </span>
              </button>

              {isSectionOpen("code") && (
                <div className="px-4 pb-4">
                  <div className="bg-gray-50 dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300 transition-colors">
                      HTML Example
                    </div>
                    <pre className="p-4 md:p-5 overflow-x-auto">
                      <code className="text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre transition-colors">
                        {content.code}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </section>
          )}

          {content.practice?.length > 0 && (
            <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 transition-colors">
              <button
                type="button"
                onClick={() => toggleOpenId("practice", setOpenSectionIds)}
                aria-expanded={isSectionOpen("practice")}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Practice Tasks</h2>
                <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                  {isSectionOpen("practice") ? "Hide" : "Show"}
                </span>
              </button>

              {isSectionOpen("practice") && (
                <div className="px-4 pb-4">
                  <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 transition-colors">
                    {content.practice.map(item => (
                      <li key={item} className="rounded-lg border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/40 px-3 py-2 transition-colors">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
