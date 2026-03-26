const aiMlLearningPath = {
  hero: {
    title: "AI & ML Fundamentals",
    subtitle: "Select a topic card below to explore AI and Machine Learning concepts with examples and visuals.",
    audience: "Perfect for beginners starting their AI/ML journey."
  },
  topics: [
    {
      id: "python-basics",
      title: "Python Basics",
      shortDescription:
        "A full beginner-to-intermediate roadmap for Python skills required in AI/ML."
    },
    {
      id: "ai-ml-fundamentals",
      title: "AI/ML Fundamentals",
      shortDescription:
        "A structured module covering core Machine Learning concepts: Supervised vs Unsupervised, Regression, Classification, Overfitting, and Evaluation."
    },
    {
      id: "what-is-ai",
      title: "What is AI?",
      shortDescription: "Understand Artificial Intelligence fundamentals, scope, and real-world applications."
    },
    {
      id: "what-is-ml",
      title: "What is ML?",
      shortDescription: "Explore Machine Learning, its relationship to AI, and how it learns from data."
    },
    {
      id: "types-of-ml",
      title: "Types of ML",
      shortDescription:
        "Learn about Supervised, Unsupervised, and Reinforcement Learning with examples."
    },
    {
      id: "data-preprocessing",
      title: "Data Preprocessing",
      shortDescription:
        "Learn how to clean, transform, and prepare data before model training."
    },
    {
      id: "model-evaluation-basics",
      title: "Model Evaluation Basics",
      shortDescription:
        "Understand train/validation/test splits and core model evaluation metrics."
    },
    {
      id: "real-world-examples",
      title: "Real-world Examples",
      shortDescription: "Discover practical AI/ML applications in everyday technology and industries."
    }
  ],
  content: {
    "python-basics": {
      title: "Python Basics Roadmap for AI/ML",
      intro:
        "This roadmap is designed using a progressive sequence used by major learning providers and official documentation: start with core Python syntax, then data structures and functions, then scientific libraries and mini-projects.",
      phases: [
        {
          id: "py-phase-1",
          title: "PHASE 1: PYTHON FOUNDATIONS (Beginner)",
          sections: [
            {
              heading: "1) Setup and Core Syntax",
              points: [
                { id: "py-install-and-repl", title: "Install Python and run scripts" },
                { id: "py-variables-and-types", title: "Variables, basic data types, and casting" },
                { id: "py-input-output", title: "Input, print formatting, and f-strings" }
              ]
            },
            {
              heading: "2) Control Flow Basics",
              points: [
                { id: "py-conditionals", title: "if/elif/else logic" },
                { id: "py-loops", title: "for and while loops" },
                { id: "py-range-break-continue", title: "range, break, continue, and loop patterns" }
              ]
            }
          ],
          note: "Write small scripts and execute them frequently to build fluency."
        },
        {
          id: "py-phase-2",
          title: "PHASE 2: DATA STRUCTURES + FUNCTIONS",
          sections: [
            {
              heading: "3) Core Data Structures",
              points: [
                { id: "py-lists-tuples", title: "Lists and tuples" },
                { id: "py-sets-dicts", title: "Sets and dictionaries" },
                { id: "py-slicing-comprehensions", title: "Slicing and list/dict comprehensions" }
              ]
            },
            {
              heading: "4) Functions and Error Handling",
              points: [
                { id: "py-functions-scope", title: "Functions, arguments, return values, and scope" },
                { id: "py-modules-packages", title: "Modules, imports, and package basics" },
                { id: "py-exceptions", title: "Try/except/finally and debugging mindset" }
              ]
            }
          ]
        },
        {
          id: "py-phase-3",
          title: "PHASE 3: NUMPY FOUNDATION FOR NUMERICAL WORK",
          sections: [
            {
              heading: "5) NumPy Fundamentals",
              points: [
                { id: "py-numpy-arrays", title: "ndarray, shape, dtype, and indexing" },
                { id: "py-numpy-ops", title: "Vectorized operations and broadcasting" },
                { id: "py-numpy-aggregate", title: "Aggregations, reshape, and basic statistics" }
              ]
            }
          ]
        },
        {
          id: "py-phase-4",
          title: "PHASE 4: PANDAS + MODEL PREPARATION",
          sections: [
            {
              heading: "6) Pandas Essentials",
              points: [
                { id: "py-pandas-series-dataframe", title: "Series and DataFrame basics" },
                { id: "py-pandas-cleaning", title: "Missing values, filtering, and feature columns" },
                { id: "py-pandas-io", title: "Read/write CSV and quick exploratory analysis" }
              ]
            },
            {
              heading: "7) Preparing for Modeling",
              points: [
                { id: "py-train-validation-test", title: "Train/validation/test split basics" },
                { id: "py-baseline-model", title: "Build a baseline model with scikit-learn" },
                { id: "py-evaluate-model", title: "Evaluate with MAE/accuracy and iterate" }
              ]
            }
          ]
        },
        {
          id: "py-phase-5",
          title: "PHASE 5: VISUALIZATION + PRACTICE",
          sections: [
            {
              heading: "8) Data Visualization",
              points: [
                { id: "py-matplotlib-basics", title: "Plot lifecycle with Matplotlib" },
                { id: "py-plot-types", title: "Line, scatter, histogram, and subplot usage" },
                { id: "py-plot-storytelling", title: "Titles, labels, legends, and chart readability" }
              ]
            },
            {
              heading: "9) Hands-on Projects",
              points: [
                { id: "py-mini-project-eda", title: "Mini project: EDA and data cleaning notebook" },
                { id: "py-mini-project-regression", title: "Mini project: Price prediction (regression)" },
                { id: "py-mini-project-classification", title: "Mini project: Binary classification pipeline" }
              ]
            },
            {
              heading: "10) Learning Path Extensions",
              points: [
                { id: "py-kaggle-track", title: "Follow Kaggle Intro to ML exercises" },
                { id: "py-mlcc-track", title: "Follow Google ML Crash Course modules" },
                { id: "py-next-steps", title: "Next steps: Intermediate ML and Deep Learning" }
              ]
            }
          ]
        }
      ]
    },
    "ai-ml-fundamentals": {
      title: "AI/ML Fundamentals Roadmap",
      intro:
        "A guided path to understand the core principles, models, and evaluation techniques in Artificial Intelligence and Machine Learning.",
      phases: [
        {
          id: "aiml-phase-1",
          title: "PHASE 1: CORE PARADIGMS",
          sections: [
            {
              heading: "1) Learning Approaches",
              points: [
                { id: "aiml-sup-vs-unsup", title: "Supervised vs Unsupervised Learning" }
              ]
            }
          ],
          note: "Understand how data labeling determines the learning approach."
        },
        {
          id: "aiml-phase-2",
          title: "PHASE 2: KEY PROBLEM TYPES",
          sections: [
            {
              heading: "2) Predictive Modeling",
              points: [
                { id: "aiml-regression", title: "Regression (Continuous Output)" },
                { id: "aiml-classification", title: "Classification (Categorical Output)" }
              ]
            }
          ]
        },
        {
          id: "aiml-phase-3",
          title: "PHASE 3: MODEL PERFORMANCE",
          sections: [
            {
              heading: "3) Training Challenges & Metrics",
              points: [
                { id: "aiml-overfitting", title: "Overfitting & Underfitting" },
                { id: "aiml-evaluation", title: "Model Evaluation Strategies" }
              ]
            }
          ]
        }
      ]
    },
    "what-is-ai": {
      title: "What is Artificial Intelligence?",
      explanation: `Artificial Intelligence (AI) refers to the simulation of human intelligence by machines, particularly computers. It enables systems to perform tasks that typically require human intelligence, such as learning from experience, recognizing patterns, understanding language, and making decisions.

AI is a broad field that encompasses any technology that makes computers behave intelligently. This includes problem-solving, pattern recognition, natural language processing, and decision-making. AI can operate in two ways: reactive systems that respond to inputs without memory, and learning systems that improve over time.

The primary goal of AI is to create systems that can perform complex tasks autonomously or semi-autonomously. From virtual assistants like Siri and Alexa to recommendation engines on Netflix and YouTube, AI is deeply integrated into modern technology and everyday life.

Key characteristics of AI systems include the ability to perceive their environment, reason about information, and take actions to achieve specific goals. As AI technology advances, it continues to revolutionize industries ranging from healthcare and finance to transportation and education.`
    },
    "what-is-ml": {
      title: "What is Machine Learning?",
      explanation: `Machine Learning (ML) is a subset of Artificial Intelligence that focuses on enabling computers to learn and improve from experience without being explicitly programmed for every scenario. Instead of following pre-written rules, ML systems learn patterns from data and make predictions or decisions based on that learning.

The fundamental concept of ML is that algorithms can identify patterns in data, improve their performance through experience, and adapt to new situations. Unlike traditional programming where developers write specific instructions, ML systems are trained on data and automatically develop rules and decision boundaries.

Machine Learning has three main paradigms: Supervised Learning (learning from labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (learning through rewards and penalties). Each paradigm is suitable for different types of problems.

Modern applications of ML are everywhere: email spam filters, recommendation systems, autonomous vehicles, medical diagnosis systems, and predictive analytics. The power of ML lies in its ability to handle complex, non-linear relationships in data that would be impossible to program manually.`
    },
    "types-of-ml": {
      title: "Types of Machine Learning",
      explanation: `Machine Learning is broadly categorized into three main types based on the type of learning approach and data available:

**Supervised Learning**: This type involves training on labeled data where each input has a corresponding correct output. The algorithm learns to map inputs to outputs accurately. Common applications include email classification (spam/not spam), house price prediction, and medical diagnosis. Examples of supervised algorithms include Linear Regression, Decision Trees, and Neural Networks.

**Unsupervised Learning**: Here, the algorithm works with unlabeled data and must find patterns or structure on its own. The goal is often to discover hidden patterns, group similar items, or reduce data complexity. Applications include customer segmentation in marketing, anomaly detection in fraud prevention, and data compression. Common algorithms include K-Means Clustering and Principal Component Analysis (PCA).

**Reinforcement Learning**: This approach involves agents learning by interacting with an environment and receiving rewards or penalties for their actions. The agent's goal is to maximize cumulative rewards over time. This is widely used in game AI, robotics, and autonomous systems. Famous applications include AlphaGo defeating world chess champions and autonomous driving.

Each type serves different purposes: use Supervised Learning for prediction tasks, Unsupervised Learning for exploration and discovery, and Reinforcement Learning for sequential decision-making and optimized control systems.`
    },
    "data-preprocessing": {
      title: "Data Preprocessing Fundamentals",
      explanation: `Data preprocessing is the bridge between raw data and useful machine learning models. Even strong algorithms fail on inconsistent, noisy, or poorly formatted data.

Common preprocessing tasks include handling missing values, removing duplicates, fixing inconsistent categories, scaling numeric features, and encoding categorical features. The exact workflow depends on the problem type and data source.

For tabular ML, a practical sequence is: inspect data -> clean and validate types -> split train/validation/test -> transform features consistently -> train a baseline model.

Beginners should practice preprocessing in Python with pandas and then migrate reusable transformations into scikit-learn pipelines for cleaner, reproducible projects.`
    },
    "model-evaluation-basics": {
      title: "Model Evaluation Basics",
      explanation: `Model evaluation tells you whether your model genuinely learned patterns or just memorized your training data.

The foundation is a proper split strategy: training set for fitting, validation set for tuning, and test set for final unbiased assessment. Without this, performance numbers can be misleading.

Choose metrics based on task type. For regression, MAE and RMSE are common. For classification, accuracy, precision, recall, F1-score, and ROC-AUC are frequently used depending on class balance and business risk.

A strong beginner habit is to compare every new model against a simple baseline and document what changed, why performance changed, and whether the improvement generalizes.`
    },
    "real-world-examples": {
      title: "Real-world AI & ML Examples",
      explanation: `AI and ML have become integral to our daily lives, powering systems we interact with constantly:

**Recommendation Systems (Netflix, YouTube, Spotify)**: These platforms use ML algorithms to analyze your viewing/listening history, compare it with millions of other users, and predict content you'll enjoy. Collaborative filtering and matrix factorization are common techniques used here.

**Virtual Assistants (Siri, Alexa, Google Assistant)**: These use Natural Language Processing (NLP), a subfield of AI, to understand voice commands and respond appropriately. They combine speech recognition, language understanding, and knowledge databases to assist users.

**Healthcare & Medical Diagnosis**: ML models analyze medical images like X-rays and MRIs to detect diseases like cancer. Trained on thousands of labeled images, these systems can often match or exceed human radiologist performance in accuracy.

**Autonomous Vehicles (Tesla, Waymo)**: Self-driving cars use computer vision, sensor fusion, and decision-making algorithms to perceive their environment, plan routes, and make real-time driving decisions without human intervention.

**Fraud Detection (Banking & Credit Cards)**: Banks use ML to detect suspicious transactions in real-time. The system learns patterns of legitimate transactions and flags anomalies that might indicate fraud.

**Search Engines (Google, Bing)**: Search engines use ranking algorithms and NLP to understand user queries and return the most relevant results from billions of web pages.

These examples demonstrate how AI/ML has transformed industries and improved efficiency, accuracy, and user experiences at a massive scale.`
    }
  }
};

export default aiMlLearningPath;
