export default function AddProject() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Add Project Idea</h1>

      <form className="space-y-4 max-w-xl">
        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Project Title"
        />

        <select className="w-full p-2 rounded bg-gray-800">
          <option>Web Development</option>
          <option>DSA</option>
          <option>AI / ML</option>
          <option>Cyber Security</option>
        </select>

        <select className="w-full p-2 rounded bg-gray-800">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <textarea
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Short Description"
        />

        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Project Link (optional)"
        />

        <button className="bg-blue-600 px-4 py-2 rounded">
          Submit Idea
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4">
        👉 Submit via Pull Request by adding this project to <b>projects.json</b>
      </p>
    </div>
  );
}
