const dsaLearningPath = {
  hero: {
    title: "DSA Learning Router",
    subtitle:
      "Select a topic card below to view its detailed, phase-wise roadmap. You can click on the roadmap points to see practical code examples.",
    audience: "Current focus: Arrays, Strings, and Recursion."
  },
  topics: [
    {
      id: "arrays",
      title: "Arrays",
      shortDescription:
        "Phase-wise array roadmap: beginner basics to interview-level questions."
    },
    {
      id: "strings",
      title: "Strings",
      shortDescription:
        "Beginner-to-advanced string roadmap with patterns and interview prep."
    },
    {
      id: "recursion",
      title: "Recursion",
      shortDescription:
        "Beginner-to-advanced recursion roadmap with important interview questions."
    },
    {
      id: "linkedlist",
      title: "Linked List",
      shortDescription:
        "Beginner-to-advanced linked list roadmap covering basic concepts, variations, and advanced manipulations."
    }
  ],
  content: {
    arrays: {
      title: "Arrays Roadmap",
      intro:
        "Mastering arrays is the foundation of DSA. Follow this phased approach: start with fundamentals, build logic patterns, and advance to interview-level problem solving.",
      phases: [
        {
          id: "phase-1",
          title: "PHASE 1: ARRAY BASICS (Beginner)",
          sections: [
            {
              heading: "1) Crystal Clear Concepts",
              points: [
                { id: "array-definition", title: "What is an Array (Continuous Memory)" },
                { id: "array-indexing", title: "Indexing (0-based)" },
                { id: "size-vs-capacity", title: "Size vs Capacity" },
                { id: "array-traversal", title: "Traversal using loops" },
                { id: "time-complexity-basics", title: "Complexity basics: Access O(1), Traversal/Search O(n)" }
              ]
            },
            {
              heading: "2) Must-do Basic Operations",
              points: [
                { id: "print-array", title: "Print array" },
                { id: "take-input-output", title: "Take input and output" },
                { id: "find-max-min", title: "Find max and min" },
                { id: "sum-and-average", title: "Sum and average" },
                { id: "count-even-odd", title: "Count even and odd" },
                { id: "reverse-array", title: "Reverse array" }
              ]
            }
          ],
          note: "Viewing every element once = O(n)."
        },
        {
          id: "phase-2",
          title: "PHASE 2: LOGIC BUILDING (Beginner -> Intermediate)",
          sections: [
            {
              heading: "3) Searching Techniques",
              points: [
                { id: "linear-search", title: "Linear Search" },
                { id: "binary-search", title: "Binary Search (Sorted arrays only)" },
                { id: "binary-search-logic", title: "Binary Search logic: low-high-mid, loop vs recursion" },
                { id: "searching-practice", title: "Practice: presence, first/last occurrence, count" }
              ]
            },
            {
              heading: "4) Sorting Basics (Conceptual Understanding)",
              points: [
                { id: "bubble-sort", title: "Bubble Sort" },
                { id: "selection-sort", title: "Selection Sort" },
                { id: "insertion-sort", title: "Insertion Sort" },
                { id: "sorting-focus", title: "Focus: swapping, best/worst cases, stability basics" }
              ]
            }
          ]
        },
        {
          id: "phase-3",
          title: "PHASE 3: INTERMEDIATE ARRAY PATTERNS (Very Important)",
          sections: [
            {
              heading: "5) Two Pointer Technique",
              points: [
                { id: "two-pointer-usage", title: "Use case: sorted arrays and opposite-end processing" },
                { id: "two-pointer-practice", title: "Practice: reverse, pair sum, move zeroes, sort 0/1/2" }
              ]
            },
            {
              heading: "6) Sliding Window Technique",
              points: [
                { id: "sliding-window-usage", title: "Use case: continuous window (fixed/variable)" },
                { id: "sliding-window-practice", title: "Practice: max-sum K, min length >= X, longest valid" },
                { id: "subarray-rule", title: "Rule: Subarrays must be continuous elements" }
              ]
            },
            {
              heading: "7) Prefix Sum",
              points: [
                { id: "prefix-sum-usage", title: "Use case: range-sum queries and subarray sums" },
                { id: "prefix-sum-practice", title: "Practice: range sum L-R, sum = K, equilibrium index" }
              ]
            }
          ]
        },
        {
          id: "phase-4",
          title: "PHASE 4: ADVANCED ARRAY CONCEPTS",
          sections: [
            {
              heading: "8) Kadane's Algorithm",
              points: [
                { id: "kadanes-usage", title: "Use case: Maximum subarray sum" },
                { id: "kadanes-mindset", title: "Mindset: reset on negative running sum" }
              ]
            },
            {
              heading: "9) Hashing with Arrays",
              points: [
                { id: "hashing-usage", title: "Use case: frequency, duplicates, quick lookup" },
                { id: "hashing-practice", title: "Practice: two sum, majority, first repeat, longest sum 0" }
              ]
            },
            {
              heading: "10) Sorting + Logic Combined",
              points: [
                { id: "merge-intervals", title: "Merge intervals" },
                { id: "rearrange-array", title: "Rearrange arrays" },
                { id: "missing-repeating-number", title: "Missing & repeating numbers" },
                { id: "next-permutation", title: "Next permutation" }
              ]
            }
          ]
        },
        {
          id: "phase-5",
          title: "PHASE 5: ADVANCED PATTERNS (Interview Level)",
          sections: [
            {
              heading: "11) Cyclic Sort Pattern",
              points: [
                { id: "cyclic-sort-usage", title: "Use case: Numbers fall within the range of 1 to N" },
                { id: "cyclic-sort-practice", title: "Practice: missing, duplicate, and all missing numbers" }
              ]
            },
            {
              heading: "12) Matrices (2D Arrays)",
              points: [
                { id: "row-wise-traversal", title: "Row-wise traversal" },
                { id: "col-wise-traversal", title: "Column-wise traversal" },
                { id: "spiral-matrix", title: "Spiral matrix traversal" },
                { id: "search-sorted-matrix", title: "Search in a sorted matrix" }
              ]
            }
          ]
        }
      ]
    },
    strings: {
      title: "Strings Roadmap",
      intro:
        "Strings are one of the most frequently asked DSA domains. Start from core operations, move to pattern-based problem solving, then learn advanced matching and DP on strings.",
      phases: [
        {
          id: "s-phase-1",
          title: "PHASE 1: STRING BASICS (Beginner)",
          sections: [
            {
              heading: "1) Crystal Clear Concepts",
              points: [
                { id: "string-definition", title: "What is a String (Character Sequence)" },
                { id: "char-vs-string", title: "Char vs String and ASCII/Unicode basics" },
                { id: "string-indexing-traversal", title: "Indexing and traversal in strings" },
                { id: "string-immutability", title: "Java String immutability vs C++ string updates" },
                { id: "string-complexity", title: "Complexity basics of common string operations" }
              ]
            },
            {
              heading: "2) Must-do Basic Operations",
              points: [
                { id: "string-input-output", title: "Take string input and output" },
                { id: "string-length-concat", title: "Length, concatenation, and append" },
                { id: "reverse-string-basic", title: "Reverse a string" },
                { id: "palindrome-check-basic", title: "Check if a string is palindrome" },
                { id: "string-frequency-basic", title: "Character frequency counting" }
              ]
            }
          ],
          note: "A string is often solved like an array of characters with extra rules."
        },
        {
          id: "s-phase-2",
          title: "PHASE 2: LOGIC BUILDING (Beginner -> Intermediate)",
          sections: [
            {
              heading: "3) Core Problem Types",
              points: [
                { id: "substring-vs-subsequence", title: "Substring vs Subsequence" },
                { id: "anagram-check", title: "Anagram check (sorting vs frequency)" },
                { id: "first-non-repeating-char", title: "First non-repeating character" },
                { id: "longest-common-prefix", title: "Longest common prefix" },
                { id: "reverse-words-sentence", title: "Reverse words in a sentence" }
              ]
            },
            {
              heading: "4) Guided Practice Set",
              points: [
                { id: "basic-string-practice-set", title: "Practice set: beginner to intermediate" }
              ]
            }
          ]
        },
        {
          id: "s-phase-3",
          title: "PHASE 3: CORE STRING PATTERNS (Important)",
          sections: [
            {
              heading: "5) Two Pointers and Sliding Window",
              points: [
                { id: "two-pointers-strings-usage", title: "Use case: Two pointers on strings" },
                { id: "longest-substring-without-repeat", title: "Longest substring without repeating characters" },
                { id: "min-window-substring", title: "Minimum window substring" }
              ]
            },
            {
              heading: "6) Hashing + Buckets",
              points: [
                { id: "group-anagrams", title: "Group anagrams" },
                { id: "string-pattern-practice-set", title: "Practice set: sliding window + hashing" }
              ]
            }
          ]
        },
        {
          id: "s-phase-4",
          title: "PHASE 4: ADVANCED STRING ALGORITHMS",
          sections: [
            {
              heading: "7) Pattern Matching Algorithms",
              points: [
                { id: "kmp-intuition", title: "KMP intuition" },
                { id: "lps-array-construction", title: "LPS array construction" },
                { id: "rabin-karp-intro", title: "Rabin-Karp (rolling hash) intro" },
                { id: "z-algorithm-intro", title: "Z algorithm intro" }
              ]
            },
            {
              heading: "8) Advanced Practice",
              points: [
                { id: "advanced-string-practice-set", title: "Practice set: advanced pattern matching" }
              ]
            }
          ]
        },
        {
          id: "s-phase-5",
          title: "PHASE 5: INTERVIEW LEVEL (DP + MIXED PROBLEMS)",
          sections: [
            {
              heading: "9) Dynamic Programming on Strings",
              points: [
                { id: "lcs-dp", title: "Longest Common Subsequence (LCS)" },
                { id: "edit-distance-dp", title: "Edit Distance" },
                { id: "word-break-problem", title: "Word Break problem" }
              ]
            },
            {
              heading: "10) Extensions and Revision",
              points: [
                { id: "trie-strings-basics", title: "Trie basics for string dictionaries" },
                { id: "string-interview-sheet", title: "Final revision checklist for interviews" }
              ]
            }
          ]
        }
      ]
    },
    recursion: {
      title: "Recursion Roadmap",
      intro:
        "Recursion builds problem-solving depth for DSA. Start from base-case clarity, then move into pattern-based recursion, backtracking, divide-and-conquer, and memoization.",
      phases: [
        {
          id: "r-phase-1",
          title: "PHASE 1: RECURSION BASICS (Beginner)",
          sections: [
            {
              heading: "1) Crystal Clear Concepts",
              points: [
                { id: "recursion-definition", title: "What is Recursion (Function calling itself)" },
                { id: "base-case-vs-recursive-case", title: "Base case vs Recursive case" },
                { id: "recursion-call-stack", title: "Call stack and stack frames" },
                { id: "recursion-tree-dry-run", title: "Dry run using recursion tree" }
              ]
            },
            {
              heading: "2) Starter Questions",
              points: [
                { id: "print-1-to-n-recursion", title: "Print 1 to N using recursion" },
                { id: "factorial-recursion", title: "Factorial using recursion" },
                { id: "fibonacci-recursion", title: "Fibonacci recursion (and its cost)" },
                { id: "reverse-array-recursion", title: "Reverse an array recursively" }
              ]
            }
          ],
          note: "Every recursive call must move closer to a valid base case."
        },
        {
          id: "r-phase-2",
          title: "PHASE 2: LOGIC BUILDING (Beginner -> Intermediate)",
          sections: [
            {
              heading: "3) Recursion Patterns and Analysis",
              points: [
                { id: "parameterized-vs-functional-recursion", title: "Parameterized vs Functional recursion" },
                { id: "recurrence-time-complexity", title: "Recurrence relation and complexity intuition" },
                { id: "divide-choose-not-choose", title: "Divide and choose/not-choose thinking" },
                { id: "binary-search-recursive", title: "Binary Search with recursion" }
              ]
            },
            {
              heading: "4) Core Intermediate Questions",
              points: [
                { id: "check-palindrome-recursive", title: "Check palindrome recursively" },
                { id: "power-fast-exponentiation-recursive", title: "Power(x, n) with fast recursion" },
                { id: "recursion-easy-practice-set", title: "Practice set: easy to intermediate recursion" }
              ]
            }
          ]
        },
        {
          id: "r-phase-3",
          title: "PHASE 3: BACKTRACKING FOUNDATION (Important)",
          sections: [
            {
              heading: "5) Include/Exclude Pattern",
              points: [
                { id: "subsequences-generation", title: "Generate all subsequences" },
                { id: "subset-sum-k", title: "Subset sum equals K" },
                { id: "combination-sum", title: "Combination Sum" },
                { id: "permutations-recursion", title: "Generate permutations" }
              ]
            },
            {
              heading: "6) Constraint-Based Backtracking",
              points: [
                { id: "n-queens-backtracking", title: "N-Queens" },
                { id: "rat-in-maze", title: "Rat in a Maze" },
                { id: "sudoku-solver-backtracking", title: "Sudoku Solver" }
              ]
            }
          ]
        },
        {
          id: "r-phase-4",
          title: "PHASE 4: ADVANCED RECURSION APPLICATIONS",
          sections: [
            {
              heading: "7) Divide and Conquer",
              points: [
                { id: "merge-sort-recursion", title: "Merge Sort" },
                { id: "quick-sort-recursion", title: "Quick Sort" },
                { id: "tower-of-hanoi", title: "Tower of Hanoi" }
              ]
            },
            {
              heading: "8) Tree Recursion",
              points: [
                { id: "tree-traversals-recursion", title: "Recursive DFS traversals (Pre/In/Post)" },
                { id: "tree-height-diameter-recursion", title: "Tree height and diameter" },
                { id: "lca-recursion", title: "Lowest Common Ancestor (Binary Tree)" }
              ]
            }
          ]
        },
        {
          id: "r-phase-5",
          title: "PHASE 5: OPTIMIZATION + INTERVIEW MASTERY",
          sections: [
            {
              heading: "9) Recursion to DP Bridge",
              points: [
                { id: "memoization-basics", title: "Memoization basics" },
                { id: "climb-stairs-recursion-dp", title: "Climbing Stairs: recursion -> memoization" },
                { id: "knapsack-recursion-memo", title: "0/1 Knapsack: recursive + memoized" }
              ]
            },
            {
              heading: "10) Final Practice and Revision",
              points: [
                { id: "recursion-medium-hard-practice-set", title: "Practice set: medium to hard recursion/backtracking" },
                { id: "recursion-interview-checklist", title: "Final recursion interview checklist" }
              ]
            }
          ]
        }
      ]
    },
    linkedlist: {
      title: "Linked List Roadmap",
      intro:
        "Linked Lists are fundamental data structures that solve memory contiguity issues. Progress from basic node creation to advanced pointer manipulations.",
      phases: [
        {
          id: "ll-phase-1",
          title: "1️⃣ Introduction to Linked List",
          sections: [
            {
              heading: "Basics of Linked List",
              points: [
                { id: "linkedlist-definition", title: "What is a Linked List" },
                { id: "linkedlist-vs-array", title: "Why Linked List over Array" },
                { id: "node-creation", title: "Node structure & Memory representation" },
                { id: "linkedlist-types-overview", title: "Types of Linked Lists overview" }
              ]
            }
          ],
          note: "Always keep track of the head pointer, and use temporary pointers for traversal to avoid losing the list."
        },
        {
          id: "ll-phase-2",
          title: "2️⃣ Singly Linked List (Basic)",
          sections: [
            {
              heading: "Operations",
              points: [
                { id: "linkedlist-create-traverse", title: "Creating & Traversing a Linked List" },
                { id: "insert-at-head", title: "Insert at Beginning" },
                { id: "insert-at-tail", title: "Insert at End" },
                { id: "insert-at-position", title: "Insert at Specific Position" },
                { id: "delete-at-head", title: "Delete from Beginning" },
                { id: "delete-at-tail", title: "Delete from End" },
                { id: "delete-by-value", title: "Delete at Position / by Value" },
                { id: "linkedlist-search", title: "Search in Linked List" },
                { id: "linkedlist-length", title: "Length of Linked List" }
              ]
            }
          ]
        },
        {
          id: "ll-phase-3",
          title: "3️⃣ Intermediate Operations",
          sections: [
            {
              heading: "Reversal & Nth Node",
              points: [
                { id: "reverse-linkedlist", title: "Reverse a Linked List (Iterative & Recursive)" },
                { id: "middle-of-linkedlist", title: "Find Middle of Linked List" },
                { id: "nth-node-from-end", title: "Find/Remove Nth Node from End" }
              ]
            },
            {
              heading: "Cycle Detection",
              points: [
                { id: "detect-cycle", title: "Detect Loop (Floyd’s Cycle Detection)" },
                { id: "starting-point-of-cycle", title: "Find Starting Node & Remove Loop" }
              ]
            }
          ]
        },
        {
          id: "ll-phase-4",
          title: "4️⃣ Advanced Problems",
          sections: [
            {
              heading: "Sorting & Merging",
              points: [
                { id: "merge-two-sorted-lists", title: "Merge Two Sorted Linked Lists" },
                { id: "merge-k-sorted-lists", title: "Merge K Sorted Linked Lists" },
                { id: "remove-duplicates-sorted", title: "Remove Duplicates (Sorted & Unsorted)" }
              ]
            },
            {
              heading: "Reordering",
              points: [
                { id: "reverse-nodes-k-group", title: "Reverse Linked List in K Groups" },
                { id: "check-palindrome-linkedlist", title: "Check if Linked List is Palindrome" },
                { id: "intersection-of-two-lists", title: "Intersection of Two Linked Lists" },
                { id: "rotate-linkedlist", title: "Rotate & Partition Linked List" }
              ]
            }
          ]
        },
        {
          id: "ll-phase-5",
          title: "5️⃣ Doubly Linked List",
          sections: [
            {
              heading: "Core Features",
              points: [
                { id: "doubly-linkedlist", title: "Structure of Doubly Linked List" },
                { id: "dll-insert-delete", title: "Insert & Delete (Beginning/End/Pos)" },
                { id: "dll-reverse", title: "Reverse Doubly Linked List" }
              ]
            }
          ]
        },
        {
          id: "ll-phase-6",
          title: "6️⃣ Circular Linked List",
          sections: [
            {
              heading: "Core Features",
              points: [
                { id: "circular-linkedlist", title: "Circular Linked List Introduction" },
                { id: "cll-operations", title: "Insert, Delete & Traverse" }
              ]
            }
          ]
        },
        {
          id: "ll-phase-7",
          title: "7️⃣ Important Patterns",
          sections: [
            {
              heading: "Techniques",
              points: [
                { id: "fast-slow-pointer-technique", title: "Fast & Slow Pointer Technique" },
                { id: "dummy-node-technique", title: "Dummy Node & In-place Reversal" }
              ]
            }
          ]
        },
        {
          id: "ll-phase-8",
          title: "8️⃣ Hard Problems",
          sections: [
            {
              heading: "Interview Level",
              points: [
                { id: "clone-with-random-pointer", title: "Copy List with Random Pointer" },
                { id: "flattening-linkedlist", title: "Flatten a Multilevel Linked List" },
                { id: "add-two-numbers-linkedlist", title: "Add Two Numbers using Linked List" },
                { id: "lru-cache-linkedlist", title: "LRU Cache (Linked List + HashMap)" }
              ]
            }
          ]
        }
      ]
    }
  }
}

export default dsaLearningPath
