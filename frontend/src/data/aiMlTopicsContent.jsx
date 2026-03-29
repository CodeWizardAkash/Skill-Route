import React from 'react';

// AI vs ML Venn Diagram
const AiVsMlVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">AI vs Machine Learning</div>
    <div className="flex items-center justify-center gap-8 my-4">
      {/* AI Circle */}
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-500 bg-blue-100/30 dark:bg-blue-900/20 flex items-center justify-center transition-colors">
          <div className="text-center z-10">
            <div className="font-bold text-blue-700 dark:text-blue-300 text-sm transition-colors">AI</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 transition-colors">Broad Field</div>
          </div>
        </div>
      </div>
      {/* ML Circle */}
      <div className="relative w-40 h-40 -ml-20">
        <div className="absolute inset-0 rounded-full border-2 border-emerald-400 dark:border-emerald-500 bg-emerald-100/30 dark:bg-emerald-900/20 flex items-center justify-center transition-colors">
          <div className="text-center z-10">
            <div className="font-bold text-emerald-700 dark:text-emerald-300 text-sm transition-colors">ML</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 transition-colors">Learning Subset</div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-center transition-colors">
      Machine Learning is a subset of Artificial Intelligence that focuses on learning from data.
    </div>
  </div>
);

// ML Types Comparison
const MlTypesVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-4 transition-colors">Three Types of Machine Learning</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
      {/* Supervised */}
      <div className="bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-700 rounded-lg p-4 shadow-sm dark:shadow-none transition-colors">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 mb-3 mx-auto">
          <span className="text-purple-700 dark:text-purple-300 font-bold transition-colors">📊</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-2 transition-colors">Supervised</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center transition-colors">Learns from labeled data. Used for prediction and classification.</p>
      </div>

      {/* Unsupervised */}
      <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg p-4 shadow-sm dark:shadow-none transition-colors">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-3 mx-auto">
          <span className="text-blue-700 dark:text-blue-300 font-bold transition-colors">🔍</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-2 transition-colors">Unsupervised</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center transition-colors">Finds patterns in unlabeled data. Used for clustering and discovery.</p>
      </div>

      {/* Reinforcement */}
      <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 rounded-lg p-4 shadow-sm dark:shadow-none transition-colors">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 mb-3 mx-auto">
          <span className="text-orange-700 dark:text-orange-300 font-bold transition-colors">🎮</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-2 transition-colors">Reinforcement</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center transition-colors">Learns through rewards and penalties. Used for optimization and control.</p>
      </div>
    </div>
  </div>
);

// Real-world Examples
const RealWorldExamplesVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-4 transition-colors">Popular AI/ML Applications</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20 border border-pink-200 dark:border-pink-700 rounded-lg p-4 transition-colors">
        <div className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">🎬 Recommendation Systems</div>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Netflix, YouTube, Spotify - Predict content you'll enjoy based on your history.</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 transition-colors">
        <div className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">🗣️ Virtual Assistants</div>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Siri, Alexa, Google - Understand voice commands and respond naturally.</p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 transition-colors">
        <div className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">🏥 Medical Diagnosis</div>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Analyze medical images to detect diseases like cancer with high accuracy.</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4 transition-colors">
        <div className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">🚗 Autonomous Vehicles</div>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Self-driving cars perceive environment and make real-time driving decisions.</p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 transition-colors">
        <div className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">🔐 Fraud Detection</div>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Banks detect suspicious transactions and prevent fraudulent activities in real-time.</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 transition-colors">
        <div className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">🔎 Search Engines</div>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Google, Bing - Understand queries and rank billions of pages intelligently.</p>
      </div>
    </div>
  </div>
);

const PythonRoadmapVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-3 transition-colors">Python for ML Skill Stack</div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 w-full max-w-5xl">
      {[
        { label: 'Syntax', style: 'from-sky-50 to-cyan-50 border-sky-200 dark:from-sky-900/20 dark:to-cyan-900/20 dark:border-sky-700' },
        { label: 'Data Structures', style: 'from-indigo-50 to-blue-50 border-indigo-200 dark:from-indigo-900/20 dark:to-blue-900/20 dark:border-indigo-700' },
        { label: 'NumPy/Pandas', style: 'from-emerald-50 to-teal-50 border-emerald-200 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-700' },
        { label: 'Visualization', style: 'from-amber-50 to-orange-50 border-amber-200 dark:from-amber-900/20 dark:to-orange-900/20 dark:border-amber-700' },
        { label: 'Modeling', style: 'from-pink-50 to-rose-50 border-pink-200 dark:from-pink-900/20 dark:to-rose-900/20 dark:border-pink-700' }
      ].map(item => (
        <div key={item.label} className={`rounded-lg p-3 border bg-gradient-to-br ${item.style} transition-colors`}>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center transition-colors">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
)

const PythonLoopsVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold transition-colors">Loop Flow: Iterate and Update</div>
    <div className="w-full max-w-3xl rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {['Start i=0', 'Check i < n', 'Run body', 'i += 1'].map(step => (
          <div key={step} className="rounded-md border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-2 text-center text-xs md:text-sm text-cyan-800 dark:text-cyan-200 transition-colors">
            {step}
          </div>
        ))}
      </div>
    </div>
  </div>
)

const NumpyIndexingVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold transition-colors">NumPy 2D Indexing (row, col)</div>
    <div className="grid grid-cols-3 gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
      {[1, 2, 3, 4, 5, 6].map((value, index) => (
        <div
          key={value}
          className={`w-14 h-12 rounded-md flex items-center justify-center font-bold border transition-colors ${index === 5
              ? 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-400 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
              : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200'
            }`}
        >
          {value}
        </div>
      ))}
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Example: <span className="font-mono">a[1, 2] = 6</span></p>
  </div>
)

const TrainSplitVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold transition-colors">Data Split Strategy</div>
    <div className="w-full max-w-3xl rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 transition-colors">
      <div className="flex h-8 w-full overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
        <div className="w-7/10 bg-cyan-500 text-white text-xs flex items-center justify-center">Train (70%)</div>
        <div className="w-2/10 bg-amber-500 text-white text-xs flex items-center justify-center">Validation (20%)</div>
        <div className="w-1/10 bg-emerald-500 text-white text-xs flex items-center justify-center">Test (10%)</div>
      </div>
    </div>
  </div>
)

const SupervisedVsUnsupervisedVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold transition-colors">Learning Approaches</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <div className="border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 transition-colors text-center">
        <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2 transition-colors">Supervised Learning</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Data has labels (answers). Model learns to map input to output.</p>
        <div className="mt-3 flex gap-2 text-xl justify-center items-center">
          <span>🍎➡️ Apple</span>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <span>🍊➡️ Orange</span>
        </div>
      </div>
      <div className="border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 transition-colors text-center">
        <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 transition-colors">Unsupervised Learning</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors">Data has no labels. Model finds hidden structures or groups on its own.</p>
        <div className="mt-3 flex gap-2 text-xl justify-center items-center">
          <span>🍎🍏🍎🔴 ➡️ 🍎🍏 | 🍎🔴</span>
        </div>
      </div>
    </div>
  </div>
)

const RegressionVsClassificationVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold transition-colors">Predictive Modeling Types</div>
    <div className="w-full max-w-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4 flex flex-col md:flex-row gap-6 transition-colors">
      <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 pb-4 md:pb-0 md:pr-4">
        <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-1 transition-colors">Regression</div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 transition-colors">Predicts continuous quantity</p>
        <div className="h-20 w-full rounded bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 flex items-end p-2 gap-1 justify-center transition-colors">
           <div className="w-4 bg-indigo-300 dark:bg-indigo-600 h-[20%] rounded-t transition-colors"></div>
           <div className="w-4 bg-indigo-400 dark:bg-indigo-500 h-[40%] rounded-t transition-colors"></div>
           <div className="w-4 bg-indigo-500 dark:bg-indigo-400 h-[50%] rounded-t transition-colors"></div>
           <div className="w-4 bg-indigo-600 dark:bg-indigo-300 h-[80%] rounded-t transition-colors"></div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 transition-colors">e.g. Price: $250k, $300k...</p>
      </div>
      <div className="flex-1 text-center pt-2 md:pt-0">
        <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1 transition-colors">Classification</div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 transition-colors">Predicts category or class</p>
        <div className="h-20 w-full rounded bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 flex flex-col items-center justify-center gap-2 transition-colors">
           <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-emerald-400 dark:bg-emerald-600 transition-colors"></div><span className="text-xs text-gray-700 dark:text-gray-300 transition-colors">Class A</span></div>
           <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-teal-400 dark:bg-teal-600 transition-colors"></div><span className="text-xs text-gray-700 dark:text-gray-300 transition-colors">Class B</span></div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 transition-colors">e.g. Spam vs Not Spam</p>
      </div>
    </div>
  </div>
)

const OverfittingVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6 w-full">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold transition-colors">Model Fit: The Goldilocks Problem</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-4xl text-center">
      <div className="p-4 border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/10 rounded-lg transition-colors shadow-sm">
        <div className="font-bold text-amber-700 dark:text-amber-400 mb-2 transition-colors text-lg">Underfitting</div>
        <div className="text-3xl my-3">➖</div>
        <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Too simple. Fails to capture patterns. High Error.</p>
      </div>
      <div className="p-4 border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/10 rounded-lg transition-colors shadow-sm">
        <div className="font-bold text-green-700 dark:text-green-400 mb-2 transition-colors text-lg">Good Fit (Robust)</div>
        <div className="text-3xl my-3">🌊</div>
        <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Captures genuine patterns. Generalizes well.</p>
      </div>
      <div className="p-4 border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/10 rounded-lg transition-colors shadow-sm">
        <div className="font-bold text-red-700 dark:text-red-400 mb-2 transition-colors text-lg">Overfitting</div>
        <div className="text-3xl my-3">〰️</div>
        <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Too complex. Memorizes noise. Fails on new data.</p>
      </div>
    </div>
  </div>
)

