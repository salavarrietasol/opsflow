import { Link, NavLink } from "react-router-dom";

const metrics = [
  { title: "Active Workflows", value: "1,284", change: "+12.5%" },
  { title: "Throughput", value: "94.2k", change: "stable" },
  { title: "Open Tickets", value: "142", change: "-8.2%" },
  { title: "Avg Response", value: "2.4m", change: "-1.6%" },
];

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside className="hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold text-slate-900">OpsFlow</h2>
            <p className="text-sm text-slate-400">Operations platform</p>
          </div>

          <nav className="flex-1 space-y-2 px-4 py-6">
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                `block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                    isActive
                    ? "bg-violet-50 font-semibold text-violet-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`
                }
             >
                Overview
            </NavLink>
            <NavLink
                to="/tickets"
                className={({ isActive }) =>
                `block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                    isActive
                    ? "bg-violet-50 font-semibold text-violet-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`
                }
             >
                Tickets
            </NavLink>
            <button className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
              Inventory
            </button>
            <button className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
              Reports
            </button>
            <button className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
              Settings
            </button>
          </nav>

          <div className="p-4">
            <button className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700">
              + New Workflow
            </button>
          </div>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Dashboard</p>
              <h1 className="text-3xl font-bold text-slate-900">System Overview</h1>
              <p className="mt-1 text-sm text-slate-500">
                Real-time operational health and performance metrics.
              </p>
            </div>

              <div className="flex items-center gap-3">
              <Link
                to="/tickets"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
                >
                View Tickets
              </Link>

              <Link
                to="/tickets/create"
                className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
                >
                Create Ticket
              </Link>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm text-slate-500">{metric.title}</p>
                <h3 className="mt-3 text-3xl font-bold text-slate-900">{metric.value}</h3>
                <p className="mt-2 text-sm text-violet-600">{metric.change}</p>
              </div>
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Tickets Trend</h2>
                <p className="text-sm text-slate-500">
                  Volume analysis for the current period
                </p>
              </div>

              <div className="flex h-72 items-end justify-between gap-3 rounded-xl bg-slate-50 p-6">
                {[30, 50, 80, 95, 75, 55, 45].map((height, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center gap-3">
                    <div
                      className="w-full max-w-[42px] rounded-t-xl bg-violet-500/80"
                      style={{ height: `${height * 2}px` }}
                    />
                    <span className="text-xs text-slate-400">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
                <button className="text-sm text-violet-600">View all</button>
              </div>

              <div className="space-y-4">
                {[
                  "Server cluster alignment deployed successfully",
                  "Anomaly detected in workflow latency",
                  "New team access granted",
                  "Weekly report ready",
                ].map((item, index) => (
                  <div key={index} className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-800">{item}</p>
                    <p className="mt-1 text-xs text-slate-400">2h ago</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;