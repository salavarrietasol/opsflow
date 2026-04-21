import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";

const tickets = [
  {
    id: "OPS-4915",
    title: "Database Migration for APAC Region",
    status: "IN PROGRESS",
    priority: "Urgent",
    assignee: "Sarah Chen",
    created: "Oct 12, 2023",
  },
  {
    id: "OPS-4819",
    title: "Security Patch v4.2 Deployment",
    status: "OPEN",
    priority: "High",
    assignee: "Marcus K.",
    created: "Oct 11, 2023",
  },
  {
    id: "OPS-4792",
    title: "Webhook Latency Investigation",
    status: "RESOLVED",
    priority: "Medium",
    assignee: "Alex Rivera",
    created: "Oct 09, 2023",
  },
  {
    id: "OPS-4788",
    title: "UI Refresh Dashboard Widgets",
    status: "CLOSED",
    priority: "Low",
    assignee: "Lila Thorne",
    created: "Oct 05, 2023",
  },
];

const statusClasses: Record<string, string> = {
  "IN PROGRESS": "bg-orange-100 text-orange-700",
  OPEN: "bg-violet-100 text-violet-700",
  RESOLVED: "bg-sky-100 text-sky-700",
  CLOSED: "bg-slate-200 text-slate-700",
};

const priorityClasses: Record<string, string> = {
  Urgent: "text-red-600",
  High: "text-orange-600",
  Medium: "text-amber-600",
  Low: "text-slate-500",
};

const TicketsPage = () => {
  return (
    <MainLayout>
          <header className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Tickets</p>
              <h1 className="text-3xl font-bold text-slate-900">Ticket Backlog</h1>
              <p className="mt-1 text-sm text-slate-500">
                Manage and orchestrate operational requests across departments.
              </p>
            </div>

            <Link 
            to="/tickets/create"
            className="rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700">
              + Create Ticket
            </Link>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex flex-col gap-3 xl:flex-row">
              <input
                type="text"
                placeholder="Search tickets, IDs, or assignees..."
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
              />
              <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                <option>All Status</option>
              </select>
              <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                <option>All Priority</option>
              </select>
              <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                <option>All Assignees</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                    <th className="px-4">ID</th>
                    <th className="px-4">Title</th>
                    <th className="px-4">Status</th>
                    <th className="px-4">Priority</th>
                    <th className="px-4">Assignee</th>
                    <th className="px-4">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="rounded-2xl bg-slate-50">
                      <td className="rounded-l-xl px-4 py-4 text-sm font-semibold text-violet-600">
                        {ticket.id}
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <td className="rounded-l-xl px-4 py-4 text-sm font-semibold text-violet-600">
                            <Link to= {`/tickets/${ticket.id}`} className="hover:underline">
                              {ticket.title}
                            </Link>
                          </td>
                          <p className="text-xs text-slate-400">
                            Operational task in workflow queue
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[ticket.status]}`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                      <td
                        className={`px-4 py-4 text-sm font-medium ${priorityClasses[ticket.priority]}`}
                      >
                        • {ticket.priority}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {ticket.assignee}
                      </td>
                      <td className="rounded-r-xl px-4 py-4 text-sm text-slate-500">
                        {ticket.created}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
              <p>Showing 1–4 of 124 tickets</p>
              <div className="flex items-center gap-2">
                <button className="h-9 w-9 rounded-lg border border-slate-200 bg-white text-slate-500">
                  1
                </button>
                <button className="h-9 w-9 rounded-lg bg-violet-600 text-white">
                  2
                </button>
                <button className="h-9 w-9 rounded-lg border border-slate-200 bg-white text-slate-500">
                  3
                </button>
              </div>
            </div>
          </section>
    </MainLayout>
  );
};

export default TicketsPage;