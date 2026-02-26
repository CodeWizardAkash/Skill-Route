import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
     

      <div className="flex justify-center items-center py-20 px-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-2">Sign In</h2>
          <p className="text-slate-400 mb-6">
            Welcome back to SkillRoute
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700"
              />
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-slate-400 mt-6 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;