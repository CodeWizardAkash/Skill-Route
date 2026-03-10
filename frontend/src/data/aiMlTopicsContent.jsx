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

export { AiVsMlVisual, MlTypesVisual, RealWorldExamplesVisual };
