const htmlLearningPath = {
  hero: {
    title: "HTML Basics",
    subtitle: "Build a strong foundation in semantic HTML, page structure, media, tables, and beginner-friendly forms.",
    audience: "Designed for beginners who want to create well-structured web pages before moving deeper into CSS and JavaScript."
  },
  topics: [
    {
      id: "html-basics",
      title: "HTML Basics",
      shortDescription: "A complete beginner roadmap covering structure, text, links, media, tables, and forms."
    }
  ],
  content: {
    "html-basics": {
      title: "HTML Basics Roadmap",
      intro:
        "This roadmap follows the same progressive style as the AI/ML Python Basics topic: start with what HTML is, learn how a document is structured, then practice text content, links, images, tables, and forms in a beginner-friendly sequence.",
      phases: [
        {
          id: "html-phase-1",
          title: "PHASE 1: WHAT HTML IS AND HOW IT WORKS",
          sections: [
            {
              heading: "1) Core Foundations",
              points: [
                { id: "what-is-html", title: "What is HTML and why it matters" },
                { id: "html-elements-and-tags", title: "Elements, tags, nesting, and void elements" },
                { id: "html-attributes-and-paths", title: "Attributes, quotes, and file paths" }
              ]
            }
          ],
          note: "Think of HTML as the structure of a house. It gives meaning and layout to content before styling begins."
        },
        {
          id: "html-phase-2",
          title: "PHASE 2: HTML DOCUMENT STRUCTURE",
          sections: [
            {
              heading: "2) Building a Real Page Skeleton",
              points: [
                { id: "html-document-structure", title: "DOCTYPE, html, head, and body" },
                { id: "head-metadata-and-title", title: "Meta tags, title, and browser tab info" },
                { id: "semantic-page-sections", title: "Semantic layout: header, main, section, footer" }
              ]
            }
          ],
          note: "A predictable structure makes your page easier to maintain, style, and understand."
        },
        {
          id: "html-phase-3",
          title: "PHASE 3: HEADINGS, PARAGRAPHS, AND TEXT CONTENT",
          sections: [
            {
              heading: "3) Writing Readable Content",
              points: [
                { id: "headings-and-paragraphs", title: "Headings and paragraphs" },
                { id: "text-semantics-and-emphasis", title: "Strong, emphasis, line breaks, and readable text" },
                { id: "html-comments-and-entities", title: "Comments and special characters" }
              ]
            }
          ],
          note: "Use headings in order and write short paragraphs so both humans and screen readers can navigate the page easily."
        },
        {
          id: "html-phase-4",
          title: "PHASE 4: LINKS, IMAGES, AND MEDIA BASICS",
          sections: [
            {
              heading: "4) Connecting Pages and Content",
              points: [
                { id: "links-and-navigation", title: "Links, relative paths, and navigation" },
                { id: "images-and-alt-text", title: "Images, alt text, and figure captions" },
                { id: "media-and-embed-basics", title: "Audio, video, and embeds at a beginner level" }
              ]
            }
          ],
          note: "Every image and link should serve a purpose. Clear labels and alt text make pages more accessible."
        },
        {
          id: "html-phase-5",
          title: "PHASE 5: LISTS AND TABLES",
          sections: [
            {
              heading: "5) Organizing Information",
              points: [
                { id: "lists-basics", title: "Ordered, unordered, and description lists" },
                { id: "tables-basics", title: "Create simple tables with rows and cells" },
                { id: "tables-accessibility", title: "Captions, headers, and when to use tables" }
              ]
            }
          ],
          note: "Lists are for grouped items. Tables are for real tabular data, not for visual page layout."
        },
        {
          id: "html-phase-6",
          title: "PHASE 6: FORMS BASICS",
          sections: [
            {
              heading: "6) Collecting Input from Users",
              points: [
                { id: "forms-basics", title: "Form element, labels, and inputs" },
                { id: "common-form-controls", title: "Buttons, select, textarea, checkbox, and radio" },
                { id: "form-validation-and-accessibility", title: "Required fields, validation, and accessible forms" }
              ]
            }
          ],
          note: "A beginner form should be simple, clearly labeled, and easy to complete on both mobile and desktop."
        },
        {
          id: "html-phase-7",
          title: "PHASE 7: PRACTICE AND NEXT STEPS",
          sections: [
            {
              heading: "7) Apply What You Learned",
              points: [
                { id: "build-a-simple-profile-page", title: "Mini project: build a personal profile page" },
                { id: "inspect-and-debug-html", title: "Inspect, validate, and debug your HTML" },
                { id: "html-best-practices-checklist", title: "Checklist: semantic, clean, and accessible HTML" }
              ]
            }
          ],
          note: "The fastest way to improve is to build small pages, inspect them in the browser, and keep refining your structure."
        }
      ]
    }
  }
}

export default htmlLearningPath
