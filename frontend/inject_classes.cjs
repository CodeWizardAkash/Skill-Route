const fs = require('fs');

const path = 'C:/Users/pc/OneDrive/Desktop/skillroute/Skill-Route/frontend/src/data/dsaTopicsContent.jsx';
let content = fs.readFileSync(path, 'utf8');

const llIndex = content.indexOf('// ---- LINKED LIST ----');
const nextSectionIndex = content.indexOf('// ---- STACK ----'); // Assuming Stack comes after, or we go to end

let preLL = content.substring(0, llIndex);
let llSection = content.substring(llIndex, nextSectionIndex !== -1 ? nextSectionIndex : undefined);
let postLL = nextSectionIndex !== -1 ? content.substring(nextSectionIndex) : '';

const cppPrefix = `#include <iostream>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev; // For Doubly Linked List\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\n`;

const javaPrefix = `import java.util.*;\\n\\nclass Node {\\n    int data;\\n    Node next;\\n    Node prev; // For Doubly Linked List\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\n`;

// Safely prepend within code object definitions.
// We look for: cpp: "something" or cpp: \`something\`
// Using regex to replace `cpp: "` with `cpp: "${cppPrefix}`
// And `cpp: \`` with `cpp: \`${cppPrefix}`

llSection = llSection.replace(/(cpp:\s*)(["'`])/g, `$1$2${cppPrefix}`);
llSection = llSection.replace(/(java:\s*)(["'`])/g, `$1$2${javaPrefix}`);

// Remove potential double injections if the script runs twice
const dupeCpp = cppPrefix + cppPrefix;
const dupeJava = javaPrefix + javaPrefix;
llSection = llSection.split(dupeCpp).join(cppPrefix);
llSection = llSection.split(dupeJava).join(javaPrefix);

fs.writeFileSync(path, preLL + llSection + postLL, 'utf8');
console.log("Successfully injected Node class into all LinkedList code snippets!");
