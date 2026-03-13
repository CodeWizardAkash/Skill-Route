export const htmlTopicsContent = {
  "what-is-html": {
    title: "What is HTML and Why It Matters",
    explanation:
      "HTML stands for HyperText Markup Language. It is the standard language used to structure content on the web. HTML does not control visual design like CSS and it does not add behavior like JavaScript. Its main job is to describe what each part of a page means: a heading, a paragraph, an image, a link, a form field, or a table.\n\nA browser reads HTML and turns it into the page you see on screen. Good HTML is important because it improves accessibility, helps search engines understand content, and gives CSS and JavaScript a reliable structure to work with.",
    keyPoints: [
      "HTML provides structure and meaning, not final styling.",
      "Browsers parse HTML documents and render them as web pages.",
      "Semantic HTML improves accessibility and SEO.",
      "HTML works together with CSS for design and JavaScript for interactivity."
    ],
    code: "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello, web!</h1>\n    <p>This page is structured with HTML.</p>\n  </body>\n</html>",
    practice: [
      "Explain the difference between HTML, CSS, and JavaScript in one sentence each.",
      "Create a basic HTML file and open it in a browser.",
      "Identify which parts of a page are structure rather than style."
    ]
  },
  "html-elements-and-tags": {
    title: "Elements, Tags, Nesting, and Void Elements",
    explanation:
      "An HTML element usually has an opening tag, content, and a closing tag. For example, a paragraph uses a start tag and an end tag around text. Elements can also be nested, which means one element can sit inside another when the meaning makes sense.\n\nSome elements are void elements, which means they do not wrap content and do not need a closing tag. Common examples are img, br, and hr. Correct nesting matters because browsers may guess incorrectly when markup is broken.",
    keyPoints: [
      "Opening tag + content + closing tag makes a normal element.",
      "Nested elements must close in the correct order.",
      "Void elements do not wrap content.",
      "Lowercase tag names are the common best practice."
    ],
    code: "<p>My cat is <strong>very</strong> curious.</p>\n\n<img src=\"cat.jpg\" alt=\"A curious cat\" />\n<br />\n<hr />",
    practice: [
      "Write one paragraph with a strong word inside it.",
      "Use an image and a line break on the same page.",
      "Check that every opening tag is closed in the right order."
    ]
  },
  "html-attributes-and-paths": {
    title: "Attributes, Quotes, and File Paths",
    explanation:
      "Attributes add extra information to elements. A link uses href to define the destination, and an image uses src and alt to define its source and text alternative. Attribute values should be written in quotes for readability and fewer mistakes.\n\nWhen linking files, you will often use relative paths. A relative path points to a file based on the current file location, such as images/profile.jpg or ./about.html. Understanding paths helps you connect pages, images, stylesheets, and scripts correctly.",
    keyPoints: [
      "Attributes describe or configure an element.",
      "Always prefer quoted attribute values.",
      "Relative paths are common inside projects.",
      "Use meaningful alt and href values instead of placeholder text."
    ],
    code: "<a href=\"./about.html\" title=\"Read more about us\">About Us</a>\n<img src=\"./images/profile.jpg\" alt=\"Profile photo of the author\" width=\"240\" />",
    practice: [
      "Link one HTML file to another using a relative path.",
      "Add an image from a local folder.",
      "Check that every important image has a useful alt description."
    ]
  },
  "html-document-structure": {
    title: "DOCTYPE, html, head, and body",
    explanation:
      "A full HTML document begins with a doctype and then the html element. Inside html, the head contains metadata that helps the browser understand the page, while the body contains the content users actually see.\n\nThis structure is small but essential. It creates a predictable foundation for every page you build, whether it is a tiny practice page or a complete website.",
    keyPoints: [
      "<!doctype html> tells the browser to use modern HTML rules.",
      "<html> is the root element of the page.",
      "<head> stores metadata and setup information.",
      "<body> contains all visible page content."
    ],
    code: "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Starter Page</title>\n  </head>\n  <body>\n    <h1>Welcome</h1>\n    <p>This is the visible content area.</p>\n  </body>\n</html>",
    practice: [
      "Create a blank starter template from memory.",
      "Add lang, charset, title, and one heading.",
      "Open the page in a browser and verify it renders correctly."
    ]
  },
  "head-metadata-and-title": {
    title: "Meta Tags, Title, and Browser Tab Info",
    explanation:
      "The head section contains information about the page rather than page content itself. The title appears in the browser tab and is also used when the page is bookmarked. A charset meta tag helps the page display many languages correctly, and the viewport meta tag supports responsive behavior on phones and tablets.\n\nBeginners often ignore the head, but a clean head section improves usability, search previews, and mobile support.",
    keyPoints: [
      "The title sets the browser tab label.",
      "charset UTF-8 prevents many text encoding problems.",
      "viewport helps responsive layouts behave correctly.",
      "Metadata belongs in head, not in body."
    ],
    code: "<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Portfolio Home</title>\n</head>",
    practice: [
      "Change the title and watch the browser tab update.",
      "Add a viewport tag to a practice page.",
      "Keep head content small and meaningful."
    ]
  },
  "semantic-page-sections": {
    title: "Semantic Layout: header, main, section, footer",
    explanation:
      "Semantic elements describe the role of a block of content. Instead of using many generic div elements, HTML provides landmarks such as header, nav, main, section, article, aside, and footer. These elements make the page easier to understand for developers, search engines, and assistive technology.\n\nA beginner does not need to use every semantic element on every page. The goal is to choose elements that match the meaning of the content.",
    keyPoints: [
      "Semantic elements describe purpose, not just grouping.",
      "main should contain the primary page content.",
      "header and footer usually wrap top and bottom page areas.",
      "Use section or article when the content has its own logical grouping."
    ],
    code: "<body>\n  <header>\n    <h1>My Travel Blog</h1>\n  </header>\n\n  <main>\n    <section>\n      <h2>Latest Post</h2>\n      <p>Notes from my weekend trip.</p>\n    </section>\n  </main>\n\n  <footer>\n    <p>Copyright 2026</p>\n  </footer>\n</body>",
    practice: [
      "Replace one large div-based layout with semantic elements.",
      "Use one main element per page.",
      "Check whether each section has a clear purpose."
    ]
  },
  "headings-and-paragraphs": {
    title: "Headings and Paragraphs",
    explanation:
      "Headings give structure to a page and help readers scan content quickly. HTML provides heading levels from h1 to h6. Paragraphs use the p element to group sentences into readable blocks.\n\nUse headings in a logical order. A page usually starts with one h1, then uses h2 for major sections and h3 for subsections when needed. This hierarchy is valuable for accessibility and for keeping content organized.",
    keyPoints: [
      "Use one clear h1 for the main page heading.",
      "Use h2 and h3 in logical order instead of skipping levels randomly.",
      "Wrap normal text in paragraph elements.",
      "Good structure helps readers, search engines, and screen readers."
    ],
    code: "<h1>Healthy Breakfast Ideas</h1>\n<p>Start your day with simple, balanced meals.</p>\n\n<h2>Quick Options</h2>\n<p>Try yogurt, fruit, and oats for a fast breakfast.</p>",
    practice: [
      "Write a page with one h1 and two h2 sections.",
      "Break long text into multiple paragraphs.",
      "Check whether the heading order matches the content hierarchy."
    ]
  },
  "text-semantics-and-emphasis": {
    title: "Strong, Emphasis, Line Breaks, and Readable Text",
    explanation:
      "HTML includes inline elements for meaning inside text. strong marks content with strong importance, while em adds emphasis. These elements are semantic, so they do more than just change appearance.\n\nUse line breaks sparingly. Most text content should be separated with paragraphs, headings, or lists rather than repeated br tags. Good text structure is easier to style later and easier to read on all screen sizes.",
    keyPoints: [
      "Use strong for importance and em for emphasis.",
      "Prefer paragraphs and lists over many line breaks.",
      "Inline semantics help both readability and meaning.",
      "Clean text structure makes styling easier."
    ],
    code: "<p>Learn <strong>semantic HTML</strong> before styling everything.</p>\n<p><em>Practice consistently</em> and your markup will improve quickly.</p>",
    practice: [
      "Rewrite a wall of text as paragraphs and lists.",
      "Use strong or em only where meaning changes.",
      "Avoid using br as a layout tool."
    ]
  },
  "html-comments-and-entities": {
    title: "Comments and Special Characters",
    explanation:
      "Comments let you leave notes inside HTML that browsers ignore. They are useful for short explanations, reminders, or temporarily hiding small pieces of markup during practice.\n\nSome characters such as less-than signs and ampersands are part of HTML syntax, so they need character entities when shown as plain text. This prevents the browser from confusing content with markup.",
    keyPoints: [
      "Comments are not shown on the page.",
      "Use comments for short notes, not for large hidden code blocks.",
      "Entities help you display special symbols safely.",
      "Common examples include &lt;, &gt;, and &amp;."
    ],
    code: "<!-- Main hero section -->\n<p>Use &lt;p&gt; to create a paragraph.</p>\n<p>Fish &amp; Chips is written with an ampersand entity.</p>",
    practice: [
      "Add one helpful comment to a practice page.",
      "Display a literal HTML tag as text using entities.",
      "Use comments only where they improve clarity."
    ]
  },
  "links-and-navigation": {
    title: "Links, Relative Paths, and Navigation",
    explanation:
      "Links connect the web. The anchor element uses href to point to another page, section, file, or external site. Link text should clearly describe the destination so users know what to expect before clicking.\n\nFor internal projects, relative links are common because they keep folders portable. You can also link to sections on the same page using IDs, which is useful for simple navigation menus and table-of-contents patterns.",
    keyPoints: [
      "Use descriptive link text instead of vague labels like click here.",
      "Use relative paths for local project pages.",
      "Use target and rel carefully for external links when needed.",
      "Link to sections with IDs for quick navigation."
    ],
    code: "<nav>\n  <a href=\"./index.html\">Home</a>\n  <a href=\"./contact.html\">Contact</a>\n  <a href=\"#faq\">Jump to FAQ</a>\n</nav>\n\n<section id=\"faq\">\n  <h2>FAQ</h2>\n</section>",
    practice: [
      "Create a mini navigation bar with three links.",
      "Add one internal page link and one section jump link.",
      "Review whether each link label explains the destination clearly."
    ]
  },
  "images-and-alt-text": {
    title: "Images, Alt Text, and Figure Captions",
    explanation:
      "The img element displays an image, but accessible image use requires more than just src. The alt attribute should describe the image when it carries meaning. If the image is decorative and adds no information, alt can be empty so screen readers do not announce unnecessary content.\n\nFor images that need a visible caption, figure and figcaption work well together. They help pair an image with supporting text such as a label, credit, or explanation.",
    keyPoints: [
      "Every meaningful image needs useful alt text.",
      "Decorative images should usually use an empty alt value.",
      "figure and figcaption are helpful for labeled visuals.",
      "Keep file names and folder paths organized."
    ],
    code: "<figure>\n  <img src=\"./images/mountains.jpg\" alt=\"Snow-covered mountains during sunrise\" width=\"360\" />\n  <figcaption>Morning view from the hiking trail.</figcaption>\n</figure>",
    practice: [
      "Add one meaningful image with alt text.",
      "Write alt text that describes purpose, not every tiny detail.",
      "Use figure and figcaption for one photo with context."
    ]
  },
  "media-and-embed-basics": {
    title: "Audio, Video, and Embeds at a Beginner Level",
    explanation:
      "HTML also supports media elements such as audio and video. These elements can include controls so users can play, pause, and adjust playback. Beginners should focus on the basic structure first and avoid overloading pages with large files.\n\nWhen embedding media, always think about user experience. Provide controls, meaningful labels, and fallback text where possible.",
    keyPoints: [
      "audio and video can include built-in browser controls.",
      "Use source files that are easy to load and test locally.",
      "Media should support the content, not distract from it.",
      "Provide text context around media elements."
    ],
    code: "<video controls width=\"420\">\n  <source src=\"./media/intro.mp4\" type=\"video/mp4\" />\n  Your browser does not support the video tag.\n</video>",
    practice: [
      "Embed one short video with controls.",
      "Place a heading or caption above the media.",
      "Check how the media behaves on a smaller screen."
    ]
  },
  "lists-basics": {
    title: "Ordered, Unordered, and Description Lists",
    explanation:
      "Lists are a clean way to group related items. Use unordered lists for items where order does not matter, ordered lists for sequences or steps, and description lists for term-and-definition style content.\n\nLists are often easier to scan than plain paragraphs. They are useful for menus, instructions, feature summaries, FAQs, and learning notes.",
    keyPoints: [
      "Use ul for unordered items and ol for ordered steps.",
      "Use li for each list item.",
      "Use dl with dt and dd for term-definition pairs.",
      "Lists improve readability and scanning."
    ],
    code: "<h2>Morning Routine</h2>\n<ol>\n  <li>Wake up</li>\n  <li>Drink water</li>\n  <li>Review goals</li>\n</ol>\n\n<ul>\n  <li>Notebook</li>\n  <li>Pen</li>\n  <li>Laptop</li>\n</ul>",
    practice: [
      "Create one ordered and one unordered list.",
      "Turn a comma-separated paragraph into a list.",
      "Use a description list for three web terms."
    ]
  },
  "tables-basics": {
    title: "Create Simple Tables with Rows and Cells",
    explanation:
      "Tables are meant for structured data such as schedules, product comparisons, or scoreboards. A simple table uses table, tr, th, and td. Rows are created with tr, header cells with th, and normal data cells with td.\n\nBeginners should first learn how to build a small readable table before moving to advanced features like spanning rows or columns.",
    keyPoints: [
      "Use tables for data, not for page layout.",
      "th is for header cells and td is for data cells.",
      "A clear header row makes data easier to understand.",
      "Keep beginner tables small and readable."
    ],
    code: "<table>\n  <tr>\n    <th>Day</th>\n    <th>Task</th>\n  </tr>\n  <tr>\n    <td>Monday</td>\n    <td>Practice HTML</td>\n  </tr>\n  <tr>\n    <td>Tuesday</td>\n    <td>Review forms</td>\n  </tr>\n</table>",
    practice: [
      "Build a two-column study plan table.",
      "Use th for headings rather than plain td cells.",
      "Check whether the same information would be better as a list."
    ]
  },
  "tables-accessibility": {
    title: "Captions, Headers, and When to Use Tables",
    explanation:
      "A good table is not only visually neat, it is also understandable for assistive technology. Adding a caption helps explain what the table contains, and using header cells with proper scope improves interpretation.\n\nIf the content is not really tabular, do not use a table. Many beginner pages are more readable with cards, lists, or sections instead.",
    keyPoints: [
      "caption gives users quick context for the table.",
      "Header cells help screen readers interpret relationships.",
      "Use scope when it improves table clarity.",
      "Never use tables just to place content side by side."
    ],
    code: "<table>\n  <caption>Weekly Study Hours</caption>\n  <tr>\n    <th scope=\"col\">Subject</th>\n    <th scope=\"col\">Hours</th>\n  </tr>\n  <tr>\n    <td>HTML</td>\n    <td>4</td>\n  </tr>\n</table>",
    practice: [
      "Add a caption to one of your practice tables.",
      "Review whether your headers match the data below them.",
      "Replace layout-style tables with more semantic markup."
    ]
  },
  "forms-basics": {
    title: "Form Element, Labels, and Inputs",
    explanation:
      "Forms let users send information such as names, emails, feedback, and preferences. The form element wraps the complete input area, while label connects readable text to a specific field. This connection is one of the most important accessibility basics in HTML forms.\n\nA beginner-friendly form starts small: a label, an input, and a submit button. Once that structure feels natural, you can add more controls and validation.",
    keyPoints: [
      "Every important input should have a visible label.",
      "The for attribute on label should match the input id.",
      "Use type values such as text, email, and password appropriately.",
      "Start simple before creating larger forms."
    ],
    code: "<form>\n  <label for=\"name\">Full Name</label>\n  <input id=\"name\" type=\"text\" name=\"name\" />\n\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\" name=\"email\" />\n\n  <button type=\"submit\">Send</button>\n</form>",
    practice: [
      "Create a contact form with two fields and a button.",
      "Click on the labels to verify they focus the correct inputs.",
      "Use suitable input types instead of leaving every field as text."
    ]
  },
  "common-form-controls": {
    title: "Buttons, Select, Textarea, Checkbox, and Radio",
    explanation:
      "Not every question should use a plain text input. HTML provides different controls for different kinds of input. Use textarea for longer responses, select for a menu of options, checkbox for zero-or-more choices, and radio buttons when the user must choose exactly one option from a group.\n\nChoosing the right control makes forms easier to complete and easier to understand.",
    keyPoints: [
      "Use textarea for multi-line input.",
      "Use select when choices come from a short predefined list.",
      "Use checkbox for optional multiple selections.",
      "Use radio buttons when only one answer is allowed."
    ],
    code: "<label for=\"topic\">Choose a topic</label>\n<select id=\"topic\" name=\"topic\">\n  <option>HTML</option>\n  <option>CSS</option>\n  <option>JavaScript</option>\n</select>\n\n<label for=\"message\">Message</label>\n<textarea id=\"message\" name=\"message\"></textarea>",
    practice: [
      "Add one select and one textarea to a form.",
      "Create one radio group and one checkbox option set.",
      "Ask whether each control matches the kind of answer you want."
    ]
  },
  "form-validation-and-accessibility": {
    title: "Required Fields, Validation, and Accessible Forms",
    explanation:
      "HTML offers helpful built-in validation through attributes like required, minlength, maxlength, and placeholder. Input types such as email also provide useful browser-level checks. These features improve the user experience, but they do not replace thoughtful labels, clear instructions, and good error messaging.\n\nAccessible forms are clear, consistent, and usable with keyboard navigation. Avoid relying only on color to signal errors or status.",
    keyPoints: [
      "Use required and appropriate input types for basic validation.",
      "Keep labels visible instead of depending only on placeholders.",
      "Make forms keyboard-friendly and easy to scan.",
      "Helpful instructions reduce user mistakes."
    ],
    code: "<form>\n  <label for=\"user-email\">Email Address</label>\n  <input id=\"user-email\" type=\"email\" required />\n\n  <label for=\"password\">Password</label>\n  <input id=\"password\" type=\"password\" minlength=\"8\" required />\n\n  <button type=\"submit\">Create Account</button>\n</form>",
    practice: [
      "Add required validation to at least two fields.",
      "Test the form using only keyboard navigation.",
      "Check that users can understand every field without guessing."
    ]
  },
  "build-a-simple-profile-page": {
    title: "Mini Project: Build a Personal Profile Page",
    explanation:
      "A small project is the best way to combine everything you learned. A personal profile page can include a proper document structure, headings, paragraphs, a photo, links, lists, and a simple contact form.\n\nThe goal is not to make a perfect portfolio yet. The goal is to use semantic HTML confidently and organize content in a clear, beginner-friendly way.",
    keyPoints: [
      "Use one page to combine headings, media, lists, and links.",
      "Add semantic sections like header, main, and footer.",
      "Include at least one accessible image and one simple form.",
      "Review your page structure before moving on to CSS styling."
    ],
    code: "<header>\n  <h1>Aryan Sharma</h1>\n  <p>Beginner frontend learner building with HTML.</p>\n</header>\n\n<main>\n  <section>\n    <h2>About Me</h2>\n    <p>I enjoy learning web development step by step.</p>\n  </section>\n\n  <section>\n    <h2>Skills I Am Learning</h2>\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </section>\n</main>",
    practice: [
      "Build the page in one HTML file first.",
      "Include one image, one list, and one small form.",
      "After structure is solid, then move to CSS styling."
    ]
  },
  "inspect-and-debug-html": {
    title: "Inspect, Validate, and Debug Your HTML",
    explanation:
      "Writing HTML is only half the job. Beginners improve much faster when they inspect the page in the browser, check whether links and images work, and look for structure mistakes like missing closing tags or incorrect nesting. Browser developer tools help you see the final HTML that the browser understands.\n\nValidation is also useful. If a heading order is confusing, an image path is broken, or a label is not connected to an input, you can catch that early before moving on to CSS or JavaScript. This habit builds confidence and cleaner markup.",
    keyPoints: [
      "Use browser inspection tools to review your page structure.",
      "Test links, images, and forms after every small change.",
      "Look for missing closing tags, broken nesting, or wrong file paths.",
      "Fix structure problems before adding styling or scripting."
    ],
    code: "<main>\n  <section>\n    <h1>My Practice Page</h1>\n    <img src=\"./images/avatar.png\" alt=\"Profile photo\" />\n    <a href=\"./contact.html\">Contact</a>\n  </section>\n</main>\n\n<!-- Debug checklist -->\n<!-- 1. Does the image path work? -->\n<!-- 2. Does the link open correctly? -->\n<!-- 3. Are tags nested and closed properly? -->",
    practice: [
      "Open one HTML page in the browser and inspect the elements panel.",
      "Intentionally break one image path, then fix it after noticing the error.",
      "Review one form and confirm every input has a connected label."
    ]
  },
  "html-best-practices-checklist": {
    title: "Checklist: Semantic, Clean, and Accessible HTML",
    explanation:
      "Before moving on, review your HTML with a checklist. Strong beginner HTML is readable in the editor, meaningful in structure, and understandable without visual styling.\n\nThis habit pays off later when projects become larger. Clean markup is easier to style, debug, and maintain.",
    keyPoints: [
      "Use semantic elements whenever they match the content purpose.",
      "Keep headings in a logical order.",
      "Add alt text, labels, and meaningful link text.",
      "Write consistent indentation and avoid unnecessary wrapper elements."
    ],
    code: "<!-- Quick self-check -->\n<!-- 1. One clear h1 -->\n<!-- 2. Semantic sections -->\n<!-- 3. Meaningful alt text -->\n<!-- 4. Labels connected to inputs -->\n<!-- 5. Clean indentation and readable markup -->",
    practice: [
      "Open one old practice page and refactor it with semantic tags.",
      "Check whether every form field has a label.",
      "Confirm that your page still makes sense even before CSS is added."
    ]
  }
}
