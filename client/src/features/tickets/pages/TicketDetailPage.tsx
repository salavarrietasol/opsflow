import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";

const TicketDetailPage = () => {
  return (
    <MainLayout>
      <header className="mb-8 flex items-start justify-between gap-4">
        <div>
            <Link
                to="/tickets"
                className="mb-3 inline-block text-sm font-medium text-violet-600 hover:underline"
            >
                ← Back to Tickets
            </Link>
          <p className="text-sm text-slate-500">Ticket Details</p>
          <h1 className="text-3xl font-bold text-slate-900">
            OPS-4915 · Database Migration for APAC Region
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Review current ticket information, ownership, and discussion history.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            IN PROGRESS
          </span>
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            Urgent
          </span>
        </div>
      </header>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="xl:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This ticket covers the database migration workflow for the APAC region.
              The operation includes schema alignment, replication validation, and
              service continuity checks before the final cutover window.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Assignee
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">Sarah Chen</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Reporter
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">Marcus K.</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Created
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">Oct 12, 2023</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Due Date
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">Oct 18, 2023</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Comments</h2>
              <span className="text-sm text-slate-400">3 updates</span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">Sarah Chen</p>
                  <p className="text-xs text-slate-400">2h ago</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Initial migration checks completed. Waiting on final replication report.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">Alex Rivera</p>
                  <p className="text-xs text-slate-400">5h ago</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Monitoring latency during sync. No major anomalies so far.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">Marcus K.</p>
                  <p className="text-xs text-slate-400">1d ago</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Ticket created to track regional migration and release coordination.
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Actions</h2>

            <div className="mt-4 space-y-3">
              <button className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700">
                Update Status
              </button>
              <button className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
                Reassign Ticket
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Activity</h2>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-800">Status changed to In Progress</p>
                <p className="text-xs text-slate-400">Today · 09:24 AM</p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800">Assignee updated to Sarah Chen</p>
                <p className="text-xs text-slate-400">Today · 08:10 AM</p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800">Ticket created</p>
                <p className="text-xs text-slate-400">Yesterday · 05:42 PM</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
};

export default TicketDetailPage;