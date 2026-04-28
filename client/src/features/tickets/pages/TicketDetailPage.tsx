import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import { getTicketById } from "../../../api/tickets";

type Ticket = {
  id: string;
  title: string;
  status: string;
  priority: string;
  assignee: string;
  created: string;
};

const TicketDetailPage = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    const loadTicket = async () => {
      if (!id) return;

      try {
        const data = await getTicketById(id);
        setTicket(data);
      } catch (error) {
        console.error("Error loading ticket:", error);
      }
    };

    loadTicket();
  }, [id]);

  if (!ticket) {
    return (
      <MainLayout>
        <p className="text-sm text-slate-500">Loading ticket...</p>
      </MainLayout>
    );
  }

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
            {ticket.id} · {ticket.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Review current ticket information, ownership, and discussion history.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            {ticket.status}
          </span>
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            {ticket.priority}
          </span>
        </div>
      </header>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="space-y-6 xl:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This ticket is currently being tracked through the OpsFlow platform.
              The detailed description, comments, and activity timeline can be
              extended when the backend grows.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Assignee
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {ticket.assignee}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {ticket.status}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Priority
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {ticket.priority}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Created
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {ticket.created}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Comments</h2>
              <span className="text-sm text-slate-400">Coming soon</span>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                Comments will be connected in the next backend iteration.
              </p>
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

            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                Activity timeline will be connected in the next backend iteration.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
};

export default TicketDetailPage;