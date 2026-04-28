import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import { getTicketById } from "../../../api/tickets";
import { deleteTicket } from "../../../api/tickets";

type Ticket = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee: string;
  created: string;
};

const TicketDetailPage = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleDelete = async () => {
  if (!ticket) return;

  const isMatch =
    deleteConfirmation.trim().toLowerCase() === ticket.id.trim().toLowerCase();

  if (!isMatch) return;

  try {
    console.log("Deleting ticket ID:", ticket.id);

    await deleteTicket(ticket.id);

    console.log("Ticket deleted successfully");

    navigate("/tickets");
  } catch (error) {
    console.error("Error deleting ticket", error);
  }
};

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

  const handleCopyTicketId = async () => {
  if (!ticket) return;

  await navigator.clipboard.writeText(ticket.id);
  setCopied(true);

};

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
              {ticket.description}
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
              <button
                type="button"
                onClick={() => setShowDeleteModal(true)}
                className="w-full rounded-xl border border-slate-200 bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700"
                >
                Delete Ticket
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
        {showDeleteModal && ticket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              <h2 className="text-lg font-bold text-slate-900">
                Delete ticket
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                This action cannot be undone. To confirm, type the ticket ID:
              </p>

              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="break-all text-sm font-semibold text-slate-800">
                  {ticket.id}
                </span>

                <button
                  type="button"
                  onClick={handleCopyTicketId}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
                  >
                  <span>{copied ? "✅" : "📋"}</span>
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <input
                type="text"
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                placeholder="Type the ticket ID"
                className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-red-500"
              />

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeleteConfirmation("");
                  }}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  disabled={
                  deleteConfirmation.trim().toLowerCase() !== ticket.id.trim().toLowerCase()
                }
                  onClick={handleDelete}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold text-white ${
                    deleteConfirmation.trim().toLowerCase() !== ticket.id.trim().toLowerCase()
                    ? "cursor-not-allowed bg-red-300"
                    : "cursor-pointer bg-red-600 hover:bg-red-700"
                  }`}
                >
                  Delete ticket
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TicketDetailPage;