import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import dsaLearningPath from "../data/dsaLearningPath"

function toggleOpenId(id, setState) {
  setState(previousIds => (
    previousIds.includes(id)
      ? previousIds.filter(previousId => previousId !== id)
      : [...previousIds, id]
  ))
}

export default function DsaTopicRoadmap() {
  const { topicId } = useParams()
  const [openPhaseIds, setOpenPhaseIds] = useState([])
  const [openSectionIds, setOpenSectionIds] = useState([])

  const selectedTopic = dsaLearningPath.topics.find(topic => topic.id === topicId)
  const selectedContent = selectedTopic ? dsaLearningPath.content[selectedTopic.id] : null
  const isPhaseOpen = phaseId => openPhaseIds.includes(phaseId)
  const isSectionOpen = sectionId => openSectionIds.includes(sectionId)

  if (!selectedContent) {
    return (
      <div className="max-w-7xl mx-auto p-4 md:p-10 text-gray-900 dark:text-white transition-colors">
        <h1 className="text-xl md:text-2xl font-bold">Roadmap not found</h1>
        <Link to="/learning-paths/dsa" className="text-cyan-400 hover:underline mt-4 inline-block">
          Back to DSA topics
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 p-4 md:p-10 transition-colors">
      <Link
        to="/learning-paths/dsa"
        className="inline-flex items-center text-cyan-500 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
      >
        <span className="mr-2">&lt;-</span> Back to topic cards
      </Link>

      <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm dark:shadow-none p-5 md:p-8 transition-colors">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">{selectedContent.title}</h1>
        <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300 transition-colors">{selectedContent.intro}</p>
      </section>

      <section className="space-y-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 p-5 md:p-7 transition-colors">
        <div className="space-y-5">
          {selectedContent.phases.map(phase => {
            const phaseOpen = isPhaseOpen(phase.id)
            return (
              <article key={phase.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-4 md:p-5 shadow-sm dark:shadow-none transition-colors">
                <button
                  type="button"
                  onClick={() => toggleOpenId(phase.id, setOpenPhaseIds)}
                  aria-expanded={phaseOpen}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <h3 className="text-base md:text-xl font-semibold text-cyan-600 dark:text-cyan-200 transition-colors leading-tight">{phase.title}</h3>
                  <span className="shrink-0 rounded-md border border-gray-200 dark:border-gray-700 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                    {phaseOpen ? "Hide phase" : "Show phase"}
                  </span>
                </button>

                {phaseOpen && (
                  <>
                    <div className="mt-4 space-y-3">
                      {phase.sections.map((section, sectionIndex) => {
                        const sectionId = `${phase.id}-section-${sectionIndex}`
                        const sectionOpen = isSectionOpen(sectionId)

                        return (
                          <div key={sectionId} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 transition-colors">
                            <button
                              type="button"
                              onClick={() => toggleOpenId(sectionId, setOpenSectionIds)}
                              aria-expanded={sectionOpen}
                              className="w-full flex items-center justify-between gap-4 px-3 md:px-4 py-3 text-left"
                            >
                              <h4 className="font-semibold text-sm md:text-base leading-tight text-gray-900 dark:text-white transition-colors">{section.heading}</h4>
                              <span className="shrink-0 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 transition-colors">
                                {sectionOpen ? "Hide topics" : "Show topics"}
                              </span>
                            </button>

                            {sectionOpen && (
                              <div className="space-y-1 px-3 md:px-4 pb-4 pt-1">
                                {section.points.map((point, pointIndex) => (
                                  <Link
                                    key={`${phase.id}-point-${sectionIndex}-${pointIndex}`}
                                    to={`/dsa/${selectedTopic.id}/${point.id}`}
                                    className="block rounded-md px-2 py-1 text-[13px] md:text-sm leading-5 text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
                                    title={point.title}
                                  >
                                    {point.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {phase.note && (
                      <p className="mt-4 rounded-lg border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/40 p-3 text-xs md:text-sm text-cyan-800 dark:text-cyan-100 transition-colors leading-snug">
                        <span className="font-semibold">Mindset:</span> {phase.note}
                      </p>
                    )}
                  </>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

