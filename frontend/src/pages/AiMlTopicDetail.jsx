import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import aiMlLearningPath from "../data/aiMlLearningPath"
import { AiVsMlVisual, MlTypesVisual, RealWorldExamplesVisual } from "../data/aiMlTopicsContent"

function toggleOpenId(id, setState) {
  setState(previousIds => (
    previousIds.includes(id)
      ? previousIds.filter(previousId => previousId !== id)
      : [...previousIds, id]
  ))
}

const visualComponents = {
  "what-is-ai": <AiVsMlVisual />,
  "what-is-ml": <AiVsMlVisual />,
  "types-of-ml": <MlTypesVisual />,
  "real-world-examples": <RealWorldExamplesVisual />
}

function TopicDetailContent({ content, topicId }) {
  const [openSectionIds, setOpenSectionIds] = useState(["explanation", "visual"])

  const isSectionOpen = sectionId => openSectionIds.includes(sectionId)
  const visual = visualComponents[topicId]

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
      <Link
        to="/learning-paths/ai-ml"
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
      >
        <span className="mr-2">&lt;-</span> Back to AI/ML Topics
      </Link>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 md:p-8 shadow-sm dark:shadow-none transition-colors">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors">
          {content.title}
        </h1>

        <div className="space-y-4">
          {/* Explanation Section */}
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
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-wrap transition-colors">
                  {content.explanation}
                </p>
              </div>
            )}
          </section>

          {/* Visual Section */}
          {visual && (
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
                <div className="px-4 pb-4">
                  {visual}
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AiMlTopicDetail() {
  const { topicId } = useParams()
  const content = aiMlLearningPath.content[topicId]

  if (!content) {
    return (
      <div className="p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
        <h1 className="text-xl md:text-2xl font-bold">Content not found</h1>
        <Link to="/learning-paths/ai-ml" className="text-cyan-400 hover:underline mt-4 inline-block">
          Return to AI/ML Topics
        </Link>
      </div>
    )
  }

  return <TopicDetailContent key={topicId} content={content} topicId={topicId} />
}
