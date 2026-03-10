const aiMlLearningPath = {
  hero: {
    title: "AI & ML Fundamentals",
    subtitle: "Select a topic card below to explore AI and Machine Learning concepts with examples and visuals.",
    audience: "Perfect for beginners starting their AI/ML journey."
  },
  topics: [
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
      shortDescription: "Learn about Supervised, Unsupervised, and Reinforcement Learning with examples."
    },
    {
      id: "real-world-examples",
      title: "Real-world Examples",
      shortDescription: "Discover practical AI/ML applications in everyday technology and industries."
    }
  ],
  content: {
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
