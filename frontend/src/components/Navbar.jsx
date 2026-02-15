import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-8 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-400">
        SkillRoute
      </h1>

      <div className="flex gap-6">
        {["/", "/learning-paths", "/projects", "/contributors"].map(
          (path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-medium"
                  : "text-gray-400 hover:text-white"
              }
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </NavLink>
          )
        )}
      </div>
    </nav>
  )
}
