import { NavLink } from "react-router-dom";
const CreateTicketPage = () => {
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
            <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
              Reports
            </button>
            <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
              Settings
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <header className="mb-8">
            <p className="text-sm text-slate-500">Tickets</p>
            <h1 className="text-3xl font-bold text-slate-900">Create Ticket</h1>
            <p className="mt-1 text-sm text-slate-500">
              Submit a new operational request and assign ownership.
            </p>
          </header>

          <section className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Ticket title
                </label>
                <input
                  type="text"
                  placeholder="Enter a clear and concise title"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe the issue, request, or workflow need..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Priority
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-violet-500">
                    <option>Select priority</option>
                    <option>Urgent</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Assignee
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-violet-500">
                    <option>Select assignee</option>
                    <option>Sarah Chen</option>
                    <option>Marcus K.</option>
                    <option>Alex Rivera</option>
                    <option>Lila Thorne</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Due date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700"
                >
                  Create Ticket
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CreateTicketPage;