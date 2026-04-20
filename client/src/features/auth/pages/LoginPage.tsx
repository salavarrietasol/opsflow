import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5f3ff,_#e5e7eb,_#dbe4f0)] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-white/40 p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white font-bold shadow-md">
            ⚡
          </div>
          <h1 className="text-3xl font-bold text-slate-900">OpsFlow</h1>
          <p className="mt-2 text-sm text-slate-500">Welcome back</p>
          <p className="text-sm text-slate-400">Access your operational workspace</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Password
              </label>
              <button
                type="button"
                className="text-xs font-medium text-violet-600 hover:text-violet-700"
              >
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <Link
            to="/dashboard"
            className="block w-full rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-violet-700"
          >
            Sign in
          </Link>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs uppercase tracking-wide text-slate-400">
            or continue with
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <span>G</span>
          Google Account
        </button>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don’t have an account?{" "}
          <span className="font-medium text-violet-600">Request access</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;