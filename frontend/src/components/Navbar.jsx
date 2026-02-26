import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = ["/", "/learning-paths", "/projects", "/contributors"]

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
                `transition-colors font-medium ${isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`
              }
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg md:hidden flex flex-col pt-2 pb-4 px-4 gap-4 z-40 transition-colors">
          {navLinks.map((path, i) => (
            <NavLink
              key={`mobile-${i}`}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition-colors font-medium p-2 block rounded-md ${isActive
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:text-gray-900 dark:hover:text-white"
                }`
              }
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}