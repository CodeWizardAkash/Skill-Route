import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="px-6 md:px-20 py-16 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Open Knowledge & Project Hub
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          A community-driven open-source platform where students explore modern technologies, build real-world projects, and grow together through collaboration.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/learning-paths"
            className="bg-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
          >
            Explore Learning Paths
          </Link>

          <Link
            to="/projects"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* WHAT IS THIS */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            📘 Learn
          </h3>
          <p className="text-gray-400">
            Follow structured learning paths like Web Development, DSA, AI/ML,
            and Cyber Security.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            🛠 Build
          </h3>
          <p className="text-gray-400">
            Work on real frontend projects using React, TailwindCSS, and Vite.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            🤝 Contribute
          </h3>
          <p className="text-gray-400">
            Contribute through GitHub PRs and experience real open-source
            collaboration.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          How This Platform Works
        </h2>

        <ol className="space-y-6 text-gray-300">
          <li>1️⃣ Choose a learning path</li>
          <li>2️⃣ Explore topics and resources</li>
          <li>3️⃣ Build or improve projects</li>
          <li>4️⃣ Contribute via GitHub Pull Requests</li>
        </ol>
      </section>

      {/* CONTRIBUTION LEVELS */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-10">
          Everyone Can Contribute
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">🟢 Beginners</h3>
            <p className="text-gray-400">
              UI improvements, content updates, documentation.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">🟡 Intermediate</h3>
            <p className="text-gray-400">
              Add features, filters, search, and components.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">🔴 Advanced</h3>
            <p className="text-gray-400">
              Refactoring, architecture, accessibility, performance.
            </p>
          </div>
        </div>
      </section>

      {/* JWOC CTA */}
      <section className="text-center border-t border-gray-800 pt-12">
        <p className="text-gray-400 mb-4">
          This project is part of <strong>JGEC Winter of Code (JWOC)</strong>
        </p>
        <p className="text-gray-500">
          Learn • Build • Contribute • Grow
        </p>
      </section>

    </div>
  )
}