const simpleCode = {
  python: `print("Practice daily")`
}

const pythonSnippets = {
  'py-install-and-repl': `# file: app.py\nprint("Hello Python")\n# run: python app.py`,
  'py-variables-and-types': `age = 21              # int\nheight = 5.7          # float\nname = "Asha"         # str\nis_student = True     # bool\n\n# Type casting = converting one type to another\nage_as_float = float(age)\nheight_as_int = int(height)\nprint(age_as_float, height_as_int)`,
  'py-input-output': `name = input("Enter your name: ")\nscore = 92.5\n\nprint("Student:", name)\nprint("Score =", score)\nprint(f"{name} scored {score:.1f} marks")`,
  'py-conditionals': `age = 18\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")`,
  'py-loops': `for i in range(3):\n    print(i)\n\ncount = 0\nwhile count < 2:\n    count += 1`,
  'py-range-break-continue': `for n in range(1, 6):\n    if n == 3:\n        continue   # skip 3\n    if n == 5:\n        break      # stop at 5\n    print(n)`,
  'py-lists-tuples': `numbers = [1, 2, 3]\nposition = (10, 20)\n\nnumbers.append(4)   # list can change\nprint(numbers)\nprint(position[0])  # tuple can be read by index`,
  'py-sets-dicts': `tags = {"ml", "ai", "ml", "python"}\nprint(tags)   # duplicate "ml" is removed\n\nstudent = {"name": "Ria", "level": "beginner"}\nprint(student["name"])\nprint(student["level"])`,
  'py-slicing-comprehensions': `nums = [1, 2, 3, 4, 5]\nprint(nums[1:4])\nsquares = [n*n for n in nums]\nprint(squares)`,
  'py-functions-scope': `def greet(name):\n    message = f"Hello, {name}"   # local variable\n    return message\n\nresult = greet("Ria")\nprint(result)`,
  'py-modules-packages': `# calc.py\ndef add(a, b):\n    return a + b\n\n# main.py\nfrom calc import add\nprint(add(2, 3))`,
  'py-exceptions': `try:\n    num = int("12")\n    print(num)\nexcept ValueError:\n    print("Invalid number")\nfinally:\n    print("Program finished")`,
  'py-numpy-arrays': `import numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(a.shape)\nprint(a[1, 1])`,
  'py-numpy-ops': `import numpy as np

a = np.array([1, 2, 3])

# Vectorized: multiply every element by 2 at once — no loop needed
print(a * 2)          # [2 4 6]

# Element-wise addition of two same-shape arrays
print(a + a)          # [2 4 6]

# Broadcasting: scalar spreads across every element
print(a + 10)         # [11 12 13]

# Broadcasting: 1D array spreads across every row of a 2D array
b = np.array([[1, 2, 3],
              [4, 5, 6]])
print(b + a)
# [[ 2  4  6]
#  [ 5  7  9]]`,
  'py-numpy-aggregate': `import numpy as np
a = np.array([2, 4, 6, 8])

print(a.sum())       # 20
print(a.mean())      # 5.0
print(a.min())       # 2
print(a.max())       # 8
print(a.std())       # 2.23...

# reshape: rearrange elements into a new shape without copying data
print(a.reshape(4, 1))
# [[2]
#  [4]
#  [6]
#  [8]]`,
  'py-pandas-series-dataframe': `import pandas as pd

# Series: 1D labeled array
s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s["b"])           # 20

# DataFrame: 2D table with named columns
df = pd.DataFrame({
    "name":  ["Ria", "Sam"],
    "score": [88, 95]
})
print(df.shape)         # (2, 2)
print(df["score"])      # 0    88
                        # 1    95
print(df.iloc[0])       # name    Ria
                        # score    88`,
  'py-pandas-cleaning': `import pandas as pd

df = pd.DataFrame({
    "age":  [20, None, 22, None],
    "city": ["NYC", "LA", "NYC", "LA"]
})

# Count missing values per column
print(df.isnull().sum())    # age     2
                            # city    0

# Fill missing ages with the column mean
df["age"] = df["age"].fillna(df["age"].mean())
print(df["age"])            # 0    20.0
                            # 1    21.0
                            # 2    22.0
                            # 3    21.0

# Keep only rows where city is NYC
nyc = df[df["city"] == "NYC"]
print(nyc.shape)            # (2, 2)`,
  'py-pandas-io': `import pandas as pd

df = pd.read_csv("data.csv")

print(df.shape)       # e.g. (150, 5) — rows and columns
print(df.dtypes)      # data type of each column
print(df.head(3))     # first 3 rows
print(df.describe())  # count, mean, std, min, max per numeric column

# Save cleaned data (index=False avoids writing a row number column)
df.to_csv("clean.csv", index=False)
# Output: clean.csv written to disk with the processed data`,
  'py-matplotlib-basics': `import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [2, 5, 3, 8]

plt.figure(figsize=(6, 4))      # create a canvas 6 wide by 4 tall
plt.plot(x, y)                  # draw a line connecting the points
plt.title("Simple Line Chart")  # add a title above the chart
plt.xlabel("X Axis")            # label the horizontal axis
plt.ylabel("Y Axis")            # label the vertical axis
plt.tight_layout()              # prevent labels from being clipped
plt.show()
# Output: a line chart window appears with the four points connected`,
  'py-plot-types': `import matplotlib.pyplot as plt

# Line chart: best for trends over time
plt.plot([1, 2, 3], [5, 7, 6])
# Output: line connecting three points

# Scatter plot: best for relationships between two variables
plt.scatter([1, 2, 3], [3, 1, 4])
# Output: three separate dots at given coordinates

# Histogram: best for showing the distribution of one variable
plt.hist([1, 1, 2, 3, 3, 3, 4], bins=4)
# Output: bar chart of frequency per value range

# Subplots: multiple charts side by side
fig, axes = plt.subplots(1, 2, figsize=(8, 3))
axes[0].plot([1, 2, 3], [1, 4, 9])     # left: line chart
axes[1].scatter([1, 2, 3], [1, 4, 9])  # right: scatter chart
plt.tight_layout()
plt.show()
# Output: two charts displayed side by side in one figure`,
  'py-plot-storytelling': `import matplotlib.pyplot as plt

months  = [1, 2, 3, 4, 5]
sales   = [120, 145, 130, 160, 175]
returns = [10, 12, 9, 14, 11]

plt.plot(months, sales,   label="Sales",   color="steelblue", linewidth=2)
plt.plot(months, returns, label="Returns", color="tomato",    linestyle="--")

plt.title("Monthly Sales vs Returns", fontsize=14)
plt.xlabel("Month")     # Output: "Month" label on x axis
plt.ylabel("Units")     # Output: "Units" label on y axis
plt.legend()            # Output: color-coded key box in corner
plt.grid(alpha=0.3)     # Output: light grid lines for readability
plt.tight_layout()
plt.show()
# Output: two labeled lines with title, axes, legend, and grid`,
  'py-train-validation-test': `from sklearn.model_selection import train_test_split

X = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]
y = [2,   4,   6,   8,  10,  12,  14,  16,  18,  20]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(len(X_train))   # 8  — 80% of data used for training
print(len(X_test))    # 2  — 20% held back for final evaluation

# random_state=42 ensures the same split every time you run the code`,
  'py-baseline-model': `from sklearn.linear_model import LinearRegression

X_train = [[1], [2], [3], [4], [5]]
y_train = [20, 40, 60, 80, 100]      # score = 20 * hours

model = LinearRegression()
model.fit(X_train, y_train)          # learn the relationship

print(model.predict([[6]]))          # [120.]  — predicted score for 6 hours
print(model.coef_)                   # [20.]   — score increases 20 per hour
print(model.intercept_)              # 0.0    — score at 0 hours`,
  'py-evaluate-model': `from sklearn.metrics import mean_absolute_error, accuracy_score

# Regression: how far off are predictions on average?
y_true = [3.0, 5.0, 2.5]
y_pred = [2.8, 4.9, 2.2]

print(mean_absolute_error(y_true, y_pred))   # 0.2 — avg error per prediction

# Classification: what fraction of predictions were correct?
true_labels = [1, 0, 1, 1, 0]
pred_labels = [1, 0, 0, 1, 0]

print(accuracy_score(true_labels, pred_labels))  # 0.8 — 80% correct`,
  'py-mini-project-eda': `import pandas as pd

df = pd.read_csv("data.csv")

# Step 1: Understand shape and column types
print(df.shape)              # e.g. (150, 5)
print(df.dtypes)             # data type of each column

# Step 2: Find missing values
print(df.isnull().sum())     # count of NaN per column

# Step 3: Summary statistics
print(df.describe())         # mean, std, min, max

# Step 4: Fill missing numeric values with column mean
df.fillna(df.mean(numeric_only=True), inplace=True)

# Step 5: Save cleaned version
df.to_csv("clean.csv", index=False)
# Output: clean.csv saved with no missing values`,
  'py-mini-project-regression': `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

df = pd.read_csv("housing.csv")
X = df[["size_sqft"]]         # feature column
y = df["price"]               # target column

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

preds = model.predict(X_test)
print(mean_absolute_error(y_test, preds))  # e.g. 12500.0 — avg error in dollars`,
  'py-mini-project-classification': `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

X, y = load_iris(return_X_y=True)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

preds = clf.predict(X_test)
print(accuracy_score(y_test, preds))     # 1.0  — 100% on this dataset
print(confusion_matrix(y_test, preds))
# [[10  0  0]
#  [ 0  9  0]
#  [ 0  0 11]]
# diagonal = correct predictions, off-diagonal = mistakes`,
  'py-kaggle-track': `# Kaggle Intro to ML — suggested practice workflow

# Step 1: Open a lesson in the Kaggle Learn portal
# Step 2: Read through the tutorial notebook
# Step 3: Edit cells and experiment with your own changes
# Step 4: Submit the exercise to earn a completion check

# Sample: exploring the course dataset in a Kaggle notebook
import pandas as pd

df = pd.read_csv("/kaggle/input/home-data-for-ml-course/train.csv")
print(df.shape)                       # (1460, 81)
print(df["SalePrice"].describe())
# count      1460.000000
# mean     180921.195890
# std       79442.502883
# min       34900.000000
# max      755000.000000`,
  'py-mlcc-track': `# Google ML Crash Course — suggested study workflow

# Step 1: Read or watch the module (e.g., "Reducing Loss")
# Step 2: Run the Colab notebook provided for that module
# Step 3: Complete the end-of-module quiz
# Step 4: Write a short note summarizing the key idea

# Core MLCC modules:
modules = [
    "Framing — what is ML?",
    "Descending into ML — linear regression",
    "Reducing Loss — gradient descent",
    "Generalization — overfitting vs underfitting",
    "Training and Test Sets — correct splitting",
    "Feature Engineering — creating better inputs",
    "Regularization — reducing overfitting",
    "Logistic Regression — binary classification",
    "Classification Metrics — precision, recall, AUC",
    "Neural Networks — layers and activations",
]
for i, m in enumerate(modules, 1):
    print(f"{i:2}. {m}")
# 1.  Framing — what is ML?
# 2.  Descending into ML — linear regression
# ...`,
  'py-next-steps': `# Roadmap for after Python Basics

next_topics = {
    "Intermediate ML": [
        "feature engineering",       # build better input variables
        "cross-validation",          # more reliable evaluation
        "hyperparameter tuning",     # optimize model settings
        "sklearn Pipelines",         # chain steps cleanly
    ],
    "Advanced Models": [
        "XGBoost / LightGBM",        # top tree-based models
        "ensemble methods",          # combine multiple models
    ],
    "Deep Learning": [
        "neural networks (Keras)",   # build layers step by step
        "CNNs for images",           # convolutional networks
        "RNNs for sequences",        # time series and text
    ],
    "ML in Practice": [
        "experiment tracking",       # MLflow, Weights & Biases
        "model deployment",          # Flask, FastAPI
    ],
}
for area, topics in next_topics.items():
    print(f"\n{area}:")
    for t in topics:
        print(f"  - {t}")
# Intermediate ML:
#   - feature engineering
#   - cross-validation
# ...`
}

