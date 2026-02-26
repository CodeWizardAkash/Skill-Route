import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-400">
        SkillRoute
      </h1>

      {/* ONE flex row only */}
      <div className="flex items-center gap-6">
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

        {/* Auth Links */}
        <Link
          to="/signin"
          className="text-gray-400 hover:text-white"
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg font-medium flex items-center"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}