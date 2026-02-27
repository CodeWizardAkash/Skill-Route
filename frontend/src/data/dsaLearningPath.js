const dsaLearningPath = {
  hero: {
    title: "DSA Learning Router",
    subtitle:
      "Select a topic card below to view its detailed, phase-wise roadmap. You can click on the roadmap points to see practical code examples.",
    audience: "Current focus: Arrays and Strings."
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
          note: "Mindset: Viewing every element once = O(n)."
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
          note: "Mindset: A string is often solved like an array of characters with extra rules."
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
    }
  }
}

export default dsaLearningPath