const point = (id, title, explanation, visual = null) => ({
  title,
  explanation,
  code: { python: pythonSnippets[id] || simpleCode.python },
  visual
})

export const aiMlTopicsContent = {
  'aiml-sup-vs-unsup': point(
    'aiml-sup-vs-unsup',
    'Supervised vs Unsupervised Learning',
    'Supervised Learning is like a student learning with a teacher. The data provided has both inputs (features) and correct answers (labels). The model learns the mapping to predict answers for new inputs.\n\nUnsupervised Learning is like a student learning by observation without an answer key. The data has inputs but no labels. The algorithm tries to find inherent patterns, groupings, or structures on its own.',
    <SupervisedVsUnsupervisedVisual />
  ),
  'aiml-regression': point(
    'aiml-regression',
    'Regression (Continuous Output)',
    'Regression is a supervised learning task where the goal is to predict a continuous numerical value.\n\nFor example, predicting the price of a house based on its square footage, or forecasting next week\'s temperature. Since the output can be any number within a range, we measure error by seeing how far off our predicted numbers are from the actual values.',
    <RegressionVsClassificationVisual />
  ),
  'aiml-classification': point(
    'aiml-classification',
    'Classification (Categorical Output)',
    'Classification is a supervised learning task where the goal is to predict a discrete category or class label.\n\nExamples include predicting if an email is "Spam" or "Not Spam", or deciding if a tumor is "Malignant" or "Benign". Instead of predicting a specific number, the model typically outputs the probability of the input belonging to each known category.'
  ),
  'aiml-overfitting': point(
    'aiml-overfitting',
    'Overfitting & Underfitting',
    'Overfitting happens when a model is too complex and memorizes the training data (including its noise) instead of learning the general trend. It performs perfectly on training data but poorly on test data.\n\nUnderfitting happens when a model is too simple to capture the underlying patterns in the data. It performs poorly on both training and test data.\n\nThe goal of machine learning is to find a "good fit" (the sweet spot) where the model generalizes well to unseen data.',
    <OverfittingVisual />
  ),
  'aiml-evaluation': point(
    'aiml-evaluation',
    'Model Evaluation Strategies',
    'To know if a model is actually good, we must evaluate it on data it has never seen. That\'s why we split data into training and test sets.\n\nEvaluation metrics depend on the task:\n- Regression metrics: Mean Absolute Error (MAE), Root Mean Squared Error (RMSE). Lower is better.\n- Classification metrics: Accuracy (percentage correct), Precision (how many selected were relevant), Recall (how many relevant were selected), and F1-score (balance of precision and recall).\n\nWithout proper evaluation, you cannot trust a model\'s predictions in the real world.'
  ),
  'py-install-and-repl': point(
    'py-install-and-repl',
    'Install Python and run scripts',
    'Download Python: https://www.python.org/downloads/\n\nQuick install steps:\n1. Open the link and download the latest Python 3 installer for your OS.\n2. Run the installer and check "Add Python to PATH".\n3. Click "Install Now" and finish setup.\n4. Open terminal and run `python --version` to verify.\n5. Create a small file and run it with `python app.py`.',
    <PythonRoadmapVisual />
  ),
  'py-variables-and-types': point(
    'py-variables-and-types',
    'Variables, basic data types, and casting',
    'int: whole numbers, e.g., 7.\nfloat: decimal numbers, e.g., 7.5.\nstr: text values, e.g., "hello".\nbool: True/False values for logic.\n\nType casting means converting one data type into another, like `int` to `float` using `float(7)` or `float` to `int` using `int(7.9)`.'
  ),
  'py-input-output': point(
    'py-input-output',
    'Input, print formatting, and f-strings',
    'Input lets your program take values from the user, usually with `input()`.\nPrint formatting helps display values clearly on screen.\nF-strings let you combine text and variables in a clean readable way, like `f"Score: {marks}"`.\nYou can also control formatting inside f-strings, for example `{score:.2f}` shows 2 decimal places.\n\nThese are useful for displaying results, model metrics, and user-friendly messages.'
  ),
  'py-conditionals': point('py-conditionals', 'if/elif/else logic', 'Use conditions to apply rules like filtering, threshold checks, and branch decisions.'),
  'py-loops': point('py-loops', 'for and while loops', 'Use loops for repeated tasks; later replace heavy loops with vectorized operations where possible.', <PythonLoopsVisual />),
  'py-range-break-continue': point('py-range-break-continue', 'range, break, continue, and loop patterns', 'The `range()` function is commonly used to repeat a loop a fixed number of times.\n`break` stops the loop completely when a condition is met.\n`continue` skips the current step and moves to the next loop iteration.\n\nThese tools help you control loop flow and write cleaner, more efficient logic.'),
  'py-lists-tuples': point('py-lists-tuples', 'Lists and tuples', 'Lists and tuples both store multiple values in one variable.\nA list uses square brackets `[]` and can be changed after creation, so it is mutable.\nA tuple uses round brackets `()` and usually represents fixed values, so it is immutable.\n\nUse lists when you need to add, remove, or update items.\nUse tuples when the values should stay constant, like coordinates or RGB values.'),
  'py-sets-dicts': point('py-sets-dicts', 'Sets and dictionaries', 'A set stores unique values only, so duplicate items are automatically removed.\nSets are useful when you only care about distinct items, like unique tags or skills.\n\nA dictionary stores data as key-value pairs, like `{"name": "Ria"}`.\nDictionaries are useful when you want to label and access values by name instead of position.\n\nUse sets for uniqueness.\nUse dictionaries for structured data with named fields.'),
  'py-slicing-comprehensions': point('py-slicing-comprehensions', 'Slicing and list/dict comprehensions', 'Slice sequences and use comprehensions for short, readable transformations.'),
  'py-functions-scope': point('py-functions-scope', 'Functions, arguments, return values, and scope', 'A function is a reusable block of code that performs a task.\nArguments are values passed into a function, like `name` in `greet(name)`.\nA return value is the result sent back from the function using `return`.\nScope means where a variable can be used. Variables created inside a function are usually local to that function.\n\nFunctions help you reuse logic, reduce repetition, and keep code organized.'),
  'py-modules-packages': point('py-modules-packages', 'Modules, imports, and package basics', 'A module is a single Python file that contains code, such as functions or variables.\nAn import lets you use code from another file without rewriting it.\nA package is a folder that groups related modules together to keep larger projects organized.\n\nUsing modules and packages makes code cleaner, reusable, and easier to manage as your project grows.'),
  'py-exceptions': point('py-exceptions', 'Try/except/finally and debugging mindset', '`try` is used for code that might cause an error.\n`except` runs when an error happens, so the program can handle it safely instead of crashing.\n`finally` runs at the end whether an error happened or not, so it is useful for cleanup or final messages.\n\nA good debugging mindset means reading error messages carefully, checking the line that failed, and fixing the root cause step by step.'),
  'py-numpy-arrays': point(
    'py-numpy-arrays',
    'ndarray, shape, dtype, and indexing',
    'Learn `ndarray`, dimensions, and indexing because most ML features are numeric arrays.',
    <NumpyIndexingVisual />
  ),
  'py-numpy-ops': point('py-numpy-ops', 'Vectorized operations and broadcasting', 'Vectorized operations apply math to every element of an array at once, without writing a Python `for` loop.\nThis works because NumPy uses fast compiled code internally, making it much faster than looping in Python.\n\nBroadcasting is NumPy\'s ability to apply operations between arrays of different shapes by automatically stretching the smaller array to match the larger one.\n\nA scalar like `10` broadcasts to every element of a 1D array.\nA 1D array of shape (3,) broadcasts across all rows of a 2D array of shape (n, 3).\n\nThis is the foundation of all numerical computation in data science and machine learning.'),
  'py-numpy-aggregate': point('py-numpy-aggregate', 'Aggregations, reshape, and basic statistics', 'Aggregation functions reduce an array to a single summary number.\n`sum()` adds all elements; `mean()` computes the average.\n`min()` and `max()` find the smallest and largest values.\n`std()` measures how spread out values are around the mean.\n\n`reshape()` rearranges elements into a new shape without copying data.\nReshaping is often needed before passing arrays into ML model functions.\n\nThese statistics are also the basis for normalizing and scaling features before training.'),
  'py-pandas-series-dataframe': point('py-pandas-series-dataframe', 'Series and DataFrame basics', 'A Series is a 1D labeled array where each value has an index label.\nA DataFrame is a 2D table with named columns and a shared row index.\nEach column in a DataFrame is its own Series.\n\n`df.shape` returns (rows, columns).\n`df["column"]` selects a column as a Series.\n`df.iloc[n]` selects the nth row by integer position.\n\nReal-world datasets in machine learning are almost always loaded and manipulated as DataFrames.'),
  'py-pandas-cleaning': point('py-pandas-cleaning', 'Missing values, filtering, and feature columns', 'Real datasets almost always have missing values, shown as NaN.\n`isnull().sum()` shows how many values are missing in each column.\n`fillna(value)` replaces NaN with a chosen substitute, usually the column mean or median.\n\nFiltering with `df[condition]` keeps only rows where the condition is True.\nThis is useful for removing outliers or selecting a relevant subset.\n\nClean data is essential before training any model because NaN values cause most ML functions to fail.'),
  'py-pandas-io': point('py-pandas-io', 'Read/write CSV and quick exploratory analysis', '`pd.read_csv()` loads a CSV file into a DataFrame in one line.\n`df.shape` tells you how many rows and columns the dataset has.\n`df.dtypes` shows the data type of each column, useful for spotting columns that need conversion.\n`df.head(n)` shows the first n rows for a quick sanity check.\n`df.describe()` gives summary statistics: count, mean, std, min, percentiles, and max.\n\n`df.to_csv()` saves your processed DataFrame back to a CSV file.\nThe `index=False` option prevents pandas from writing the row numbers as an extra column.'),
  'py-matplotlib-basics': point('py-matplotlib-basics', 'Plot lifecycle with Matplotlib', 'Matplotlib is the core plotting library in Python\'s data science and ML ecosystem.\nEvery plot follows a lifecycle: create a figure, add a chart, add labels, then show.\n\n`plt.figure()` creates the canvas; `plt.show()` renders it.\n`plt.plot(x, y)` draws a line connecting the (x, y) points.\nTitle and axis labels are critical for making charts readable and trustworthy.\n\n`tight_layout()` automatically adjusts spacing so labels are not cut off.\nIn Jupyter notebooks, charts render inline without needing `plt.show()`.'),
  'py-plot-types': point('py-plot-types', 'Line, scatter, histogram, and subplot usage', 'Choosing the right chart type makes patterns immediately visible and avoids misinterpretation.\n\nLine charts show trends over an ordered axis, such as training loss per epoch or sales over time.\nScatter plots reveal the relationship or correlation between two numeric variables.\nHistograms show the distribution of a single variable, useful for spotting skew or outliers.\n\n`plt.subplots(rows, cols)` creates a grid of charts in one figure for side-by-side comparison.\n\nAs a rule: line for trends, scatter for relationships, histogram for distributions.'),
  'py-plot-storytelling': point('py-plot-storytelling', 'Titles, labels, legends, and chart readability', 'A chart without a title, axis labels, or legend forces the viewer to guess what it means.\n`label=` on each plot call names the series; `plt.legend()` draws the color-coded key.\n\n`color=` and `linestyle=` visually separate overlapping lines at a glance.\n`plt.grid(alpha=)` adds light reference lines so readers can estimate values accurately.\n`fontsize=` on the title makes important text stand out.\n\nGood chart storytelling means the graph is self-explanatory without needing the surrounding code.'),
  'py-train-validation-test': point('py-train-validation-test', 'Train/validation/test split basics', 'Training data is what the model learns from during fitting.\nValidation data is used during training to tune settings and catch overfitting early.\nTest data is held back entirely and only evaluated at the very end.\n\nUsing the test set during training causes data leakage — the model appears better than it really is.\n`test_size=0.2` means 20% of samples go to the test set and 80% to training.\n`random_state=` fixes the random seed so the split is reproducible every run.\n\nA proper split is one of the most important steps in any ML workflow.', <TrainSplitVisual />),
  'py-baseline-model': point('py-baseline-model', 'Build a baseline model with scikit-learn', 'A baseline model is the simplest possible model you can build for the problem.\nIt sets a performance floor — any more complex model must beat this to be worth using.\n\nLinear Regression finds the best straight line through your training data.\n`.fit(X, y)` trains the model by adjusting internal parameters to minimize prediction error.\n`.predict(X_new)` generates predictions for new unseen inputs.\n\n`coef_` is the slope (how much the target changes per unit of input).\n`intercept_` is where the line crosses the y-axis when input is zero.\n\nAlways build a baseline before trying complex models.'),
  'py-evaluate-model': point('py-evaluate-model', 'Evaluate with MAE/accuracy and iterate', 'Mean Absolute Error (MAE) measures the average gap between predicted and actual values.\nA lower MAE means predictions are closer to reality.\nMAE is expressed in the same units as your target, making it easy to interpret.\n\nAccuracy measures the fraction of correct predictions in classification tasks.\nAlways evaluate on the test set, not the training set — training accuracy is often misleadingly high.\n\nIf MAE is too high or accuracy too low, try improving features, collecting more data, or switching models.\nIterating on evaluation is the core loop of machine learning.'),
  'py-mini-project-eda': point('py-mini-project-eda', 'Mini project: EDA and data cleaning notebook', 'Exploratory Data Analysis (EDA) is the first step in any real ML project.\nThe goal is to understand shape, types, missing values, and distributions before touching a model.\n\nStep 1: Check `df.shape` and `df.dtypes` to understand what you have.\nStep 2: Use `isnull().sum()` to find where data gaps are.\nStep 3: Use `df.describe()` for a statistical overview of numeric columns.\nStep 4: Fill or drop missing values based on context.\nStep 5: Save the cleaned dataset for the modeling stage.\n\nClean data is the foundation of every reliable model.'),
  'py-mini-project-regression': point('py-mini-project-regression', 'Mini project: Price prediction (regression)', 'A regression project predicts a continuous numeric value such as a house price or temperature.\nThe goal is to measure how close predictions are to real values using MAE.\n\nPipeline: load data → select feature and target columns → split → fit → evaluate.\nAlways split before fitting so the test set remains unseen during training.\nMAE in the same unit as your target, like dollars, makes results easy to interpret.\n\nThis pipeline is the template for every real regression project.'),
  'py-mini-project-classification': point('py-mini-project-classification', 'Mini project: Binary classification pipeline', 'Classification predicts a discrete label or category, such as spam/not-spam or flower species.\nA Decision Tree learns rules by splitting data on feature thresholds at each node.\n\nAccuracy shows the overall percentage of correct predictions.\nA confusion matrix shows exactly where the model is right or wrong for each class.\nThe diagonal represents correct predictions; off-diagonal values are mistakes.\n\nAlways check the confusion matrix — high accuracy can hide poor performance on one class.'),
  'py-kaggle-track': point('py-kaggle-track', 'Follow Kaggle Intro to ML exercises', 'Kaggle\'s Intro to Machine Learning course walks you through a full supervised learning workflow step by step.\nEach lesson pairs a written tutorial with an interactive exercise notebook where you write real code.\n\nThe notebooks run in the cloud so there is nothing to install locally.\nYou get instant feedback when you submit each exercise, making it easy to catch mistakes.\n\nThe home prices dataset used in the course is a real-world regression problem — an ideal first project.\nCompleting the full course gives you a concrete, shareable portfolio item.'),
  'py-mlcc-track': point('py-mlcc-track', 'Follow Google ML Crash Course modules', 'Google ML Crash Course is a free, structured introduction to machine learning from Google.\nIt covers the core theory and intuition behind training models in a beginner-friendly way.\n\nEach module pairs a written or video lesson with a hands-on Colab notebook.\nTopics range from linear regression and gradient descent to neural networks and classification metrics.\n\nRecommended workflow: read the module, run the Colab, solve the quiz, write a short summary note.\nWorking through MLCC systematically builds the conceptual foundation you need for every ML project.'),
  'py-next-steps': point('py-next-steps', 'Next steps: Intermediate ML and Deep Learning', 'After completing Python Basics you have the foundations for real machine learning work.\n\nFeature engineering means creating or transforming input columns to help models learn better patterns.\nCross-validation gives a more reliable performance estimate than a single train/test split.\nHyperparameter tuning systematically finds the model settings that reduce error the most.\n\nXGBoost and LightGBM are the most competitive tree-based models for tabular data.\nKeras and PyTorch are the main frameworks for building neural networks and deep learning models.\n\nExperiment tracking and model deployment turn a notebook model into a working, maintainable system.')
}

export { AiVsMlVisual, MlTypesVisual, RealWorldExamplesVisual }
