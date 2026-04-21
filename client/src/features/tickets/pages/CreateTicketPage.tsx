import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
const CreateTicketPage = () => {
    const navigate = useNavigate();
  return (
    <MainLayout>
          <header className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
                <Link to="/tickets" className="hover:text-violet-600">
                    Tickets
                </Link>
                <span>/</span>
                <span className="text-slate-500">Create Ticket</span>
            </div>
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
                  onClick={() => navigate("/tickets")}
                  className="cursor-pointer rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-violet-700"
                >
                  Create Ticket
                </button>
              </div>
            </form>
          </section>
    </MainLayout>
  );
};

export default CreateTicketPage;