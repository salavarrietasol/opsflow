import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070817] px-4 py-8">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/95 p-8 text-slate-900 shadow-2xl shadow-violet-950/40 backdrop-blur">
        <Link
          to="/"
          className="mb-6 inline-block text-sm font-bold text-violet-600 hover:text-violet-700"
        >
          ← Back to home
        </Link>

        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-2xl shadow-lg shadow-violet-600/40">
            ⚡
          </div>

          <h1 className="text-4xl font-extrabold text-slate-950">OpsFlow</h1>

          <p className="mt-3 text-sm font-semibold text-slate-500">
            Welcome back
          </p>
          <p className="text-sm text-slate-400">
            Access your operational workspace
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">
              Email address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
                Password
              </label>
              <button
                type="button"
                className="text-xs font-bold text-violet-600 hover:text-violet-700"
              >
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </div>

          <Link
            to="/dashboard"
            className="block w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 text-center text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:scale-[1.01] hover:shadow-violet-600/50"
          >
            Sign in
          </Link>
        </form>

        <div className="my-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            or continue with
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          onClick={() => {
            window.location.assign(`${API_BASE_URL}/auth/google`);
          }}
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 shadow-lg shadow-violet-600/30 transition hover:scale-[1.01] hover:shadow-violet-600/50"
        >
          <span className="text-lg">G</span>
          Continue with Google
        </button>

        <p className="mt-7 text-center text-sm font-medium text-slate-400">
          Don’t have an account?{" "}
          <span className="font-bold text-violet-600">Request access</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
