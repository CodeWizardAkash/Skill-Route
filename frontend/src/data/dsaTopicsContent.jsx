import React from 'react';

// Basic Visual Components using Tailwind CSS for concepts
const MemoryGridVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Contiguous Memory Allocation</div>
        <div className="flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-colors">
            {[10, 20, 30, 40, 50].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center border-r last:border-0 border-gray-200 dark:border-gray-700 p-4 transition-colors">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors">Index {idx}</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">{val}</div>
                    <div className="text-xs text-cyan-600 dark:text-cyan-500 font-mono transition-colors">0x100{idx * 4}</div>
                </div>
            ))}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-center transition-colors">
            Each element is placed right after the previous one in memory, allowing instant O(1) access by calculating its exact address.
        </div>
    </div>
);

const TwoPointerVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Two Pointer Technique (Meeting in Middle)</div>
        <div className="relative flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none rounded-lg overflow-hidden p-2 gap-2 transition-colors">
            {[1, 3, 5, 7, 9, 11].map((val, idx) => (
                <div key={idx} className={`w-12 h-12 flex items-center justify-center rounded-md font-bold text-lg transition-colors
          ${idx === 0 ? 'bg-indigo-100 dark:bg-indigo-900 border border-indigo-300 dark:border-indigo-500 text-indigo-700 dark:text-indigo-200' :
                        idx === 5 ? 'bg-emerald-100 dark:bg-emerald-900 border border-emerald-300 dark:border-emerald-500 text-emerald-700 dark:text-emerald-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-transparent'}`}
                >
                    {val}
                </div>
            ))}
        </div>
        <div className="flex w-full max-w-xs justify-between px-4 mt-2">
            <div className="flex flex-col items-center text-indigo-600 dark:text-indigo-400 transition-colors">
                <span className="text-xl">↑</span>
                <span className="font-mono font-bold">Left</span>
            </div>
            <div className="flex flex-col items-center text-emerald-600 dark:text-emerald-400 transition-colors">
                <span className="text-xl">↑</span>
                <span className="font-mono font-bold">Right</span>
            </div>
        </div>
    </div>
);

const SlidingWindowVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Fixed Sliding Window (Size K = 3)</div>
        <div className="relative flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none rounded-lg overflow-hidden p-2 gap-2 transition-colors">
            <div className="absolute top-1 bottom-1 left-2 w-[calc(3rem*3+1rem)] border-2 border-dashed border-amber-500 dark:border-amber-500 rounded-lg z-0 bg-amber-100/50 dark:bg-amber-500/10 pointer-events-none transition-colors"></div>
            {[2, 5, 1, 8, 2, 9].map((val, idx) => (
                <div key={idx} className="z-10 w-12 h-12 flex items-center justify-center rounded-md font-bold text-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-transparent transition-colors">
                    {val}
                </div>
            ))}
        </div>
        <div className="text-sm text-amber-600 dark:text-amber-400 max-w-sm text-center transition-colors">
            The "window" slides across the array one element at a time, moving Left out and Right in, removing the O(n²) loop.
        </div>
    </div>
);

const BinarySearchVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Binary Search (Target = 23)</div>
        <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="relative flex bg-white dark:bg-gray-900 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 rounded-lg p-2 gap-2 transition-colors">
                <div className="absolute -top-3 left-2 text-xs text-gray-500 dark:text-gray-400 transition-colors">Step 1: Mid is 16 (Too small, go Right)</div>
                {[2, 5, 8, 12, 16, 23, 38, 56, 72].map((val, idx) => (
                    <div key={idx} className={`w-10 h-10 flex flex-col items-center justify-center rounded-sm font-bold text-sm transition-colors border
            ${idx === 4 ? 'bg-rose-100 dark:bg-rose-900 border-rose-300 dark:border-rose-500 text-rose-700 dark:text-rose-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-transparent'}`}
                    >
                        {val}
                        {idx === 4 && <span className="absolute -bottom-5 text-xs text-rose-600 dark:text-rose-500 transition-colors">Mid</span>}
                        {idx === 0 && <span className="absolute -bottom-5 text-xs text-gray-500 transition-colors">Low</span>}
                        {idx === 8 && <span className="absolute -bottom-5 text-xs text-gray-500 transition-colors">High</span>}
                    </div>
                ))}
            </div>
            {/* Step 2 */}
            <div className="relative flex bg-white dark:bg-gray-900 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 rounded-lg p-2 gap-2 mt-4 opacity-75 transition-colors">
                <div className="absolute -top-3 left-2 text-xs text-gray-500 dark:text-gray-400 transition-colors">Step 2: Narrowed space</div>
                {[2, 5, 8, 12, 16, 23, 38, 56, 72].map((val, idx) => (
                    <div key={idx} className={`w-10 h-10 flex flex-col items-center justify-center rounded-sm font-bold text-sm transition-colors border
            ${idx < 5 ? 'opacity-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-transparent' : idx === 6 ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-300 dark:border-emerald-500 text-emerald-700 dark:text-emerald-200' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-transparent'}`}
                    >
                        {val}
                        {idx === 6 && <span className="absolute -bottom-5 text-xs text-emerald-600 dark:text-emerald-500 transition-colors">Mid(Too Big)</span>}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const SpiralMatrixVisual = () => (
    <div className="flex flex-col items-center gap-4 my-6">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Spiral Matrix Traversal</div>
        <div className="grid grid-cols-3 gap-2 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none rounded-lg relative transition-colors">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 15,15 L 85,15 L 85,50 L 15,50 L 15,85 L 50,85" fill="none" className="stroke-cyan-400/50 animate-pulse transition-colors" strokeWidth="3" strokeDasharray="4 2" stroke="currentColor" />
            </svg>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, idx) => (
                <div key={idx} className="w-12 h-12 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-transparent text-gray-900 dark:text-white font-bold z-10 transition-colors">
                    {val}
                </div>
            ))}
        </div>
        <div className="text-sm text-cyan-600 dark:text-cyan-400 mt-2 transition-colors">1 → 2 → 3 → 6 → 9 → 8 → 7 → 4 → 5</div>
    </div>
);

const shouldShowOutputHeading = outputVariable => {
    if (typeof outputVariable === 'number' || typeof outputVariable === 'boolean') return true;
    if (typeof outputVariable !== 'string') return true;
    const value = outputVariable.trim();
    if (!value) return false;
    if (value.length <= 18) return true;
    return !value.includes(' ');
};

