import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import { ticketDetail } from "../../../mocks/tickets";

const TicketDetailPage = () => {
    const { comments, activity } = ticketDetail;
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
            {ticketDetail.id} · {ticketDetail.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Review current ticket information, ownership, and discussion history.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
           {ticketDetail.status}
          </span>
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            {ticketDetail.priority}
          </span>
        </div>
      </header>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="xl:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {ticketDetail.description}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Assignee
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">{ticketDetail.assignee}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Reporter
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">{ticketDetail.reporter}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Created
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">{ticketDetail.created}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Due Date
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">{ticketDetail.dueDate}</p>
              </div>
            </div>
          </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Comments</h2>
              <span className="text-sm text-slate-400">3 updates</span>
            </div>
        </div>

        <div className="space-y-4">
            {comments.map((comment, index) => (
                <div key={index} className="rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-800">{comment.author}</p>
                        <p className="text-xs text-slate-400">{comment.time}</p>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{comment.content}</p>
                </div>
                ))}
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
              {activity.map((item, index) => (
                <div key={index}>
                    <p className="text-sm font-medium text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.time}</p>
                </div>
                ))}
            </div>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
};

export default TicketDetailPage;