const GenericArrayVisualizer = ({
    inputArray,
    outputArray,
    outputVariable,
    description,
    highlightIndices = [],
    forceShowOutputHeading
}) => {
    const showOutputHeading = forceShowOutputHeading ?? shouldShowOutputHeading(outputVariable);

    return (
        <div className="flex flex-col items-center gap-4 my-6 w-full max-w-2xl mx-auto">
            {description && <div className="text-cyan-600 dark:text-cyan-300 font-semibold text-sm md:text-base mb-2 transition-colors text-center leading-snug">{description}</div>}

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 w-full">
            {/* Input Section */}
            {inputArray && (
                <div className="flex flex-col items-center gap-2 w-full">
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors">Input Array</div>
                    <div className="flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-colors max-w-full w-full overflow-x-auto">
                        {inputArray.map((val, idx) => (
                            <div key={idx} className={`min-w-10 h-10 px-2 flex flex-col items-center justify-center border-r last:border-0 border-gray-200 dark:border-gray-700 font-bold text-xs md:text-sm transition-colors
                                ${highlightIndices.includes(idx) ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300' : 'text-gray-900 dark:text-white'}`}>
                                <span className="text-[10px] text-gray-400 font-normal leading-none mb-1">{idx}</span>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Arrow */}
            {(outputArray || outputVariable !== undefined) && (
                <div className="text-gray-400 dark:text-gray-600 text-2xl hidden md:block transition-colors">➔</div>
            )}
            {(outputArray || outputVariable !== undefined) && (
                <div className="text-gray-400 dark:text-gray-600 text-2xl md:hidden transition-colors">↓</div>
            )}

            {/* Output Section */}
            {outputArray && (
                <div className="flex flex-col items-center gap-2 w-full">
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium transition-colors">Output Array</div>
                    <div className="flex bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-colors max-w-full w-full overflow-x-auto">
                        {outputArray.map((val, idx) => (
                            <div key={idx} className="min-w-10 h-10 px-2 flex flex-col items-center justify-center border-r last:border-0 border-emerald-200 dark:border-emerald-800 font-bold text-xs md:text-sm text-emerald-700 dark:text-emerald-400 transition-colors">
                                <span className="text-[10px] text-emerald-400/70 font-normal leading-none mb-1">{idx}</span>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {outputVariable !== undefined && (
                <div className="flex flex-col items-center gap-2 w-full">
                    {showOutputHeading && (
                        <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium transition-colors">Output</div>
                    )}
                    <div className="min-h-10 w-full max-w-full px-3 md:px-5 py-2 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg shadow-sm dark:shadow-none font-bold text-sm md:text-base text-emerald-700 dark:text-emerald-400 transition-colors text-center break-words whitespace-normal leading-snug">
                        {outputVariable}
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

const RecursionLevelTreeVisualizer = ({
    title,
    subtitle = "Level-wise call expansion and return flow",
    levels = [],
    finalOutput,
    note
}) => (
    <div className="w-full max-w-3xl mx-auto my-6 rounded-2xl border border-cyan-200 dark:border-cyan-900/60 bg-white dark:bg-gray-900/40 shadow-sm dark:shadow-none overflow-hidden transition-colors">
        <div className="px-4 md:px-5 py-4 border-b border-cyan-100 dark:border-cyan-900/60 bg-gradient-to-r from-cyan-50 via-white to-emerald-50 dark:from-cyan-950/50 dark:via-gray-900 dark:to-emerald-950/40 transition-colors">
            <h3 className="text-sm md:text-base font-bold text-cyan-700 dark:text-cyan-200 transition-colors">{title}</h3>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 transition-colors">{subtitle}</p>
        </div>

        <div className="p-3 md:p-5 space-y-3 md:space-y-4">
            {levels.map((level, index) => (
                <div
                    key={`${level.label}-${index}`}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-3 md:p-4 transition-colors"
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                        <div className="shrink-0 rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold text-cyan-700 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-800/60 transition-colors">
                            {level.label}
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {level.nodes.map((node, nodeIndex) => (
                                <span
                                    key={`${level.label}-node-${nodeIndex}`}
                                    className="px-2.5 py-1 rounded-lg text-xs md:text-sm font-mono text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
                                >
                                    {node}
                                </span>
                            ))}
                        </div>
                    </div>

                    {level.output && (
                        <div className="mt-3 rounded-lg border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 text-xs md:text-sm text-emerald-800 dark:text-emerald-300 transition-colors">
                            Output at this level: {level.output}
                        </div>
                    )}
                </div>
            ))}

            {finalOutput && (
                <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 p-3 md:p-4 transition-colors">
                    <div className="text-xs md:text-sm font-semibold text-emerald-800 dark:text-emerald-300 transition-colors">
                        Final Output: {finalOutput}
                    </div>
                </div>
            )}

            {note && (
                <div className="rounded-lg border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 text-xs md:text-sm text-amber-800 dark:text-amber-300 transition-colors">
                    {note}
                </div>
            )}
        </div>
    </div>
);

export const dsaTopicsContent = {
    "array-definition": {
        title: "What is an Array (Continuous Memory)",
        explanation: "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together, making it easier to calculate the position of each element by simply adding an offset to a base value (the memory location of the first element).",
        visual: <MemoryGridVisual />,
        code: {
            cpp: `// C++ snippet
int arr[5] = {10, 20, 30, 40, 50};
// The memory address of arr[0] could be 1000
// Since an integer takes 4 bytes, arr[1] will be at 1004, arr[2] at 1008, and so on.`,
            java: `// Java snippet
int[] arr = new int[]{10, 20, 30, 40, 50};
// Similar continuous heap memory concept applies to Java primitive arrays.`
        }
    },
    "array-indexing": {
        title: "Indexing (0-based)",
        explanation: "In most programming languages, arrays are 0-indexed. This means that the first element of the array is accessed via index 0, the second element via index 1, and so forth.",
        visual: <GenericArrayVisualizer inputArray={[100, 200, 300]} outputVariable={100} description="Accessing arr[0]" highlightIndices={[0]} />,
        code: {
            cpp: `// C++ snippet
int arr[] = {100, 200, 300};
cout << arr[0] << endl; // Prints 100
cout << arr[2] << endl; // Prints 300`,
            java: `// Java snippet
int[] colors = {1, 2, 3};
System.out.println(colors[0]); // 1
System.out.println(colors[1]); // 2
System.out.println(colors[2]); // 3`
        }
    },
    "size-vs-capacity": {
        title: "Size vs Capacity",
        explanation: "Size refers to the number of elements currently present in the array, while capacity refers to the maximum number of elements the array can hold before it needs to be resized.",
        visual: <GenericArrayVisualizer inputArray={[5, 8, "Empty", "Empty"]} outputVariable="Size: 2, Capacity: 4" description="Dynamic Array (Vector/ArrayList)" />,
        code: {
            cpp: `// C++ snippet using std::vector
#include <vector>
std::vector<int> vec;
vec.reserve(10); // Capacity becomes 10
vec.push_back(5); // Size is 1, Capacity is 10`,
            java: `// Java snippet
// ArrayList handles dynamic sizing
ArrayList<Integer> list = new ArrayList<>(10); // Initial capacity is 10
list.add(5); // Size is now 1
list.add(8); // Size is now 2`
        }
    },
    "array-traversal": {
        title: "Traversal using loops",
        explanation: "Traversal means visiting every element in the array exactly once, usually applying an operation such as printing or modifying the elements.",
        visual: <GenericArrayVisualizer inputArray={[10, 20, 30, 40, 50]} outputVariable="[Print] 10 20 30 40 50" description="Visiting elements sequentially from index 0 to N-1" highlightIndices={[0, 1, 2, 3, 4]} />,
        code: {
            cpp: `// C++ snippet
int arr[] = {1, 2, 3, 4, 5};
int n = sizeof(arr) / sizeof(arr[0]);

for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}`,
            java: `// Java snippet
int[] arr = {1, 2, 3, 4, 5};

// Advanced: Enhanced for-loop
for (int element : arr) {
    System.out.print(element + " ");
}`
        }
    },
    "time-complexity-basics": {
        title: "Time complexity basics: Access O(1), Traversal/Search O(n)",
        explanation: "Accessing an element by its index takes O(1) constant time because the memory address is calculated instantly. Traversing the entire array or sequentially searching for an element takes O(n) linear time, as you may have to visit every element in the worst case.",
        visual: <GenericArrayVisualizer inputArray={['A', 'B', 'C', 'D']} outputVariable="O(1) Access, O(N) Traversal" description="arr[2] -> 'C' is instant" highlightIndices={[2]} />,
        code: {
            cpp: `// Access: O(1)
int value = arr[3];

// Search/Traversal: O(n)
for (int i = 0; i < n; i++) {
    if (arr[i] == target) {
        return i; // Found
    }
}`,
            java: `// Access: O(1)
int value = arr[3];

// Search/Traversal: O(n)
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        return i; // Found
    }
}
return -1;`
        }
    },
    "print-array": {
        title: "Print array",
        explanation: "Printing an array involves iterating over each element and displaying its value.",
        visual: <GenericArrayVisualizer inputArray={[3, 6, 9]} outputVariable="Console: 3 6 9" />,
        code: {
            cpp: `// C++ snippet
void printArray(int arr[], int size) {
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}`,
            java: `// Java snippet (Utility)
import java.util.Arrays;
int[] arr = {10, 20, 30};
System.out.println(Arrays.toString(arr));`
        }
    },
    "take-input-output": {
        title: "Take input and output",
        explanation: "You can read values from standard input and assign them to an array, then print them back out.",
        visual: <GenericArrayVisualizer description="User inputs stream of values into Array" outputArray={[12, 45, 7, 9]} />,
        code: {
            cpp: `// C++ snippet
int arr[5];
// Input
for (int i = 0; i < 5; i++) {
    cin >> arr[i];
}
// Output
for (int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
}`,
            java: `// Java snippet
Scanner sc = new Scanner(System.in);
int[] arr = new int[5];

for(int i = 0; i < 5; i++) {
    arr[i] = sc.nextInt();
}`
        }
    },
    "find-max-min": {
        title: "Find max and min",
        explanation: "Initialize max or min variables with the first element, then iterate through the array to find elements strictly greater or smaller, updating the variables accordingly.",
        visual: <GenericArrayVisualizer inputArray={[5, 2, 9, 1, 7]} outputVariable="Max: 9, Min: 1" description="Scanning array to track highest and lowest values" highlightIndices={[2, 3]} />,
        code: {
            cpp: `// C++ snippet
int findMax(int arr[], int n) {
    int maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}`,
            java: `// Java snippet
int findMax(int[] arr) {
    int maxVal = arr[0]; // Assuming arr is non-empty
    for (int num : arr) {
        if (num > maxVal) maxVal = num;
    }
    return maxVal;
}`
        }
    },
    "sum-and-average": {
        title: "Sum and average",
        explanation: "Keep a running total while iterating through the array. The average is the sum divided by the number of elements.",
        visual: <GenericArrayVisualizer inputArray={[10, 20, 30]} outputVariable="Sum: 60, Avg: 20" />,
        code: {
            cpp: `// C++ snippet
long long sum = 0;
for(int i = 0; i < n; i++){
    sum += arr[i];
}
double average = (double)sum / n;`,
            java: `// Java snippet
int[] arr = {10, 20, 30, 40, 50};
int sum = 0;

for (int num : arr) sum += num;

double average = (double) sum / arr.length;
System.out.println("Sum: " + sum + ", Average: " + average);`
        }
    },
    "count-even-odd": {
        title: "Count even and odd",
        explanation: "Check the remainder of each element when divided by 2. If it's 0, it's even; otherwise, it's odd.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3, 4, 5]} outputVariable="Evens: 2, Odds: 3" description="2 and 4 are even; 1, 3, 5 are odd" highlightIndices={[1, 3]} />,
        code: {
            cpp: `// C++ snippet
int evens = 0, odds = 0;
for(int i = 0; i < n; i++){
    if(arr[i] % 2 == 0) evens++;
    else odds++;
}`,
            java: `// Java snippet
int evens = 0, odds = 0;
for(int num : arr) {
    if(num % 2 == 0) evens++;
    else odds++;
}`
        }
    },
    "reverse-array": {
        title: "Reverse array",
        explanation: "You can reverse an array efficiently using the two-pointer approach, swapping the start and end until they meet in the middle.",
        visual: <TwoPointerVisual />,
        code: {
            cpp: `// C++ snippet
void reverseArray(int arr[], int n) {
    int start = 0, end = n - 1;
    while (start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}`,
            java: `// Java snippet
void reverseArray(int[] arr) {
    int start = 0;
    int end = arr.length - 1;
    while(start < end) {
        // Swap
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}`
        }
    },
    "linear-search": {
        title: "Linear Search",
        explanation: "Linear search sequentially checks each element of the array until a match is found or the whole list has been searched. Time complexity: O(n).",
        visual: <GenericArrayVisualizer inputArray={[10, 20, 30, 40]} outputVariable="Index: 2" description="Target = 30" highlightIndices={[0, 1, 2]} />,
        code: {
            cpp: `// C++ snippet
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
            java: `// Java snippet
int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // Target found
        }
    }
    return -1; // Target not found
}`
        }
    },
    "binary-search": {
        title: "Binary Search (Sorted arrays only)",
        explanation: "Binary search finds the position of a target value within a sorted array. It compares the target value to the middle element, eliminating half the search space. Time complexity: O(log n).",
        visual: <BinarySearchVisual />,
        code: {
            cpp: `// C++ snippet
int binarySearch(int arr[], int low, int high, int x) {
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
            java: `// Java snippet
int binarySearch(int[] arr, int x) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
        }
    },
    "binary-search-logic": {
        title: "Binary Search specifics: low-high-mid logic, loop vs recursion",
        explanation: "Calculating mid as `low + (high - low) / 2` prevents integer overflow. Binary search can be written iteratively with loops (which is typically more space-efficient) or recursively.",
        visual: <GenericArrayVisualizer inputArray={['L', '.', 'M', '.', 'H']} description="Preventing Overflow: mid = low + (high - low) / 2" highlightIndices={[2]} />,
        code: {
            cpp: `// Recursive Binary Search C++
int recursiveBinarySearch(int arr[], int low, int high, int x) {
    if (high >= low) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) return recursiveBinarySearch(arr, low, mid - 1, x);
        return recursiveBinarySearch(arr, mid + 1, high, x);
    }
    return -1;
}`,
            java: `// Recursive Binary Search Java
int bs(int[] arr, int low, int high, int target) {
    if(low > high) return -1;
    int mid = low + (high - low) / 2;
    if(arr[mid] == target) return mid;
    if(arr[mid] > target) return bs(arr, low, mid-1, target);
    return bs(arr, mid+1, high, target);
}`
        }
    },
    "searching-practice": {
        title: "Practice: Element presence, first/last occurrence, count occurrences",
        explanation: "Variations of binary search can be used to find boundary occurrences of an element in a sorted array by continuing the search even after finding a match.",
        visual: <GenericArrayVisualizer inputArray={[2, 4, 10, 10, 10, 18, 20]} outputVariable="First Index: 2, Last Index: 4" description="Target = 10" highlightIndices={[2, 3, 4]} />,
        code: {
            cpp: `// C++ - Find first occurrence
int firstOccurrence(int arr[], int n, int x) {
    int low = 0, high = n - 1, res = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x) {
            res = mid;
            high = mid - 1; // Continue searching left
        } else if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return res;
}`,
            java: `// Java - Find first occurrence
int firstOccurrence(int[] arr, int x) {
    int low = 0, high = arr.length - 1, res = -1;
    while(low <= high) {
        int mid = low + (high - low) / 2;
        if(arr[mid] == x) {
            res = mid;
            high = mid - 1; // Search left
        } else if(arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return res;
}`
        }
    },
    "bubble-sort": {
        title: "Bubble Sort",
        explanation: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        visual: <GenericArrayVisualizer inputArray={[5, 3, 8, 4, 2]} outputArray={[2, 3, 4, 5, 8]} description="Repeatedly bubbling up the largest element to the end" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// C++ full snippet (helpers + optimized bubble sort)
#include <bits/stdc++.h>
using namespace std;

void printArray(const vector<int>& arr) {
    for (int x : arr) cout << x << " ";
    cout << "\\n";
}

// Main logic function
void bubbleSort(vector<int>& arr) {
    int n = (int)arr.size();
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        // If no swap in this pass, array already sorted.
        if (!swapped) break;
    }
}

// Driver code
int main() {
    vector<int> arr = {5, 3, 8, 4, 2};
    cout << "Before: ";
    printArray(arr);

    bubbleSort(arr);

    cout << "After:  ";
    printArray(arr);
    return 0;
}`,
            java: `// Java full snippet (helpers + optimized bubble sort)
import java.util.Arrays;

public class BubbleSortDemo {
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    // Main logic function
    static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }

    // Driver code
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};
        System.out.print("Before: ");
        printArray(arr);

        bubbleSort(arr);

        System.out.print("After:  ");
        printArray(arr);
    }
}`
        }
    },
    "selection-sort": {
        title: "Selection Sort",
        explanation: "An algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.",
        visual: <GenericArrayVisualizer inputArray={[5, 3, 8, 4, 2]} outputArray={[2, 3, 4, 5, 8]} description="Finding overall min (2) and swapping with front (5)" highlightIndices={[0, 4]} />,
        code: {
            cpp: `// C++ full snippet (helpers + selection sort)
#include <bits/stdc++.h>
using namespace std;

void printArray(const vector<int>& arr) {
    for (int x : arr) cout << x << " ";
    cout << "\\n";
}

// Main logic function
void selectionSort(vector<int>& arr) {
    int n = (int)arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        if (minIndex != i) swap(arr[minIndex], arr[i]);
    }
}

// Driver code
int main() {
    vector<int> arr = {5, 3, 8, 4, 2};
    cout << "Before: ";
    printArray(arr);

    selectionSort(arr);

    cout << "After:  ";
    printArray(arr);
    return 0;
}`,
            java: `// Java full snippet (helpers + selection sort)
import java.util.Arrays;

public class SelectionSortDemo {
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    // Main logic function
    static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) minIndex = j;
            }
            if (minIndex != i) swap(arr, minIndex, i);
        }
    }

    // Driver code
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};
        System.out.print("Before: ");
        printArray(arr);

        selectionSort(arr);

        System.out.print("After:  ");
        printArray(arr);
    }
}`
        }
    },
    "insertion-sort": {
        title: "Insertion Sort",
        explanation: "Builds the final sorted array one item at a time by picking elements from the unsorted part and inserting them into their correct sorted position.",
        visual: <GenericArrayVisualizer inputArray={[5, 3, 8, 4, 2]} outputArray={[2, 3, 4, 5, 8]} description="Card playing approach: inserting 3 before 5 in sorted left-half" highlightIndices={[1]} />,
        code: {
            cpp: `// C++ full snippet (helpers + insertion sort)
#include <bits/stdc++.h>
using namespace std;

void printArray(const vector<int>& arr) {
    for (int x : arr) cout << x << " ";
    cout << "\\n";
}

// Main logic function
void insertionSort(vector<int>& arr) {
    int n = (int)arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Driver code
int main() {
    vector<int> arr = {5, 3, 8, 4, 2};
    cout << "Before: ";
    printArray(arr);

    insertionSort(arr);

    cout << "After:  ";
    printArray(arr);
    return 0;
}`,
            java: `// Java full snippet (helpers + insertion sort)
import java.util.Arrays;

public class InsertionSortDemo {
    static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    // Main logic function
    static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    // Driver code
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};
        System.out.print("Before: ");
        printArray(arr);

        insertionSort(arr);

        System.out.print("After:  ");
        printArray(arr);
    }
}`
        }
    },
    "sorting-focus": {
        title: "Focus: Swapping mechanisms, worst vs best cases, stability",
        explanation: "A sorting algorithm is stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array. Bubble and Insertion sorts are typically stable; Selection sort is not.",
        visual: <GenericArrayVisualizer inputArray={['5a', '3', '5b', '2']} outputArray={['2', '3', '5a', '5b']} description="Stability: 5a remains before 5b after sort" highlightIndices={[0, 2]} />,
        code: {
            cpp: `// Time Complexities
// Bubble Sort - Best: O(n), Worst: O(n^2)
// Selection Sort - Best: O(n^2), Worst: O(n^2)
// Insertion Sort - Best: O(n), Worst: O(n^2)`,
            java: `// Spatial Complexities
// Bubble Sort - O(1) in-place
// Selection Sort - O(1) in-place
// Insertion Sort - O(1) in-place`
        }
    },
    "two-pointer-usage": {
        title: "Use case: Sorted arrays or processing from opposite ends",
        explanation: "The two-pointer technique uses two indices to traverse the array from different locations, usually from the start and end towards the middle, operating mostly on strictly sorted arrays.",
        visual: <TwoPointerVisual />,
        code: {
            cpp: `// C++ snippet - Two Sum (Sorted Array)
bool hasTargetSum(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}`,
            java: `// Java snippet - Two Sum (Sorted Array)
boolean hasTargetSum(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while(left < right) {
        int sum = arr[left] + arr[right];
        if(sum == target) return true;
        else if(sum < target) left++;
        else right--;
    }
    return false;
}`
        }
    },
    "two-pointer-practice": {
        title: "Practice: Reverse array, target sum, move zeros, sort 0s-1s-2s",
        explanation: "Another popular problem is the Dutch National Flag problem (sorting an array of 0s, 1s, and 2s) which can be solved elegantly with three pointers.",
        visual: <GenericArrayVisualizer inputArray={[2, 0, 2, 1, 1, 0]} outputArray={[0, 0, 1, 1, 2, 2]} description="Dutch National Flag Problem (Sort Colors)" />,
        code: {
            cpp: `// C++ snippet - Sort Colors (0, 1, 2)
void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    while (mid <= high) {
        if (nums[mid] == 0) swap(nums[low++], nums[mid++]);
        else if (nums[mid] == 1) mid++;
        else swap(nums[mid], nums[high--]);
    }
}`,
            java: `// Java snippet - Sort Colors (0, 1, 2)
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            // Swap low and mid
            int t = nums[low]; nums[low] = nums[mid]; nums[mid] = t;
            low++; mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            // Swap mid and high
            int t = nums[mid]; nums[mid] = nums[high]; nums[high] = t;
            high--;
        }
    }
}`
        }
    },
    "sliding-window-usage": {
        title: "Use case: Subarrays or continuous elements (fixed or variable window)",
        explanation: "Sliding window helps optimize solutions that calculate something among all contiguous subarrays of a given size, transforming O(n^2) nested loops into a single O(n) loop.",
        visual: <SlidingWindowVisual />,
        code: {
            cpp: `// C++ snippet - Max Sum of Subarray of Size K
int maxSum(int arr[], int n, int k) {
    int maxSum = 0, windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;

    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = max(maxSum, windowSum);
    }
    return maxSum;
}`,
            java: `// Java snippet - Max Sum of Subarray of Size K
int maxSum(int[] arr, int k) {
    int max = 0, windowSum = 0;
    for(int i = 0; i < k; i++) windowSum += arr[i];
    max = windowSum;

    for(int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i-k];
        max = Math.max(max, windowSum);
    }
    return max;
}`
        }
    },
    "sliding-window-practice": {
        title: "Practice: Max sum, smallest subarray, longest subarray with condition",
        explanation: "In variable-sized sliding window problems, you continuously expand the right side of the window, and occasionally shrink the left side to satisfy the required condition.",
        visual: <GenericArrayVisualizer inputArray={[2, 3, 1, 2, 4, 3]} outputVariable="Len: 2 ([4,3])" description="Smallest subarray sum >= 7" highlightIndices={[4, 5]} />,
        code: {
            cpp: `// C++ snippet - Smallest Subarray Length with Sum >= target
int minSubArrayLen(int target, vector<int>& nums) {
    int left = 0, minLen = INT_MAX, windowSum = 0;
    for (int right = 0; right < nums.size(); right++) {
        windowSum += nums[right];
        while (windowSum >= target) {
            minLen = min(minLen, right - left + 1);
            windowSum -= nums[left++];
        }
    }
    return minLen == INT_MAX ? 0 : minLen;
}`,
            java: `// Java snippet - Smallest Subarray
int minSubArrayLen(int target, int[] nums) {
    int left = 0, minLen = Integer.MAX_VALUE, sum = 0;
    for(int right = 0; right < nums.length; right++) {
        sum += nums[right];
        while(sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }
    return minLen == Integer.MAX_VALUE ? 0 : minLen;
}`
        }
    },
    "subarray-rule": {
        title: "Rule: Subarrays must be continuous elements",
        explanation: "A subarray is a continuous part of array. Unlike subsequences which just preserve relative ordering, a subarray's elements are strictly adjacent.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3]} outputArray={[1, 2]} description="[1,2] is a subarray, [1,3] is a subsequence (not continuous)" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// Array: [1, 2, 3]
// Subarrays: [1], [2], [3], [1,2], [2,3], [1,2,3]
// Non-subarray: [1,3] (This is a subsequence!)`,
            java: `// Subarray sizes formula:
// Total subarrays = n * (n + 1) / 2`
        }
    },
    "prefix-sum-usage": {
        title: "Use case: Range sum queries and subarray sum problems",
        explanation: "Prefix sum is a precomputation technique where you create an auxiliary array storing the cumulative sum, which allows computing the sum of any continuous range in O(1) time.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3, 4]} outputArray={[1, 3, 6, 10]} description="Prefix Array precomputation for fast range queries" />,
        code: {
            cpp: `// C++ snippet - Prefix Sum array
vector<int> prefixSum(vector<int>& arr) {
    vector<int> prefix(arr.size());
    prefix[0] = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}`,
            java: `// Java snippet - Prefix Sum
int[] createPrefix(int[] arr) {
    int[] prefix = new int[arr.length];
    prefix[0] = arr[0];
    for(int i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i-1] + arr[i];
    }
    return prefix;
}`
        }
    },
    "prefix-sum-practice": {
        title: "Practice: Range sum from L to R, subarray sum equal to K",
        explanation: "To find the sum of elements from index L to R (inclusive), you compute `prefix[R] - prefix[L-1]`.",
        visual: <GenericArrayVisualizer inputArray={[1, 3, 6, 10]} outputVariable="10 - 1 = 9 (Sum of [2,3,4])" description="Querying sum from index 1 to 3: prefix[3] - prefix[0]" highlightIndices={[0, 3]} />,
        code: {
            cpp: `// C++ snippet
int getRangeSum(vector<int>& prefix, int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}`,
            java: `// Java snippet
int getRangeSum(int[] prefix, int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}`
        }
    },
    "kadanes-usage": {
        title: "Use case: Maximum subarray sum (Kadane's Algorithm)",
        explanation: "Kadane's algorithm evaluates the maximum sum contiguous subarray within a one-dimensional array. It's an elegant application of DP acting as a linear scan.",
        visual: <GenericArrayVisualizer inputArray={[-2, 1, -3, 4, -1, 2, 1, -5, 4]} outputVariable="Max Sum: 6 ([4, -1, 2, 1])" description="Kadane evaluates current sequence vs completely new sequence" highlightIndices={[3, 4, 5, 6]} />,
        code: {
            cpp: `// C++ snippet - Kadane's Algorithm
int maxSubArray(vector<int>& nums) {
    int max_so_far = nums[0];
    int curr_max = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        curr_max = max(nums[i], curr_max + nums[i]);
        max_so_far = max(max_so_far, curr_max);
    }
    return max_so_far;
}`,
            java: `// Java snippet - Kadane
public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`
        }
    },
    "kadanes-mindset": {
        title: "Mindset: Reset on negative sum, make a decision at every index",
        explanation: "The core philosophy is deciding whether to continue the existing contiguous segment by adding the current element, or to start a new segment completely.",
        visual: <GenericArrayVisualizer inputArray={[5, -8, 2, 3]} outputVariable="Sum dropped to < 0, sequence resets at 2" description="Resetting subarray search when sequence becomes detrimental" highlightIndices={[1]} />,
        code: {
            cpp: `// C++ variation
int maxSubArraySum(vector<int>& arr) {
    int max_val = INT_MIN, sum = 0;
    for (int x : arr) {
        sum += x;
        if (max_val < sum) max_val = sum;
        if (sum < 0) sum = 0; // Reset!
    }
    return max_val;
}`,
            java: `// Java variation
int maxSubArraySum(int[] arr) {
    int max_val = Integer.MIN_VALUE, sum = 0;
    for (int i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (max_val < sum) max_val = sum;
        if (sum < 0) sum = 0; // Reset
    }
    return max_val;
}`
        }
    },
    "hashing-usage": {
        title: "Use case: Frequency counting, duplicate detection, fast lookups",
        explanation: "A Hash Map or Hash Set can reduce nested loops to single passes by storing previously seen elements, leveraging O(1) lookup speeds.",
        visual: <GenericArrayVisualizer inputArray={[2, 7, 11, 15]} outputVariable="Indices: [0, 1]" description="Two Sum with Hash Map (Target = 9)" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// C++ snippet - Two Sum Hash
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numMap;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (numMap.count(complement)) {
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;
    }
    return {};
}`,
            java: `// Java snippet - Two Sum Hash
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for(int i = 0; i < nums.length; i++) {
        int comp = target - nums[i];
        if(map.containsKey(comp)) {
            return new int[]{map.get(comp), i};
        }
        map.put(nums[i], i);
    }
    return new int[]{};
}`
        }
    },
    "hashing-practice": {
        title: "Practice: Two sum, majority element, first repeating, longest 0-sum subarray",
        explanation: "Combining Prefix Sum and Hashing solves complex subarray questions in linear time.",
        visual: <GenericArrayVisualizer inputArray={[1, -1, 3, 2, -2, -3, 3]} outputVariable="Max Length: 6" description="Longest Subarray with 0-Sum map prefix hashes" highlightIndices={[1, 2, 3, 4, 5, 6]} />,
        code: {
            cpp: `// C++ snippet - Max subarray length sum 0
int maxLen(vector<int>& A, int n) {
    unordered_map<int, int> presum;
    int sum = 0, maxi = 0;
    for(int i = 0; i < n; i++) {
        sum += A[i];
        if(sum == 0) maxi = i + 1;
        else {
            if(presum.find(sum) != presum.end())
                maxi = max(maxi, i - presum[sum]);
            else presum[sum] = i;
        }
    }
    return maxi;
}`,
            java: `// Java snippet - Max subarray length sum 0
int maxLen(int arr[], int n) {
    HashMap<Integer, Integer> map = new HashMap<>();
    int sum = 0, max_len = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == 0) max_len = i + 1;
        Integer prev = map.get(sum);
        if (prev != null) max_len = Math.max(max_len, i - prev);
        else map.put(sum, i);
    }
    return max_len;
}`
        }
    },
    "merge-intervals": {
        title: "Merge intervals",
        explanation: "Sort the intervals by their starting times. Then iterate over them, comparing the current interval with the continuously merging tail of processed intervals.",
        visual: <GenericArrayVisualizer inputArray={['[1,3]', '[2,6]', '[8,10]']} outputArray={['[1,6]', '[8,10]']} description="Merging overlapping time intervals" highlightIndices={[0, 1]} />,
        code: {
            cpp: `// C++ snippet
vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if(intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    merged.push_back(intervals[0]);
    for(int i = 1; i < intervals.size(); i++) {
        if(merged.back()[1] >= intervals[i][0])
            merged.back()[1] = max(merged.back()[1], intervals[i][1]);
        else
            merged.push_back(intervals[i]);
    }
    return merged;
}`,
            java: `// Java snippet
public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    LinkedList<int[]> merged = new LinkedList<>();
    for (int[] interval : intervals) {
        if (merged.isEmpty() || merged.getLast()[1] < interval[0]) {
            merged.add(interval);
        } else {
            merged.getLast()[1] = Math.max(merged.getLast()[1], interval[1]);
        }
    }
    return merged.toArray(new int[merged.size()][]);
}`
        }
    },
    "rearrange-array": {
        title: "Rearrange arrays",
        explanation: "Problems that require arranging arrays logically (e.g., swapping positives/negatives, moving zeroes). Often rely on two-pointer mechanics.",
        visual: <GenericArrayVisualizer inputArray={[0, 1, 0, 3, 12]} outputArray={[1, 3, 12, 0, 0]} description="Moving all zeroes to the end" highlightIndices={[0, 2]} />,
        code: {
            cpp: `// C++ - Move zeroes to end
void moveZeroes(vector<int>& nums) {
    int insertPos = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != 0) {
            nums[insertPos++] = nums[i];
        }
    }
    while(insertPos < nums.size()) {
        nums[insertPos++] = 0;
    }
}`,
            java: `// Java - Move zeroes
public void moveZeroes(int[] nums) {
    int ptr = 0;
    for(int num : nums) {
        if(num != 0) nums[ptr++] = num;
    }
    while(ptr < nums.length) nums[ptr++] = 0;
}`
        }
    },
    "missing-repeating-number": {
        title: "Missing & repeating numbers",
        explanation: "Several clever ways exist: mathematics formula (math tricks), XOR properties, or placing numbers in their exact index iteratively.",
        visual: <GenericArrayVisualizer inputArray={[3, 0, 1]} outputVariable="Missing: 2" description="Array containing elements [0..N]. N=3, missing 2" />,
        code: {
            cpp: `// C++ snippet - Find Missing Number (0 to n)
int missingNumber(vector<int>& nums) {
    int expectedSum = nums.size() * (nums.size() + 1) / 2;
    int actualSum = 0;
    for (int num : nums) actualSum += num;
    return expectedSum - actualSum;
}`,
            java: `// Java snippet - Missing Number XOR
public int missingNumber(int[] nums) {
    int missing = nums.length;
    for(int i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}`
        }
    },
    "next-permutation": {
        title: "Next permutation",
        explanation: "Find the next lexicographical sequence of an array by finding the first break in descending order from the end, then swapping and reversing the suffix.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3]} outputArray={[1, 3, 2]} description="Next lexicographically greater arrangement" />,
        code: {
            cpp: `// C++ snippet
void nextPermutation(vector<int>& nums) {
    int i = nums.size() - 2;
    while(i >= 0 && nums[i] >= nums[i+1]) i--;
    if(i >= 0) {
        int j = nums.size() - 1;
        while(nums[j] <= nums[i]) j--;
        swap(nums[i], nums[j]);
    }
    reverse(nums.begin() + i + 1, nums.end());
}`,
            java: `// Java snippet
public void nextPermutation(int[] nums) {
    int i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) i--;
    if (i >= 0) {
        int j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
}
// Helpers swap & reverse omitted for brevity`
        }
    },
    "cyclic-sort-usage": {
        title: "Use case: Numbers fall within the range of 1 to N",
        explanation: "If you have an array containing numbers in a given range, Cyclic Sort puts each number in its correct placeholder index in O(n) without extra space.",
        visual: <GenericArrayVisualizer inputArray={[3, 1, 5, 4, 2]} outputArray={[1, 2, 3, 4, 5]} description="Sending elements to index = value - 1" />,
        code: {
            cpp: `// C++ snippet - Cyclic Sort
void cyclicSort(vector<int>& arr) {
    int i = 0;
    while (i < arr.size()) {
        int correctIndex = arr[i] - 1; // 1-based index mapping
        if (arr[i] > 0 && arr[i] <= arr.size() && arr[i] != arr[correctIndex]) {
            swap(arr[i], arr[correctIndex]);
        } else {
            i++;
        }
    }
}`,
            java: `// Java snippet - Cyclic Sort
void cyclicSort(int[] arr) {
    int i = 0;
    while (i < arr.length) {
        int correctIndex = arr[i] - 1;
        if (arr[i] > 0 && arr[i] <= arr.length && arr[i] != arr[correctIndex]) {
            int t = arr[i]; arr[i] = arr[correctIndex]; arr[correctIndex] = t;
        } else {
            i++;
        }
    }
}`
        }
    },
    "cyclic-sort-practice": {
        title: "Practice: Find missing number, find duplicate number",
        explanation: "Once sorted cyclically, any index `i` that doesn't hold `i + 1` indicates either a duplicated or a missing number depending on the requirements.",
        visual: <GenericArrayVisualizer inputArray={[1, 3, 4, 2, 2]} outputArray={[1, 2, 3, 4, 2]} outputVariable="Duplicate: 2 (at index 4)" description="Element 2 maps to position, pushing original out" highlightIndices={[4]} />,
        code: {
            cpp: `// C++ snippet - Find all numbers disappeared
vector<int> findDisappearedNumbers(vector<int>& nums) {
    for (int i = 0; i < nums.size(); i++) {
        int index = abs(nums[i]) - 1;
        if (nums[index] > 0) nums[index] = -nums[index];
    }
    vector<int> res;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] > 0) res.push_back(i + 1);
    }
    return res;
}`,
            java: `// Java snippet - Find Duplicate
public int findDuplicate(int[] nums) {
    while(nums[0] != nums[nums[0]]) {
        int next = nums[nums[0]];
        nums[nums[0]] = nums[0];
        nums[0] = next;
    }
    return nums[0];
}`
        }
    },
    "row-wise-traversal": {
        title: "Row-wise traversal",
        explanation: "A standard matrix iteration where the outer loop traverses the rows, and the inner loop iterates over columns.",
        visual: <GenericArrayVisualizer inputArray={['[1,2]', '[3,4]']} outputVariable="1 → 2 → 3 → 4" description="Traveling left-to-right across rows first" />,
        code: {
            cpp: `// C++ snippet
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
}`,
            java: `// Java snippet
int[][] matrix = {{1, 2}, {3, 4}};
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[0].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
}`
        }
    },
    "col-wise-traversal": {
        title: "Column-wise traversal",
        explanation: "Here, the outer loop advances the column index, while the inner loop travels down the rows.",
        visual: <GenericArrayVisualizer inputArray={['[1,2]', '[3,4]']} outputVariable="1 → 3 → 2 → 4" description="Traveling top-to-bottom down columns first" />,
        code: {
            cpp: `// C++ snippet
int matrix[2][2] = {{1, 2}, {3, 4}};
for (int j = 0; j < 2; j++) {
    for (int i = 0; i < 2; i++) {
        cout << matrix[i][j] << " ";
    }
}`,
            java: `// Java snippet
int[][] matrix = {{1, 2}, {3, 4}};
for (int j = 0; j < matrix[0].length; j++) {
    for (int i = 0; i < matrix.length; i++) {
        System.out.print(matrix[i][j] + " ");
    }
}`
        }
    },
    "spiral-matrix": {
        title: "Spiral matrix traversal",
        explanation: "Navigating the matrix boundary by maintaining 4 pointers (top, bottom, left, right) and curling inwards layer by layer.",
        visual: <SpiralMatrixVisual />,
        code: {
            cpp: `// C++ snippet
vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> res;
    if(matrix.empty()) return res;
    int top = 0, bottom = matrix.size()-1;
    int left = 0, right = matrix[0].size()-1;
    while(top <= bottom && left <= right) {
        for(int i = left; i <= right; i++) res.push_back(matrix[top][i]);
        top++;
        for(int i = top; i <= bottom; i++) res.push_back(matrix[i][right]);
        right--;
        if(top <= bottom) {
            for(int i = right; i >= left; i--) res.push_back(matrix[bottom][i]);
            bottom--;
        }
        if(left <= right) {
            for(int i = bottom; i >= top; i--) res.push_back(matrix[i][left]);
            left++;
        }
    }
    return res;
}`,
            java: `// Java snippet
public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> res = new ArrayList<>();
    if(matrix.length == 0) return res;
    int top = 0, bottom = matrix.length - 1;
    int left = 0, right = matrix[0].length - 1;
    while(top <= bottom && left <= right) {
        for(int i = left; i <= right; i++) res.add(matrix[top][i]);
        top++;
        for(int i = top; i <= bottom; i++) res.add(matrix[i][right]);
        right--;
        if(top <= bottom) {
            for(int i = right; i >= left; i--) res.add(matrix[bottom][i]);
            bottom--;
        }
        if(left <= right) {
            for(int i = bottom; i >= top; i--) res.add(matrix[i][left]);
            left++;
        }
    }
    return res;
}`
        }
    },
    "search-sorted-matrix": {
        title: "Search in a sorted matrix",
        explanation: "If rows and columns are sorted, we can search in O(m+n) by starting from the top-right corner, moving down if the target is larger, and left if the target is smaller.",
        code: {
            cpp: `// C++ snippet
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int row = 0, col = matrix[0].size() - 1;
    while (row < matrix.size() && col >= 0) {
        if (matrix[row][col] == target) return true;
        if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`,
            java: `// Java snippet
public boolean searchMatrix(int[][] matrix, int target) {
    if(matrix == null || matrix.length == 0) return false;
    int row = 0, col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] == target) return true;
        else if(matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}`
        }
    },
    "string-definition": {
        title: "What is a String (Character Sequence)",
        explanation: "A string is an ordered sequence of characters. In most DSA problems, you can treat strings like character arrays and solve them with indexing, loops, pointers, and maps.",
        visual: <GenericArrayVisualizer inputArray={['s', 't', 'r', 'i', 'n', 'g']} outputVariable={'"string" (length = 6)'} description="String is a sequence of characters at indices 0 to n-1" />,
        code: {
            cpp: `// C++ snippet
string s = "hello";
cout << s[0] << endl;      // h
cout << s.size() << endl;  // 5`,
            java: `// Java snippet
String s = "hello";
System.out.println(s.charAt(0)); // h
System.out.println(s.length());  // 5`
        }
    },
    "char-vs-string": {
        title: "Char vs String and ASCII/Unicode basics",
        explanation: "A char stores one character, while a string stores many characters. Characters map to numeric codes (ASCII/Unicode), which helps in comparison, hashing, and frequency problems.",
        visual: <GenericArrayVisualizer inputArray={['A', 'B', 'C']} outputVariable="char = one symbol, string = many symbols" description="Characters have numeric codes: 'A' = 65, 'a' = 97 (ASCII)" />,
        code: {
            cpp: `// C++ snippet
char ch = 'A';
string word = "Apple";
cout << (int)ch << endl;      // 65
cout << word[0] << endl;      // A`,
            java: `// Java snippet
char ch = 'A';
String word = "Apple";
System.out.println((int) ch);       // 65
System.out.println(word.charAt(0)); // A`
        }
    },
    "string-indexing-traversal": {
        title: "Indexing and traversal in strings",
        explanation: "Just like arrays, strings are indexed from 0. Most problems start with linear traversal using loops.",
        visual: <GenericArrayVisualizer inputArray={['c', 'o', 'd', 'e']} outputVariable="Traverse from i = 0 to n - 1" description="Visit every character exactly once" highlightIndices={[0, 1, 2, 3]} />,
        code: {
            cpp: `// C++ snippet
string s = "code";
for (int i = 0; i < s.size(); i++) {
    cout << s[i] << " ";
}`,
            java: `// Java snippet
String s = "code";
for (int i = 0; i < s.length(); i++) {
    System.out.print(s.charAt(i) + " ");
}`
        }
    },
    "string-immutability": {
        title: "Immutability in Java vs mutability techniques in C++",
        explanation: "In Java, String is immutable, so every modification creates a new string. In C++, std::string characters can be modified directly by index.",
        visual: <GenericArrayVisualizer inputArray={['h', 'e', 'l', 'l', 'o']} outputVariable="Java: use StringBuilder for in-place style edits" description="Mutation behavior differs by language" />,
        code: {
            cpp: `// C++ snippet (mutable by index)
string s = "hello";
s[0] = 'H';      // now "Hello"`,
            java: `// Java snippet (String is immutable)
String s = "hello";
StringBuilder sb = new StringBuilder(s);
sb.setCharAt(0, 'H');
s = sb.toString(); // "Hello"`
        }
    },
    "string-complexity": {
        title: "Time complexity basics of common string operations",
        explanation: "Index access is O(1), traversal is O(n), and many operations like concatenation or substring creation can involve O(n) copying depending on implementation.",
        visual: <GenericArrayVisualizer inputArray={['Index', 'Traverse', 'Concat', 'Search']} outputVariable="O(1), O(n), O(n), O(n*m)" description="Know operation cost before choosing approach" />,
        code: {
            cpp: `// Complexity quick notes
// s[i]                -> O(1)
// loop over string    -> O(n)
// s1 + s2             -> O(n + m)
// naive pattern match -> O(n * m)`,
            java: `// Complexity quick notes
// s.charAt(i)         -> O(1)
// traversal           -> O(n)
// s1 + s2 in loop     -> costly (prefer StringBuilder)
// naive search        -> O(n * m)`
        }
    },
    "string-input-output": {
        title: "Take string input and output",
        explanation: "For full-line input (with spaces), use getline in C++ and nextLine in Java.",
        visual: <GenericArrayVisualizer outputArray={['hello world']} outputVariable="Read complete line including spaces" description="Input and output flow for strings" />,
        code: {
            cpp: `// C++ snippet
string s;
getline(cin, s);   // reads full line
cout << s << endl;`,
            java: `// Java snippet
Scanner sc = new Scanner(System.in);
String s = sc.nextLine();  // full line
System.out.println(s);`
        }
    },
    "string-length-concat": {
        title: "Length, concatenation, and append",
        explanation: "String length is fundamental for loops and bounds. Concatenation builds new strings, while builders are more efficient for repeated appends.",
        visual: <GenericArrayVisualizer inputArray={['"hello"', '"world"']} outputVariable={'"hello world"'} description="Join strings and measure final length" />,
        code: {
            cpp: `// C++ snippet
string a = "hello";
string b = "world";
string c = a + " " + b;   // "hello world"
cout << c.size() << endl;`,
            java: `// Java snippet
String a = "hello";
String b = "world";
String c = a + " " + b;
System.out.println(c.length());

StringBuilder sb = new StringBuilder();
sb.append(a).append(" ").append(b);`
        }
    },
    "reverse-string-basic": {
        title: "Reverse a string",
        explanation: "Reversing is a foundational operation used in many problems, and it is typically solved with two pointers.",
        visual: <GenericArrayVisualizer inputArray={['c', 'o', 'd', 'e']} outputArray={['e', 'd', 'o', 'c']} description="Reverse by swapping start and end characters" />,
        code: {
            cpp: `// C++ snippet
string s = "code";

// Approach 1: Built-in (quick)
string viaLibrary = s;
reverse(viaLibrary.begin(), viaLibrary.end());

// Approach 2: Manual two-pointer (important for interviews)
int left = 0, right = (int)s.size() - 1;
while (left < right) {
    swap(s[left], s[right]);
    left++;
    right--;
}
cout << s << endl; // edoc`,
            java: `// Java snippet
String s = "code";

// Approach 1: Built-in helper
String viaLibrary = new StringBuilder(s).reverse().toString();

// Approach 2: Manual two-pointer
char[] arr = s.toCharArray();
int left = 0, right = arr.length - 1;
while (left < right) {
    char temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
String manual = new String(arr);
System.out.println(manual); // edoc`
        }
    },
    "palindrome-check-basic": {
        title: "Check if a string is palindrome",
        explanation: "Use two pointers: compare left and right characters, then move inward. If all pairs match, the string is a palindrome.",
        visual: <GenericArrayVisualizer inputArray={['l', 'e', 'v', 'e', 'l']} outputVariable="left and right pointers meet -> palindrome" description="Two-pointer palindrome check" highlightIndices={[0, 4]} />,
        code: {
            cpp: `// C++ snippet
bool isPalindrome(string s) {
    int left = 0, right = (int)s.size() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}`,
            java: `// Java snippet
boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
}`
        }
    },
    "string-frequency-basic": {
        title: "Character frequency counting",
        explanation: "Frequency tables are one of the most useful tools in string problems: anagrams, duplicates, uniqueness, and pattern checks.",
        visual: <GenericArrayVisualizer inputArray={['b', 'a', 'n', 'a', 'n', 'a']} outputVariable="{a:3, b:1, n:2}" description="Count every character while traversing once" />,
        code: {
            cpp: `// C++ snippet (lowercase only)
vector<int> freq(26, 0);
string s = "banana";
for (char ch : s) freq[ch - 'a']++;
cout << freq['a' - 'a']; // 3`,
            java: `// Java snippet
Map<Character, Integer> freq = new HashMap<>();
String s = "banana";
for (char ch : s.toCharArray()) {
    freq.put(ch, freq.getOrDefault(ch, 0) + 1);
}`
        }
    },
    "substring-vs-subsequence": {
        title: "Substring vs Subsequence",
        explanation: "Substring means continuous characters. Subsequence means order is preserved, but characters need not be adjacent.",
        visual: <GenericArrayVisualizer inputArray={['s', 'k', 'i', 'l', 'l']} outputArray={['k', 'i', 'l']} outputVariable={'"kil" can be substring and subsequence; "sl" is only subsequence'} description="Continuity is the key difference" highlightIndices={[1, 2, 3]} />,
        code: {
            cpp: `// Example with "skill":
// Substring: "kil" (continuous)
// Subsequence: "sil" (indices 0,2,3)
// Every substring is a subsequence, but not vice versa.`,
            java: `// Counts:
// Total substrings = n * (n + 1) / 2
// Total subsequences = 2^n`
        }
    },
    "anagram-check": {
        title: "Anagram check (sorting and frequency map methods)",
        explanation: "Two strings are anagrams if they contain exactly the same characters with the same frequencies.",
        visual: <GenericArrayVisualizer inputArray={['l', 'i', 's', 't', 'e', 'n']} outputArray={['s', 'i', 'l', 'e', 'n', 't']} outputVariable="Anagram -> true" description="Compare sorted forms or frequency counts" />,
        code: {
            cpp: `// C++ snippet
// Approach 1: Sorting
bool isAnagramSort(string a, string b) {
    if (a.size() != b.size()) return false;
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    return a == b;
}

// Approach 2: Frequency counting (without sorting)
bool isAnagramFreq(string a, string b) {
    if (a.size() != b.size()) return false;
    vector<int> freq(26, 0);
    for (char ch : a) freq[ch - 'a']++;
    for (char ch : b) freq[ch - 'a']--;
    for (int x : freq) if (x != 0) return false;
    return true;
}`,
            java: `// Java snippet
// Approach 1: Frequency counting (without sorting)
boolean isAnagramFreq(String a, String b) {
    if (a.length() != b.length()) return false;
    int[] freq = new int[26];
    for (int i = 0; i < a.length(); i++) {
        freq[a.charAt(i) - 'a']++;
        freq[b.charAt(i) - 'a']--;
    }
    for (int x : freq) if (x != 0) return false;
    return true;
}

// Approach 2: Sorting
boolean isAnagramSort(String a, String b) {
    if (a.length() != b.length()) return false;
    char[] x = a.toCharArray();
    char[] y = b.toCharArray();
    Arrays.sort(x);
    Arrays.sort(y);
    return Arrays.equals(x, y);
}`
        }
    },
    "first-non-repeating-char": {
        title: "First non-repeating character",
        explanation: "Count frequencies first, then scan again to find the first character whose frequency is 1.",
        visual: <GenericArrayVisualizer inputArray={['s', 'w', 'i', 's', 's']} outputVariable="First non-repeating = w (index 1)" description="Two-pass frequency strategy" highlightIndices={[1]} />,
        code: {
            cpp: `// C++ snippet
int firstUniqChar(string s) {
    vector<int> freq(26, 0);
    for (char ch : s) freq[ch - 'a']++;
    for (int i = 0; i < s.size(); i++) {
        if (freq[s[i] - 'a'] == 1) return i;
    }
    return -1;
}`,
            java: `// Java snippet
int firstUniqChar(String s) {
    int[] freq = new int[26];
    for (char ch : s.toCharArray()) freq[ch - 'a']++;
    for (int i = 0; i < s.length(); i++) {
        if (freq[s.charAt(i) - 'a'] == 1) return i;
    }
    return -1;
}`
        }
    },
    "longest-common-prefix": {
        title: "Longest common prefix",
        explanation: "A common interview favorite: identify the longest prefix shared by all strings in the array.",
        visual: <GenericArrayVisualizer inputArray={['flower', 'flow', 'flight']} outputVariable={'Longest common prefix = "fl"'} description="Shrink prefix until every word starts with it" />,
        code: {
            cpp: `// C++ snippet
string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    string prefix = strs[0];
    for (int i = 1; i < strs.size(); i++) {
        while (strs[i].find(prefix) != 0) {
            prefix.pop_back();
            if (prefix.empty()) return "";
        }
    }
    return prefix;
}`,
            java: `// Java snippet
String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }
    }
    return prefix;
}`
        }
    },
    "reverse-words-sentence": {
        title: "Reverse words in a sentence",
        explanation: "This problem tests trimming, splitting, and reconstruction. Reverse word order while keeping each word intact.",
        visual: <GenericArrayVisualizer inputArray={['i', 'love', 'dsa']} outputArray={['dsa', 'love', 'i']} description="Reverse word order, not characters inside each word" />,
        code: {
            cpp: `// C++ snippet
string reverseWords(string s) {
    stringstream ss(s);
    vector<string> words;
    string w;
    while (ss >> w) words.push_back(w);

    // Manual reverse of words array (without reverse function)
    int left = 0, right = (int)words.size() - 1;
    while (left < right) {
        swap(words[left], words[right]);
        left++;
        right--;
    }

    string ans;
    for (int i = 0; i < words.size(); i++) {
        if (i) ans += " ";
        ans += words[i];
    }
    return ans;
}`,
            java: `// Java snippet
String reverseWords(String s) {
    // Approach 1: split + reverse traversal
    String[] words = s.trim().split("\\\\s+");
    StringBuilder sb = new StringBuilder();
    for (int i = words.length - 1; i >= 0; i--) {
        sb.append(words[i]);
        if (i != 0) sb.append(" ");
    }
    return sb.toString();
}`
        }
    },
    "basic-string-practice-set": {
        title: "Practice set: beginner to early-intermediate questions",
        explanation: "Solve these in sequence: reverse string, palindrome check, anagram check, first unique char, longest common prefix, reverse words, valid parentheses, and string compression.",
        visual: <GenericArrayVisualizer inputArray={['Easy', 'Easy', 'Easy', 'Medium', 'Medium', 'Medium']} outputVariable="Target: 8 solved questions + 2 revisions" description="Build consistency before advanced patterns" />,
        code: {
            cpp: `// Suggested question order
// 1) Reverse String
// 2) Valid Palindrome
// 3) Valid Anagram
// 4) First Unique Character
// 5) Longest Common Prefix
// 6) Reverse Words in String
// 7) Valid Parentheses
// 8) String Compression`,
            java: `// Tracking template
// For each question, record:
// - Approach used
// - Time complexity
// - Space complexity
// - 2 edge cases`
        }
    },
    "two-pointers-strings-usage": {
        title: "Use case: Two pointers on strings",
        explanation: "Two pointers are ideal for palindrome checks, reversal, and problems requiring comparisons from both ends.",
        visual: <GenericArrayVisualizer inputArray={['r', 'a', 'c', 'e', 'c', 'a', 'r']} outputVariable="left++ and right-- until pointers cross" description="Two-pointer movement on a string" highlightIndices={[0, 6]} />,
        code: {
            cpp: `// C++ snippet - Valid palindrome after at most one deletion
bool check(string& s, int i, int j) {
    while (i < j) if (s[i++] != s[j--]) return false;
    return true;
}
bool validPalindrome(string s) {
    int i = 0, j = (int)s.size() - 1;
    while (i < j) {
        if (s[i] != s[j]) return check(s, i + 1, j) || check(s, i, j - 1);
        i++; j--;
    }
    return true;
}`,
            java: `// Java snippet - same idea
boolean check(String s, int i, int j) {
    while (i < j) if (s.charAt(i++) != s.charAt(j--)) return false;
    return true;
}
boolean validPalindrome(String s) {
    int i = 0, j = s.length() - 1;
    while (i < j) {
        if (s.charAt(i) != s.charAt(j)) {
            return check(s, i + 1, j) || check(s, i, j - 1);
        }
        i++; j--;
    }
    return true;
}`
        }
    },
    "longest-substring-without-repeat": {
        title: "Longest substring without repeating characters",
        explanation: "Sliding window plus last seen indices gives an O(n) solution for this classic problem.",
        visual: <GenericArrayVisualizer inputArray={['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b']} outputVariable="Longest window length = 3 (abc)" description="Expand right, move left when duplicate appears" />,
        code: {
            cpp: `// C++ snippet
int lengthOfLongestSubstring(string s) {
    vector<int> last(256, -1);
    int left = 0, best = 0;
    for (int right = 0; right < s.size(); right++) {
        left = max(left, last[s[right]] + 1);
        last[s[right]] = right;
        best = max(best, right - left + 1);
    }
    return best;
}`,
            java: `// Java snippet
int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> last = new HashMap<>();
    int left = 0, best = 0;
    for (int right = 0; right < s.length(); right++) {
        char ch = s.charAt(right);
        if (last.containsKey(ch)) {
            left = Math.max(left, last.get(ch) + 1);
        }
        last.put(ch, right);
        best = Math.max(best, right - left + 1);
    }
    return best;
}`
        }
    },
    "min-window-substring": {
        title: "Minimum window substring",
        explanation: "Maintain required character counts. Expand right to satisfy all requirements, then shrink left to get the minimum valid window.",
        visual: <GenericArrayVisualizer inputArray={['A', 'D', 'O', 'B', 'E', 'C', 'O', 'D', 'E', 'B', 'A', 'N', 'C']} outputVariable="Target = ABC, minimum window = BANC" description="Variable window that shrinks after meeting requirement" />,
        code: {
            cpp: `// C++ snippet
string minWindow(string s, string t) {
    vector<int> need(128, 0);
    for (char c : t) need[c]++;
    int missing = t.size(), left = 0, start = 0, bestLen = INT_MAX;
    for (int right = 0; right < s.size(); right++) {
        if (need[s[right]] > 0) missing--;
        need[s[right]]--;
        while (missing == 0) {
            if (right - left + 1 < bestLen) {
                bestLen = right - left + 1;
                start = left;
            }
            need[s[left]]++;
            if (need[s[left]] > 0) missing++;
            left++;
        }
    }
    return bestLen == INT_MAX ? "" : s.substr(start, bestLen);
}`,
            java: `// Java snippet
String minWindow(String s, String t) {
    int[] need = new int[128];
    for (char c : t.toCharArray()) need[c]++;
    int missing = t.length(), left = 0, start = 0, bestLen = Integer.MAX_VALUE;
    for (int right = 0; right < s.length(); right++) {
        if (need[s.charAt(right)] > 0) missing--;
        need[s.charAt(right)]--;
        while (missing == 0) {
            if (right - left + 1 < bestLen) {
                bestLen = right - left + 1;
                start = left;
            }
            need[s.charAt(left)]++;
            if (need[s.charAt(left)] > 0) missing++;
            left++;
        }
    }
    return bestLen == Integer.MAX_VALUE ? "" : s.substring(start, start + bestLen);
}`
        }
    },
    "group-anagrams": {
        title: "Group anagrams",
        explanation: "Canonical key strategy: sort each word and use it as the hash key. Words with same sorted key belong to one group.",
        visual: <GenericArrayVisualizer inputArray={['eat', 'tea', 'tan', 'ate', 'nat', 'bat']} outputVariable="[[eat, tea, ate], [tan, nat], [bat]]" description="Hash map key = sorted characters" />,
        code: {
            cpp: `// C++ snippet
vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> mp;
    for (string s : strs) {
        string key = s;
        sort(key.begin(), key.end());
        mp[key].push_back(s);
    }
    vector<vector<string>> ans;
    for (auto& p : mp) ans.push_back(p.second);
    return ans;
}`,
            java: `// Java snippet
List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        String key = new String(arr);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
}`
        }
    },
    "string-pattern-practice-set": {
        title: "Practice set: sliding window and hashing patterns",
        explanation: "Cover core medium-level string patterns: longest substring without repeat, permutation in string, minimum window substring, find all anagrams in a string, and group anagrams.",
        visual: <GenericArrayVisualizer inputArray={['Window', 'Hash Map', 'Frequency Array']} outputVariable="Focus on O(n) thinking and shrinking windows correctly" description="Pattern-based practice for interview consistency" />,
        code: {
            cpp: `// Must-do pattern problems
// 1) Longest Substring Without Repeating Characters
// 2) Minimum Window Substring
// 3) Find All Anagrams in a String
// 4) Permutation in String
// 5) Group Anagrams`,
            java: `// Solve each problem twice:
// - First for correctness
// - Second with complexity + edge-case awareness`
        }
    },
    "kmp-intuition": {
        title: "KMP intuition",
        explanation: "KMP avoids unnecessary re-checking by using previously matched prefix information. This improves pattern search from O(n*m) to O(n+m).",
        visual: <GenericArrayVisualizer inputArray={['a', 'b', 'a', 'b', 'a', 'c']} outputVariable="Reuse previous match info instead of restarting from scratch" description="Core idea behind KMP pattern matching" />,
        code: {
            cpp: `// KMP search complexity: O(n + m)
// Step 1: Build LPS array for pattern
// Step 2: Scan text with two pointers using LPS fallback`,
            java: `// KMP idea:
// If mismatch at j, jump j to lps[j - 1] instead of j = 0
// This preserves already-known prefix matches`
        }
    },
    "lps-array-construction": {
        title: "LPS array construction",
        explanation: "LPS[i] stores the longest proper prefix which is also a suffix for pattern[0..i]. It drives the KMP fallback jumps.",
        visual: <GenericArrayVisualizer inputArray={['a', 'b', 'a', 'b', 'a', 'c']} outputArray={[0, 0, 1, 2, 3, 0]} description="LPS values for pattern = ab ab ac" />,
        code: {
            cpp: `// C++ snippet
vector<int> buildLPS(string p) {
    vector<int> lps(p.size(), 0);
    int len = 0;
    for (int i = 1; i < p.size();) {
        if (p[i] == p[len]) {
            lps[i++] = ++len;
        } else if (len > 0) {
            len = lps[len - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}`,
            java: `// Java snippet
int[] buildLPS(String p) {
    int[] lps = new int[p.length()];
    int len = 0, i = 1;
    while (i < p.length()) {
        if (p.charAt(i) == p.charAt(len)) {
            lps[i++] = ++len;
        } else if (len > 0) {
            len = lps[len - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}`
        }
    },
    "rabin-karp-intro": {
        title: "Rabin-Karp (rolling hash) intro",
        explanation: "Rabin-Karp hashes the pattern and each same-length text window. Matching hashes indicate potential matches, which can be verified by direct comparison.",
        visual: <GenericArrayVisualizer inputArray={['Window1', 'Window2', 'Window3']} outputVariable="Compare rolling hash values quickly" description="Sliding hash over fixed-size windows" />,
        code: {
            cpp: `// Rabin-Karp outline
// 1) Compute hash(pattern) and first window hash
// 2) Slide window and update hash in O(1) (rolling hash)
// 3) On hash match, verify characters`,
            java: `// Rolling hash avoids recomputing full hash for each window
// Typical use: fast substring search with low collision probability`
        }
    },
    "z-algorithm-intro": {
        title: "Z algorithm intro",
        explanation: "Z[i] is the length of the longest substring starting at i that matches the prefix of the entire string. Useful for linear-time pattern matching.",
        visual: <GenericArrayVisualizer inputArray={['a', 'a', 'b', 'x', 'a', 'a', 'z']} outputVariable="Z values capture prefix matches from each index" description="Efficient prefix matching across positions" />,
        code: {
            cpp: `// Z algorithm complexity: O(n)
// Build Z array on: pattern + '$' + text
// If any Z value equals pattern length => match found`,
            java: `// Maintain [L, R] window that matches prefix
// Reuse previous Z values when index falls inside [L, R]`
        }
    },
    "advanced-string-practice-set": {
        title: "Practice set: pattern matching and mixed hard questions",
        explanation: "Practice KMP pattern search, repeated substring pattern, shortest palindrome, longest happy prefix, and string matching in an array.",
        visual: <GenericArrayVisualizer inputArray={['KMP', 'Rolling Hash', 'Z Algorithm']} outputVariable="Goal: choose the right algorithm by constraints" description="Advanced set for pattern-matching confidence" />,
        code: {
            cpp: `// Advanced practice list
// 1) Implement KMP search
// 2) Repeated Substring Pattern
// 3) Longest Happy Prefix
// 4) String Matching in an Array
// 5) Shortest Palindrome`,
            java: `// Revision strategy:
// - Re-derive LPS and Z array manually on paper
// - Compare O(n*m) vs O(n+m) on same examples`
        }
    },
    "lcs-dp": {
        title: "Longest Common Subsequence (LCS)",
        explanation: "LCS is the backbone DP problem on strings. Build a 2D table where each cell stores best answer for prefixes of two strings.",
        visual: <GenericArrayVisualizer inputArray={['a', 'b', 'c', 'd', 'e']} outputArray={['a', 'c', 'e']} outputVariable="LCS length = 3" description="DP over two strings using include/skip decisions" />,
        code: {
            cpp: `// C++ snippet
int lcs(string a, string b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n][m];
}`,
            java: `// Java snippet
int lcs(String a, String b) {
    int n = a.length(), m = b.length();
    int[][] dp = new int[n + 1][m + 1];
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a.charAt(i - 1) == b.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n][m];
}`
        }
    },
    "edit-distance-dp": {
        title: "Edit Distance",
        explanation: "Edit distance finds the minimum inserts, deletes, and replacements needed to convert one string into another.",
        visual: <GenericArrayVisualizer inputArray={['h', 'o', 'r', 's', 'e']} outputArray={['r', 'o', 's']} outputVariable="Minimum operations = 3" description="DP with three transitions: insert, delete, replace" />,
        code: {
            cpp: `// C++ snippet
int minDistance(string a, string b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});
        }
    }
    return dp[n][m];
}`,
            java: `// Java snippet
int minDistance(String a, String b) {
    int n = a.length(), m = b.length();
    int[][] dp = new int[n + 1][m + 1];
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a.charAt(i - 1) == b.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
        }
    }
    return dp[n][m];
}`
        }
    },
    "word-break-problem": {
        title: "Word Break problem",
        explanation: "Use DP where dp[i] indicates whether substring [0..i) can be segmented into valid dictionary words.",
        visual: <GenericArrayVisualizer inputArray={['leet', 'code']} outputVariable={'"leetcode" -> true'} description="Check if full string can be segmented from dictionary words" />,
        code: {
            cpp: `// C++ snippet
bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> dict(wordDict.begin(), wordDict.end());
    vector<bool> dp(s.size() + 1, false);
    dp[0] = true;
    for (int i = 1; i <= s.size(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && dict.count(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.size()];
}`,
            java: `// Java snippet
boolean wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    boolean[] dp = new boolean[s.length() + 1];
    dp[0] = true;
    for (int i = 1; i <= s.length(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && dict.contains(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length()];
}`
        }
    },
    "trie-strings-basics": {
        title: "Trie basics for string dictionaries",
        explanation: "Trie stores strings character-by-character and is useful for prefix queries, autocomplete, and dictionary search.",
        visual: <GenericArrayVisualizer inputArray={['app', 'apple', 'apt']} outputVariable="Shared prefix 'ap' stored once in Trie" description="Prefix tree reduces repeated storage of common prefixes" />,
        code: {
            cpp: `// C++ snippet
struct TrieNode {
    TrieNode* child[26] = {};
    bool end = false;
};
void insert(TrieNode* root, string word) {
    TrieNode* cur = root;
    for (char c : word) {
        int idx = c - 'a';
        if (!cur->child[idx]) cur->child[idx] = new TrieNode();
        cur = cur->child[idx];
    }
    cur->end = true;
}`,
            java: `// Java snippet
class TrieNode {
    TrieNode[] child = new TrieNode[26];
    boolean end;
}
void insert(TrieNode root, String word) {
    TrieNode cur = root;
    for (char c : word.toCharArray()) {
        int idx = c - 'a';
        if (cur.child[idx] == null) cur.child[idx] = new TrieNode();
        cur = cur.child[idx];
    }
    cur.end = true;
}`
        }
    },
    "string-interview-sheet": {
        title: "Final interview checklist and revision sheet",
        explanation: "Revise by pattern, not by random order: basics, two pointers, sliding window, hashing, pattern matching, and DP. Keep a small sheet of mistakes and edge cases.",
        visual: <GenericArrayVisualizer inputArray={['Basics', 'Window', 'Hashing', 'KMP/Z', 'DP']} outputVariable="Revision cycle: solve -> analyze -> re-solve" description="Interview-ready string revision flow" />,
        code: {
            cpp: `// Final must-do checklist
// 1) Valid Palindrome
// 2) Longest Substring Without Repeating
// 3) Minimum Window Substring
// 4) Group Anagrams
// 5) KMP + LPS implementation
// 6) LCS and Edit Distance
// 7) Word Break
// 8) Trie insert + search`,
            java: `// Weekly revision loop
// Day 1: Basics + frequency
// Day 2: Sliding window
// Day 3: Hash map patterns
// Day 4: KMP/Z/Rolling hash
// Day 5: DP on strings
// Day 6: Mixed contest set
// Day 7: Revisit mistakes`
        }
    },
    "recursion-definition": {
        title: "What is Recursion (Function calling itself)",
        explanation: "Recursion is a technique where a function solves a problem by calling itself on a smaller input. The function keeps reducing the problem until a stopping condition is reached.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="countdown(3) recursion tree"
                levels={[
                    { label: "Level 0", nodes: ['countdown(3)'], output: "Print pending: 3" },
                    { label: "Level 1", nodes: ['countdown(2)'], output: "Print pending: 2" },
                    { label: "Level 2", nodes: ['countdown(1)'], output: "Print pending: 1" },
                    { label: "Level 3", nodes: ['countdown(0)'], output: "Base case hit, start returning" }
                ]}
                finalOutput="3 2 1"
                note="Calls go downward first, output may happen before or after recursive call based on code position."
            />
        ),
        code: {
            cpp: `// C++ snippet
void countdown(int n) {
    if (n == 0) return;  // Base case
    cout << n << " ";
    countdown(n - 1);    // Recursive case
}`,
            java: `// Java snippet
void countdown(int n) {
    if (n == 0) return;  // Base case
    System.out.print(n + " ");
    countdown(n - 1);    // Recursive case
}`
        }
    },
    "base-case-vs-recursive-case": {
        title: "Base case vs Recursive case",
        explanation: "Every recursive function needs at least one base case to stop further calls. Recursive case should move input toward that base case; otherwise recursion never terminates.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="sumN(4): base case and unwind output"
                levels={[
                    { label: "Level 0", nodes: ['sumN(4)'], output: "Waits for 4 + sumN(3)" },
                    { label: "Level 1", nodes: ['sumN(3)'], output: "Waits for 3 + sumN(2)" },
                    { label: "Level 2", nodes: ['sumN(2)'], output: "Waits for 2 + sumN(1)" },
                    { label: "Level 3", nodes: ['sumN(1)'], output: "Base case returns 1" }
                ]}
                finalOutput="1 -> 3 -> 6 -> 10"
                note="Base case gives first concrete value, then upper levels compute final answer while returning."
            />
        ),
        code: {
            cpp: `// C++ snippet
int sumN(int n) {
    if (n == 1) return 1;        // Base case
    return n + sumN(n - 1);      // Recursive case
}`,
            java: `// Java snippet
int sumN(int n) {
    if (n <= 1) return n;       // Base case
    int partial = sumN(n - 1);  // Recursive call
    return n + partial;         // Combine on unwind
}`
        }
    },
    "recursion-call-stack": {
        title: "Call stack and stack frames",
        explanation: "Each recursive call creates a new stack frame storing local variables and return address. When base case is hit, frames are popped in reverse order (LIFO).",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Call stack view: fact(4)"
                levels={[
                    { label: "Push 0", nodes: ['fact(4)'], output: "Needs fact(3)" },
                    { label: "Push 1", nodes: ['fact(3)'], output: "Needs fact(2)" },
                    { label: "Push 2", nodes: ['fact(2)'], output: "Needs fact(1)" },
                    { label: "Push 3", nodes: ['fact(1)'], output: "Returns 1 to previous frame" }
                ]}
                finalOutput="Unwind values: 1 -> 2 -> 6 -> 24"
                note="Each recursive call creates a stack frame; return phase pops frames in LIFO order."
            />
        ),
        code: {
            cpp: `// C++ snippet
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}`,
            java: `// Java snippet
long fact(int n) {
    if (n <= 1) return 1L;
    long child = fact(n - 1);
    return n * child;
}`
        }
    },
    "recursion-tree-dry-run": {
        title: "Dry run using recursion tree",
        explanation: "A recursion tree shows how calls branch and helps estimate time complexity. It is especially useful for problems with multiple recursive calls like Fibonacci.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="fib(4) recursion tree dry run"
                levels={[
                    { label: "Level 0", nodes: ['fib(4)'], output: "Split -> fib(3) + fib(2)" },
                    { label: "Level 1", nodes: ['fib(3)', 'fib(2)'], output: "2 branches created" },
                    { label: "Level 2", nodes: ['fib(2)', 'fib(1)', 'fib(1)', 'fib(0)'], output: "Overlapping states visible" },
                    { label: "Level 3", nodes: ['fib(1)', 'fib(0)'], output: "Base values: 1 and 0" }
                ]}
                finalOutput="fib(4) = 3"
                note="Repeated nodes like fib(2) and fib(1) indicate why memoization helps."
            />
        ),
        code: {
            cpp: `// C++ snippet
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}`,
            java: `// Java snippet
int fib(int n) {
    if (n <= 1) return n;
    int left = fib(n - 1);
    int right = fib(n - 2);
    return left + right;
}`
        }
    },
    "print-1-to-n-recursion": {
        title: "Print 1 to N using recursion",
        explanation: "To print in increasing order, first recurse for smaller numbers and print while returning. This demonstrates how unwind phase can be used as logic.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="print1ToN(5): level-wise call and output"
                levels={[
                    { label: "Level 0", nodes: ['print(5)'], output: "Calls print(4) first" },
                    { label: "Level 1", nodes: ['print(4)'], output: "Calls print(3) first" },
                    { label: "Level 2", nodes: ['print(3)'], output: "Calls print(2) first" },
                    { label: "Level 3", nodes: ['print(2)', 'print(1)', 'print(0)'], output: "Base reached, unwind starts" }
                ]}
                finalOutput="1 2 3 4 5"
                note="Because print line comes after recursive call, numbers appear during return phase."
            />
        ),
        code: {
            cpp: `// C++ snippet
void print1ToN(int n) {
    if (n == 0) return;
    print1ToN(n - 1);
    cout << n << " ";
}`,
            java: `// Java snippet
void print1ToN(int n) {
    if (n == 0) return;
    print1ToN(n - 1);
    System.out.print(n + " ");
}`
        }
    },
    "factorial-recursion": {
        title: "Factorial using recursion",
        explanation: "Factorial has a direct recursive definition: n! = n * (n-1)!. This is a standard beginner problem for understanding return-flow in recursion.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="factorial(5): return value per level"
                levels={[
                    { label: "Level 0", nodes: ['fact(5)'], output: "Pending: 5 * fact(4)" },
                    { label: "Level 1", nodes: ['fact(4)'], output: "Pending: 4 * fact(3)" },
                    { label: "Level 2", nodes: ['fact(3)'], output: "Pending: 3 * fact(2)" },
                    { label: "Level 3", nodes: ['fact(2)', 'fact(1)'], output: "fact(1)=1, then compute upward" }
                ]}
                finalOutput="1 -> 2 -> 6 -> 24 -> 120"
                note="Factorial is a linear recursion where each level contributes one multiplication."
            />
        ),
        code: {
            cpp: `// C++ snippet
long long factorial(int n) {
    if (n <= 1) return 1;
    return 1LL * n * factorial(n - 1);
}`,
            java: `// Java snippet
long factorial(int n) {
    if (n <= 1) return 1;
    return 1L * n * factorial(n - 1);
}`
        }
    },
    "fibonacci-recursion": {
        title: "Fibonacci recursion (and its cost)",
        explanation: "Naive Fibonacci recursion is simple to write but highly inefficient due to overlapping subproblems. It is a perfect example to motivate memoization.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="fib(5): branching tree with level outputs"
                levels={[
                    { label: "Level 0", nodes: ['fib(5)'], output: "Split to fib(4) + fib(3)" },
                    { label: "Level 1", nodes: ['fib(4)', 'fib(3)'], output: "2 recursive branches" },
                    { label: "Level 2", nodes: ['fib(3)', 'fib(2)', 'fib(2)', 'fib(1)'], output: "4 calls (overlap starts)" },
                    { label: "Level 3", nodes: ['fib(2)', 'fib(1)', 'fib(1)', 'fib(0)', 'fib(1)', 'fib(0)'], output: "Many repeated base-expansions" }
                ]}
                finalOutput="fib(5) = 5"
                note="Naive Fibonacci revisits same states across levels, giving near O(2^n) complexity."
            />
        ),
        code: {
            cpp: `// C++ snippet
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}`,
            java: `// Java snippet
int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}`
        }
    },
    "reverse-array-recursion": {
        title: "Reverse an array recursively",
        explanation: "Swap left and right elements, then recurse on the inner subarray. This pattern strengthens index-based recursion with shrinking boundaries.",
        visual: <GenericArrayVisualizer inputArray={[1, 2, 3, 4, 5]} outputArray={[5, 4, 3, 2, 1]} description="Swap outer pair and move inward recursively" highlightIndices={[0, 4]} />,
        code: {
            cpp: `// C++ snippet
void reverseArr(vector<int>& a, int l, int r) {
    if (l >= r) return;
    swap(a[l], a[r]);
    reverseArr(a, l + 1, r - 1);
}`,
            java: `// Java snippet
void reverseArr(int[] a, int l, int r) {
    if (l >= r) return;
    int temp = a[l];
    a[l] = a[r];
    a[r] = temp;
    reverseArr(a, l + 1, r - 1);
}`
        }
    },
    "parameterized-vs-functional-recursion": {
        title: "Parameterized vs Functional recursion",
        explanation: "Parameterized recursion carries answer in arguments (stateful accumulation), while functional recursion returns answers from child calls. Both are useful in interviews.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Parameterized vs Functional recursion flow"
                levels={[
                    { label: "Level 0", nodes: ['sumParam(3,0)', 'sumFunc(3)'], output: "Two styles start with same input" },
                    { label: "Level 1", nodes: ['sumParam(2,3)', 'sumFunc(2)'], output: "Param carries running answer" },
                    { label: "Level 2", nodes: ['sumParam(1,5)', 'sumFunc(1)'], output: "Functional waits for return values" },
                    { label: "Level 3", nodes: ['sumParam(0,6)', 'sumFunc(0)'], output: "Base case returns final / seed value" }
                ]}
                finalOutput="Both produce 6, but state handling differs."
            />
        ),
        code: {
            cpp: `// C++ snippet
// Parameterized style
void sumParam(int n, int acc, int& ans) {
    if (n == 0) { ans = acc; return; }
    sumParam(n - 1, acc + n, ans);
}

// Functional style
int sumFunc(int n) {
    if (n == 0) return 0;
    return n + sumFunc(n - 1);
}`,
            java: `// Java snippet
// Parameterized style
int sumParam(int n, int acc) {
    if (n == 0) return acc;
    return sumParam(n - 1, acc + n);
}

// Functional style
int sumFunc(int n) {
    if (n == 0) return 0;
    return n + sumFunc(n - 1);
}`
        }
    },
    "recurrence-time-complexity": {
        title: "Recurrence relation and complexity intuition",
        explanation: "Many recursive algorithms are analyzed using recurrences. Example: merge sort follows T(n) = 2T(n/2) + O(n), which solves to O(n log n).",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Complexity from recursion levels"
                levels={[
                    { label: "Level 0", nodes: ['Size n'], output: "One root call" },
                    { label: "Level 1", nodes: ['n/2', 'n/2'], output: "2 subproblems" },
                    { label: "Level 2", nodes: ['n/4', 'n/4', 'n/4', 'n/4'], output: "4 subproblems" },
                    { label: "Depth", nodes: ['~log n levels'], output: "Per-level work x number of levels" }
                ]}
                finalOutput="Example: 2T(n/2) + O(n) -> O(n log n)"
                note="Always count branching, subproblem size, and combine work."
            />
        ),
        code: {
            cpp: `// C++ snippet
// Common recurrences:
// 1) T(n) = T(n - 1) + O(1)        -> O(n)
// 2) T(n) = 2T(n - 1) + O(1)       -> O(2^n)
// 3) T(n) = 2T(n/2) + O(n)         -> O(n log n)
// 4) T(n) = T(n/2) + O(1)          -> O(log n)`,
            java: `// Java snippet
// Use recursion tree or Master theorem for divide-and-conquer recurrences.
// Always identify:
// - number of subproblems
// - subproblem size
// - merge/combine work per call`
        }
    },
    "divide-choose-not-choose": {
        title: "Divide and choose/not-choose thinking",
        explanation: "A major recursion pattern is making a decision at each index: include current element or skip it. This creates a binary recursion tree used in subsets and subsequences.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Choose / Not-Choose decision tree"
                levels={[
                    { label: "Level 0", nodes: ['idx0'], output: "Pick 1 or Skip 1" },
                    { label: "Level 1", nodes: ['[1]', '[]'], output: "Each branch moves to idx1" },
                    { label: "Level 2", nodes: ['[1,2]', '[1]', '[2]', '[]'], output: "Again pick or skip for 2" },
                    { label: "Level 3", nodes: ['... 8 leaves total for n=3 ...'], output: "All subsequences appear at leaves" }
                ]}
                finalOutput="Total leaves = 2^n"
            />
        ),
        code: {
            cpp: `// C++ snippet
void dfs(int idx, vector<int>& nums, vector<int>& cur, vector<vector<int>>& ans) {
    if (idx == nums.size()) {
        ans.push_back(cur);
        return;
    }

    // Choose current
    cur.push_back(nums[idx]);
    dfs(idx + 1, nums, cur, ans);

    // Not choose current
    cur.pop_back();
    dfs(idx + 1, nums, cur, ans);
}`,
            java: `// Java snippet
void dfs(int idx, int[] nums, List<Integer> cur, List<List<Integer>> ans) {
    if (idx == nums.length) {
        ans.add(new ArrayList<>(cur));
        return;
    }

    // Choose current
    cur.add(nums[idx]);
    dfs(idx + 1, nums, cur, ans);

    // Not choose current
    cur.remove(cur.size() - 1);
    dfs(idx + 1, nums, cur, ans);
}`
        }
    },
    "binary-search-recursive": {
        title: "Binary Search with recursion",
        explanation: "Recursive binary search repeatedly halves the search interval, giving O(log n) time on sorted arrays. Base case is when low exceeds high.",
        visual: <GenericArrayVisualizer inputArray={[2, 5, 8, 12, 16, 23, 38]} outputVariable="Target 16 found at index 4" description="Each recursive call cuts search space in half" highlightIndices={[4]} />,
        code: {
            cpp: `// C++ snippet
int binarySearch(vector<int>& a, int l, int r, int target) {
    if (l > r) return -1;
    int mid = l + (r - l) / 2;
    if (a[mid] == target) return mid;
    if (a[mid] < target) return binarySearch(a, mid + 1, r, target);
    return binarySearch(a, l, mid - 1, target);
}`,
            java: `// Java snippet
int binarySearch(int[] a, int l, int r, int target) {
    if (l > r) return -1;
    int mid = l + (r - l) / 2;
    if (a[mid] == target) return mid;
    if (a[mid] < target) return binarySearch(a, mid + 1, r, target);
    return binarySearch(a, l, mid - 1, target);
}`
        }
    },
    "check-palindrome-recursive": {
        title: "Check palindrome recursively",
        explanation: "Compare outer characters and recurse on the inner substring. Stop when pointers meet or cross.",
        visual: <GenericArrayVisualizer inputArray={['r', 'a', 'c', 'e', 'c', 'a', 'r']} outputVariable="Palindrome = true" description="Match start and end, then move inward recursively" highlightIndices={[0, 6]} />,
        code: {
            cpp: `// C++ snippet
bool isPalindrome(string& s, int l, int r) {
    if (l >= r) return true;
    if (s[l] != s[r]) return false;
    return isPalindrome(s, l + 1, r - 1);
}`,
            java: `// Java snippet
boolean isPalindrome(String s, int l, int r) {
    if (l >= r) return true;
    if (s.charAt(l) != s.charAt(r)) return false;
    return isPalindrome(s, l + 1, r - 1);
}`
        }
    },
    "power-fast-exponentiation-recursive": {
        title: "Power(x, n) with fast recursion",
        explanation: "Exponentiation by squaring reduces complexity from O(n) to O(log n) by halving exponent at each step.",
        visual: <GenericArrayVisualizer inputArray={['x^13', 'x^6', 'x^3', 'x^1']} outputVariable="Halving exponent gives logarithmic recursion depth" description="Use odd/even exponent rule" />,
        code: {
            cpp: `// C++ snippet
long long power(long long x, long long n) {
    if (n == 0) return 1;
    long long half = power(x, n / 2);
    long long ans = half * half;
    if (n % 2) ans *= x;
    return ans;
}`,
            java: `// Java snippet
long power(long x, long n) {
    if (n == 0) return 1;
    long half = power(x, n / 2);
    long ans = half * half;
    if (n % 2 == 1) ans *= x;
    return ans;
}`
        }
    },
    "recursion-easy-practice-set": {
        title: "Practice set: easy to intermediate recursion",
        explanation: "Build speed with standard recursion drills before starting heavy backtracking. Focus on clean base conditions and dry-run confidence.",
        visual: <GenericArrayVisualizer inputArray={['Easy', 'Easy', 'Medium', 'Medium']} outputVariable="Target: 10 solved + 2 full revisions" description="Repeat each question until logic feels natural" />,
        code: {
            cpp: `// Suggested order
// 1) Print 1 to N / N to 1
// 2) Sum of first N numbers
// 3) Factorial
// 4) Fibonacci
// 5) Check palindrome
// 6) Reverse array
// 7) Binary search recursion
// 8) Fast power`,
            java: `// Tracking sheet for each problem
// - Base case
// - Recursive call
// - Time complexity
// - Space complexity (stack depth)
// - Edge cases`
        }
    },
    "subsequences-generation": {
        title: "Generate all subsequences",
        explanation: "Use include/exclude recursion for each index. For an array of size n, total subsequences are 2^n.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Subsequence generation tree for [1,2,3]"
                levels={[
                    { label: "Level 0", nodes: ['[]'], output: "Start with empty path" },
                    { label: "Level 1", nodes: ['[1]', '[]'], output: "After decision on 1" },
                    { label: "Level 2", nodes: ['[1,2]', '[1]', '[2]', '[]'], output: "After decision on 2" },
                    { label: "Level 3", nodes: ['[1,2,3]', '[1,2]', '[1,3]', '[1]', '[2,3]', '[2]', '[3]', '[]'], output: "Leaves = full answer set" }
                ]}
                finalOutput="8 subsequences"
            />
        ),
        code: {
            cpp: `// C++ snippet
void subseq(int idx, vector<int>& nums, vector<int>& cur, vector<vector<int>>& ans) {
    if (idx == nums.size()) {
        ans.push_back(cur);
        return;
    }
    cur.push_back(nums[idx]);
    subseq(idx + 1, nums, cur, ans);
    cur.pop_back();
    subseq(idx + 1, nums, cur, ans);
}`,
            java: `// Java snippet
void subseq(int idx, int[] nums, List<Integer> cur, List<List<Integer>> ans) {
    if (idx == nums.length) {
        ans.add(new ArrayList<>(cur));
        return;
    }
    cur.add(nums[idx]);
    subseq(idx + 1, nums, cur, ans);
    cur.remove(cur.size() - 1);
    subseq(idx + 1, nums, cur, ans);
}`
        }
    },
    "subset-sum-k": {
        title: "Subset sum equals K",
        explanation: "Try both choices at each index and track remaining target. This is a classic transition from plain recursion to memoization.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Subset Sum K recursion tree (target = 10)"
                levels={[
                    { label: "Level 0", nodes: ['(idx0, target=10)'], output: "Pick 2 or Skip 2" },
                    { label: "Level 1", nodes: ['(idx1,8)', '(idx1,10)'], output: "Track reduced target per branch" },
                    { label: "Level 2", nodes: ['(idx2,5)', '(idx2,8)', '(idx2,7)', '(idx2,10)'], output: "Some branches hit target 0 early" },
                    { label: "Leaves", nodes: ['target==0 -> true', 'idx end -> false'], output: "Success leaves give valid subsets" }
                ]}
                finalOutput="Valid examples: [2,8], [10]"
            />
        ),
        code: {
            cpp: `// C++ snippet
bool subsetSumK(int idx, int target, vector<int>& a) {
    if (target == 0) return true;
    if (idx == a.size() || target < 0) return false;

    return subsetSumK(idx + 1, target - a[idx], a) ||
           subsetSumK(idx + 1, target, a);
}`,
            java: `// Java snippet
boolean subsetSumK(int idx, int target, int[] a) {
    if (target == 0) return true;
    if (idx == a.length || target < 0) return false;

    return subsetSumK(idx + 1, target - a[idx], a) ||
           subsetSumK(idx + 1, target, a);
}`
        }
    },
    "combination-sum": {
        title: "Combination Sum",
        explanation: "Backtracking explores combinations where an element can be reused multiple times. Important for understanding recursion with same-index reuse.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Combination Sum tree (reuse allowed)"
                levels={[
                    { label: "Level 0", nodes: ['(idx0,target=7)'], output: "Pick 2 or Skip to idx1" },
                    { label: "Level 1", nodes: ['(idx0,5)', '(idx1,7)'], output: "Pick keeps same idx for reuse" },
                    { label: "Level 2", nodes: ['(idx0,3)', '(idx1,5)', '(idx1,4)', '(idx2,7)'], output: "Continue until target=0 or negative" },
                    { label: "Leaves", nodes: ['[2,2,3]', '[7]'], output: "Accepted when target becomes exactly 0" }
                ]}
                finalOutput="Combinations: [2,2,3], [7]"
            />
        ),
        code: {
            cpp: `// C++ snippet
void dfs(int idx, int target, vector<int>& a, vector<int>& cur, vector<vector<int>>& ans) {
    if (target == 0) { ans.push_back(cur); return; }
    if (idx == a.size() || target < 0) return;

    // Pick current (same idx allowed)
    cur.push_back(a[idx]);
    dfs(idx, target - a[idx], a, cur, ans);
    cur.pop_back();

    // Skip current
    dfs(idx + 1, target, a, cur, ans);
}`,
            java: `// Java snippet
void dfs(int idx, int target, int[] a, List<Integer> cur, List<List<Integer>> ans) {
    if (target == 0) { ans.add(new ArrayList<>(cur)); return; }
    if (idx == a.length || target < 0) return;

    // Pick current (same idx allowed)
    cur.add(a[idx]);
    dfs(idx, target - a[idx], a, cur, ans);
    cur.remove(cur.size() - 1);

    // Skip current
    dfs(idx + 1, target, a, cur, ans);
}`
        }
    },
    "permutations-recursion": {
        title: "Generate permutations",
        explanation: "Use swapping or visited-array backtracking to generate all orderings. This introduces recursion with state restoration (backtrack).",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Permutation recursion tree (swap model)"
                levels={[
                    { label: "Level 0", nodes: ['_ _ _'], output: "Choose first position from 1,2,3" },
                    { label: "Level 1", nodes: ['1 _ _', '2 _ _', '3 _ _'], output: "3 branches" },
                    { label: "Level 2", nodes: ['1 2 _', '1 3 _', '2 1 _', '2 3 _', '3 1 _', '3 2 _'], output: "Fix second position" },
                    { label: "Level 3", nodes: ['1 2 3', '1 3 2', '2 1 3', '2 3 1', '3 1 2', '3 2 1'], output: "Leaf nodes are complete permutations" }
                ]}
                finalOutput="Total permutations = 3! = 6"
            />
        ),
        code: {
            cpp: `// C++ snippet (swap method)
void permute(int idx, vector<int>& a, vector<vector<int>>& ans) {
    if (idx == a.size()) { ans.push_back(a); return; }
    for (int i = idx; i < a.size(); i++) {
        swap(a[idx], a[i]);
        permute(idx + 1, a, ans);
        swap(a[idx], a[i]); // backtrack
    }
}`,
            java: `// Java snippet (visited method)
void permute(int[] a, boolean[] used, List<Integer> cur, List<List<Integer>> ans) {
    if (cur.size() == a.length) {
        ans.add(new ArrayList<>(cur));
        return;
    }
    for (int i = 0; i < a.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        cur.add(a[i]);
        permute(a, used, cur, ans);
        cur.remove(cur.size() - 1);
        used[i] = false;
    }
}`
        }
    },
    "n-queens-backtracking": {
        title: "N-Queens",
        explanation: "Place queens row by row while ensuring no two queens attack each other. This is a core backtracking interview problem.",
        visual: <GenericArrayVisualizer inputArray={['Q', '.', '.', '.']} outputVariable="Place one queen per row, validate column + diagonals" description="Try position, recurse, and undo on failure" />,
        code: {
            cpp: `// C++ snippet (core idea)
bool isSafe(int row, int col, vector<string>& board, int n);
void solve(int row, vector<string>& board, vector<vector<string>>& ans, int n) {
    if (row == n) { ans.push_back(board); return; }
    for (int col = 0; col < n; col++) {
        if (!isSafe(row, col, board, n)) continue;
        board[row][col] = 'Q';
        solve(row + 1, board, ans, n);
        board[row][col] = '.'; // backtrack
    }
}`,
            java: `// Java snippet (core idea)
void solve(int row, char[][] board, List<List<String>> ans, int n) {
    if (row == n) {
        List<String> config = new ArrayList<>();
        for (char[] r : board) config.add(new String(r));
        ans.add(config);
        return;
    }
    for (int col = 0; col < n; col++) {
        if (!isSafe(row, col, board, n)) continue;
        board[row][col] = 'Q';
        solve(row + 1, board, ans, n);
        board[row][col] = '.'; // backtrack
    }
}`
        }
    },
    "rat-in-maze": {
        title: "Rat in a Maze",
        explanation: "From source to destination, recursively try valid directions while marking visited cells. Backtrack when stuck.",
        visual: <GenericArrayVisualizer inputArray={['S', '1', '0', '1', '1', '1', 'D']} outputVariable="Find valid path(s) from S to D" description="Move only to safe and unvisited cells" />,
        code: {
            cpp: `// C++ snippet (4-direction DFS)
void dfs(int r, int c, vector<vector<int>>& maze, vector<vector<int>>& vis) {
    int n = maze.size();
    if (r < 0 || c < 0 || r >= n || c >= n) return;
    if (maze[r][c] == 0 || vis[r][c]) return;
    if (r == n - 1 && c == n - 1) {
        // Found destination
        return;
    }
    vis[r][c] = 1;
    dfs(r + 1, c, maze, vis);
    dfs(r, c + 1, maze, vis);
    dfs(r - 1, c, maze, vis);
    dfs(r, c - 1, maze, vis);
    vis[r][c] = 0; // backtrack
}`,
            java: `// Java snippet (same idea)
void dfs(int r, int c, int[][] maze, boolean[][] vis) {
    int n = maze.length;
    if (r < 0 || c < 0 || r >= n || c >= n) return;
    if (maze[r][c] == 0 || vis[r][c]) return;
    if (r == n - 1 && c == n - 1) {
        // Found destination
        return;
    }
    vis[r][c] = true;
    dfs(r + 1, c, maze, vis);
    dfs(r, c + 1, maze, vis);
    dfs(r - 1, c, maze, vis);
    dfs(r, c - 1, maze, vis);
    vis[r][c] = false; // backtrack
}`
        }
    },
    "sudoku-solver-backtracking": {
        title: "Sudoku Solver",
        explanation: "Try digits 1 to 9 in empty cells, validate row/column/box constraints, and backtrack on conflicts. Strong test of recursion discipline.",
        visual: <GenericArrayVisualizer inputArray={['.', '3', '.', '.', '7', '.', '.', '.', '.']} outputVariable="Fill each empty cell with a safe number recursively" description="Constraint checking + backtracking" />,
        code: {
            cpp: `// C++ snippet (core idea)
bool solveSudoku(vector<vector<char>>& board) {
    for (int r = 0; r < 9; r++) {
        for (int c = 0; c < 9; c++) {
            if (board[r][c] != '.') continue;
            for (char ch = '1'; ch <= '9'; ch++) {
                if (!isSafe(board, r, c, ch)) continue;
                board[r][c] = ch;
                if (solveSudoku(board)) return true;
                board[r][c] = '.'; // backtrack
            }
            return false;
        }
    }
    return true;
}`,
            java: `// Java snippet (core idea)
boolean solveSudoku(char[][] board) {
    for (int r = 0; r < 9; r++) {
        for (int c = 0; c < 9; c++) {
            if (board[r][c] != '.') continue;
            for (char ch = '1'; ch <= '9'; ch++) {
                if (!isSafe(board, r, c, ch)) continue;
                board[r][c] = ch;
                if (solveSudoku(board)) return true;
                board[r][c] = '.'; // backtrack
            }
            return false;
        }
    }
    return true;
}`
        }
    },
    "merge-sort-recursion": {
        title: "Merge Sort",
        explanation: "Merge sort recursively splits array into halves, sorts both halves, then merges them. It is a canonical divide-and-conquer recursion problem.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Merge sort recursion flow for [5,2,4,7,1,3]"
                subtitle="Calls go downward in divide phase, sorted arrays come back upward in merge phase"
                levels={[
                    { label: "Level 0", nodes: ['sort([5,2,4,7,1,3])'], output: "Split -> [5,2,4] and [7,1,3]" },
                    { label: "Level 1", nodes: ['sort([5,2,4])', 'sort([7,1,3])'], output: "Both halves split again" },
                    { label: "Level 2", nodes: ['sort([5])', 'sort([2,4])', 'sort([7])', 'sort([1,3])'], output: "Single-element arrays are already sorted" },
                    { label: "Merge back", nodes: ['[2,4]', '[1,3]', '[2,4,5]', '[1,3,7]'], output: "Now merge sorted child arrays upward" }
                ]}
                finalOutput="[1,2,3,4,5,7]"
                note="Easy memory rule: divide phase only makes calls, actual sorting appears during merge-return phase."
            />
        ),
        code: {
            cpp: `// C++ full snippet (merge sort + helpers + driver)
#include <bits/stdc++.h>
using namespace std;

void printArray(const vector<int>& arr) {
    for (int x : arr) cout << x << " ";
    cout << "\\n";
}

void merge(vector<int>& a, int l, int m, int r) {
    vector<int> left(a.begin() + l, a.begin() + m + 1);
    vector<int> right(a.begin() + m + 1, a.begin() + r + 1);

    int i = 0, j = 0, k = l;
    while (i < (int)left.size() && j < (int)right.size()) {
        if (left[i] <= right[j]) a[k++] = left[i++];
        else a[k++] = right[j++];
    }
    while (i < (int)left.size()) a[k++] = left[i++];
    while (j < (int)right.size()) a[k++] = right[j++];
}

// Main logic function
void mergeSort(vector<int>& a, int l, int r) {
    if (l >= r) return; // base case
    int m = l + (r - l) / 2;
    mergeSort(a, l, m);
    mergeSort(a, m + 1, r);
    merge(a, l, m, r);
}

// Driver code
int main() {
    vector<int> a = {5, 2, 4, 7, 1, 3};
    cout << "Before: ";
    printArray(a);

    mergeSort(a, 0, (int)a.size() - 1);

    cout << "After:  ";
    printArray(a);
    return 0;
}`,
            java: `// Java full snippet (merge sort + helpers + driver)
import java.util.Arrays;

public class MergeSortDemo {
    static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    static void merge(int[] a, int l, int m, int r) {
        int[] left = Arrays.copyOfRange(a, l, m + 1);
        int[] right = Arrays.copyOfRange(a, m + 1, r + 1);

        int i = 0, j = 0, k = l;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) a[k++] = left[i++];
            else a[k++] = right[j++];
        }
        while (i < left.length) a[k++] = left[i++];
        while (j < right.length) a[k++] = right[j++];
    }

    // Main logic function
    static void mergeSort(int[] a, int l, int r) {
        if (l >= r) return; // base case
        int m = l + (r - l) / 2;
        mergeSort(a, l, m);
        mergeSort(a, m + 1, r);
        merge(a, l, m, r);
    }

    // Driver code
    public static void main(String[] args) {
        int[] a = {5, 2, 4, 7, 1, 3};
        System.out.print("Before: ");
        printArray(a);

        mergeSort(a, 0, a.length - 1);

        System.out.print("After:  ");
        printArray(a);
    }
}`
        }
    },
    "quick-sort-recursion": {
        title: "Quick Sort",
        explanation: "Quick sort picks a pivot, partitions array around pivot, then recursively sorts left and right partitions.",
        visual: (
            <RecursionLevelTreeVisualizer
                title="Quick sort recursion flow for [9,3,7,1,8,2]"
                subtitle="Each call fixes one pivot, then recurses on left and right partitions"
                levels={[
                    { label: "Level 0", nodes: ['quickSort(0,5)'], output: "Pivot 2 placed -> [1,2,7,9,8,3]" },
                    { label: "Level 1", nodes: ['quickSort(0,0)', 'quickSort(2,5)'], output: "Left base done, right still unsorted" },
                    { label: "Level 2", nodes: ['quickSort(2,2)', 'quickSort(4,5)'], output: "Pivot 7 fixed, recurse remaining range" },
                    { label: "Level 3", nodes: ['quickSort(4,4)', 'quickSort(6,5)'], output: "All ranges reach base case (l >= r)" }
                ]}
                finalOutput="[1,2,3,7,8,9]"
                note="Partition decides pivot's final index immediately. Only subarrays around pivot are processed recursively."
            />
        ),
        code: {
            cpp: `// C++ full snippet (quick sort + helpers + driver)
#include <bits/stdc++.h>
using namespace std;

void printArray(const vector<int>& arr) {
    for (int x : arr) cout << x << " ";
    cout << "\\n";
}

int partition(vector<int>& a, int l, int r) {
    int pivot = a[r];    // Lomuto partition
    int i = l - 1;

    for (int j = l; j < r; j++) {
        if (a[j] <= pivot) {
            i++;
            swap(a[i], a[j]);
        }
    }
    swap(a[i + 1], a[r]);
    return i + 1;
}

// Main logic function
void quickSort(vector<int>& a, int l, int r) {
    if (l >= r) return; // base case
    int p = partition(a, l, r);
    quickSort(a, l, p - 1);
    quickSort(a, p + 1, r);
}

// Driver code
int main() {
    vector<int> a = {9, 3, 7, 1, 8, 2};
    cout << "Before: ";
    printArray(a);

    quickSort(a, 0, (int)a.size() - 1);

    cout << "After:  ";
    printArray(a);
    return 0;
}`,
            java: `// Java full snippet (quick sort + helpers + driver)
import java.util.Arrays;

public class QuickSortDemo {
    static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    static void swap(int[] a, int i, int j) {
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    static int partition(int[] a, int l, int r) {
        int pivot = a[r]; // Lomuto partition
        int i = l - 1;
        for (int j = l; j < r; j++) {
            if (a[j] <= pivot) {
                i++;
                swap(a, i, j);
            }
        }
        swap(a, i + 1, r);
        return i + 1;
    }

    // Main logic function
    static void quickSort(int[] a, int l, int r) {
        if (l >= r) return; // base case
        int p = partition(a, l, r);
        quickSort(a, l, p - 1);
        quickSort(a, p + 1, r);
    }

    // Driver code
    public static void main(String[] args) {
        int[] a = {9, 3, 7, 1, 8, 2};
        System.out.print("Before: ");
        printArray(a);

        quickSort(a, 0, a.length - 1);

        System.out.print("After:  ");
        printArray(a);
    }
}`
        }
    },
    "tower-of-hanoi": {
        title: "Tower of Hanoi",
        explanation: "Move n disks from source to destination using helper rod. This problem is ideal for mastering recursive decomposition into smaller identical tasks.",
        visual: <GenericArrayVisualizer inputArray={['A', 'B', 'C']} outputVariable="Moves = 2^n - 1" description="Move n-1 to helper, move largest, move n-1 to destination" />,
        code: {
            cpp: `// C++ snippet
void hanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    hanoi(n - 1, aux, to, from);
}`,
            java: `// Java snippet
void hanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    System.out.println("Move disk " + n + " from " + from + " to " + to);
    hanoi(n - 1, aux, to, from);
}`
        }
    },
    "tree-traversals-recursion": {
        title: "Recursive DFS traversals (Pre/In/Post)",
        explanation: "Preorder, inorder, and postorder are natural recursive traversals over trees. They are heavily used in tree interview questions.",
        visual: <GenericArrayVisualizer inputArray={['Root', 'Left', 'Right']} outputVariable="Pre: Root Left Right | In: Left Root Right | Post: Left Right Root" description="Visit order changes by traversal type" />,
        code: {
            cpp: `// C++ snippet
struct Node {
    int val;
    Node* left;
    Node* right;
};

void preorder(Node* root) {
    if (!root) return;
    cout << root->val << " ";
    preorder(root->left);
    preorder(root->right);
}`,
            java: `// Java snippet
class Node {
    int val;
    Node left, right;
}

void preorder(Node root) {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}`
        }
    },
    "tree-height-diameter-recursion": {
        title: "Tree height and diameter",
        explanation: "Height is max depth from node to leaf. Diameter can be computed recursively by combining left and right subtree heights.",
        visual: <GenericArrayVisualizer inputArray={['LeftHeight', 'Root', 'RightHeight']} outputVariable="Diameter candidate = leftHeight + rightHeight" description="Postorder recursion computes subtree info" />,
        code: {
            cpp: `// C++ snippet
int diameter = 0;
int height(Node* root) {
    if (!root) return 0;
    int lh = height(root->left);
    int rh = height(root->right);
    diameter = max(diameter, lh + rh);
    return 1 + max(lh, rh);
}`,
            java: `// Java snippet
int diameter = 0;
int height(Node root) {
    if (root == null) return 0;
    int lh = height(root.left);
    int rh = height(root.right);
    diameter = Math.max(diameter, lh + rh);
    return 1 + Math.max(lh, rh);
}`
        }
    },
    "lca-recursion": {
        title: "Lowest Common Ancestor (Binary Tree)",
        explanation: "Recursively search both subtrees. If targets appear in different branches, current node is the LCA.",
        visual: <GenericArrayVisualizer inputArray={['p', 'LCA', 'q']} outputVariable="If left and right both return non-null, current node is answer" description="Bottom-up recursion combines subtree findings" />,
        code: {
            cpp: `// C++ snippet
Node* lca(Node* root, Node* p, Node* q) {
    if (!root || root == p || root == q) return root;
    Node* left = lca(root->left, p, q);
    Node* right = lca(root->right, p, q);
    if (left && right) return root;
    return left ? left : right;
}`,
            java: `// Java snippet
Node lca(Node root, Node p, Node q) {
    if (root == null || root == p || root == q) return root;
    Node left = lca(root.left, p, q);
    Node right = lca(root.right, p, q);
    if (left != null && right != null) return root;
    return left != null ? left : right;
}`
        }
    },
    "memoization-basics": {
        title: "Memoization basics",
        explanation: "Memoization stores answers of repeated recursive states, reducing exponential recursion to polynomial or linear time depending on state count.",
        visual: <GenericArrayVisualizer inputArray={['state', 'answer cache']} outputVariable="Compute once, reuse many times" description="Cache key identifies unique subproblem" />,
        code: {
            cpp: `// C++ snippet (memoized Fibonacci)
int fibMemo(int n, vector<int>& dp) {
    if (n <= 1) return n;
    if (dp[n] != -1) return dp[n];
    return dp[n] = fibMemo(n - 1, dp) + fibMemo(n - 2, dp);
}`,
            java: `// Java snippet (memoized Fibonacci)
int fibMemo(int n, int[] dp) {
    if (n <= 1) return n;
    if (dp[n] != -1) return dp[n];
    return dp[n] = fibMemo(n - 1, dp) + fibMemo(n - 2, dp);
}`
        }
    },
    "climb-stairs-recursion-dp": {
        title: "Climbing Stairs: recursion -> memoization",
        explanation: "Climbing stairs is identical to Fibonacci recurrence. Pure recursion is exponential; memoization makes it O(n).",
        visual: <GenericArrayVisualizer inputArray={['n', 'n-1', 'n-2']} outputVariable="ways(n) = ways(n-1) + ways(n-2)" description="Two choices at each step: 1-step or 2-step" />,
        code: {
            cpp: `// C++ snippet
int ways(int n, vector<int>& dp) {
    if (n <= 1) return 1;
    if (dp[n] != -1) return dp[n];
    return dp[n] = ways(n - 1, dp) + ways(n - 2, dp);
}`,
            java: `// Java snippet
int ways(int n, int[] dp) {
    if (n <= 1) return 1;
    if (dp[n] != -1) return dp[n];
    return dp[n] = ways(n - 1, dp) + ways(n - 2, dp);
}`
        }
    },
    "knapsack-recursion-memo": {
        title: "0/1 Knapsack: recursive + memoized",
        explanation: "At each item, choose pick or skip under capacity constraint. Memoization on (index, remainingCapacity) avoids recomputation.",
        visual: <GenericArrayVisualizer inputArray={['index', 'capacity']} outputVariable="State dp[i][cap] stores best value from i onward" description="Pick/not-pick recursion with caching" />,
        code: {
            cpp: `// C++ snippet
int knap(int i, int cap, vector<int>& wt, vector<int>& val, vector<vector<int>>& dp) {
    if (i == wt.size() || cap == 0) return 0;
    if (dp[i][cap] != -1) return dp[i][cap];

    int notPick = knap(i + 1, cap, wt, val, dp);
    int pick = 0;
    if (wt[i] <= cap) pick = val[i] + knap(i + 1, cap - wt[i], wt, val, dp);
    return dp[i][cap] = max(pick, notPick);
}`,
            java: `// Java snippet
int knap(int i, int cap, int[] wt, int[] val, int[][] dp) {
    if (i == wt.length || cap == 0) return 0;
    if (dp[i][cap] != -1) return dp[i][cap];

    int notPick = knap(i + 1, cap, wt, val, dp);
    int pick = 0;
    if (wt[i] <= cap) pick = val[i] + knap(i + 1, cap - wt[i], wt, val, dp);
    return dp[i][cap] = Math.max(pick, notPick);
}`
        }
    },
    "recursion-medium-hard-practice-set": {
        title: "Practice set: medium to hard recursion/backtracking",
        explanation: "This set is interview-focused. Solve these with dry run, pruning logic, and complexity analysis.",
        visual: <GenericArrayVisualizer inputArray={['Medium', 'Medium', 'Hard', 'Hard']} outputVariable="Goal: 12 quality solves + written complexity notes" description="Practice by pattern clusters, not random order" />,
        code: {
            cpp: `// Recommended medium/hard list
// 1) Subsets II
// 2) Combination Sum I, II
// 3) Permutations I, II
// 4) N-Queens
// 5) Rat in a Maze
// 6) Sudoku Solver
// 7) Palindrome Partitioning
// 8) Word Search
// 9) Generate Parentheses
// 10) Letter Combinations of a Phone Number`,
            java: `// For each problem, record:
// - Recursion state definition
// - Choice branching
// - Base case
// - Backtracking undo step
// - Time/space complexity`
        }
    },
    "recursion-interview-checklist": {
        title: "Final recursion interview checklist",
        explanation: "Before interviews, verify you can define recursion states clearly, write correct base cases quickly, and justify complexity with confidence.",
        visual: <GenericArrayVisualizer inputArray={['State', 'Base case', 'Transition', 'Backtrack', 'Complexity']} outputVariable="Checklist complete -> recursion ready for interviews" description="Use this as a final revision sheet" />,
        code: {
            cpp: `// Final checklist
// 1) Can you define function meaning in one line?
// 2) Is base case complete and reachable?
// 3) Does every call reduce problem size?
// 4) Did you undo state after recursive call (if needed)?
// 5) Can you derive time and stack space complexity?
// 6) Can you optimize with memoization when overlap exists?`,
            java: `// Weekly recursion revision
// Day 1: Basics + dry runs
// Day 2: Include/exclude + subsets
// Day 3: Permutations + combinations
// Day 4: Grid backtracking + N-Queens
// Day 5: Divide and conquer
// Day 6: Memoization problems
// Day 7: Mixed interview mock questions`
        }
    }
};
