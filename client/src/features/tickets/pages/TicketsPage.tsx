import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "../../../components/feedback/RequestState";
import { getTickets } from "../../../api/tickets";

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
type TicketAttachment = {
  id: string;
  name: string;
  url: string;
  type: "image" | "file";
};

type Ticket = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee: string;
  created: string;
  attachments?: TicketAttachment[];
};

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [assigneeFilter, setAssigneeFilter] = useState("All Assignees");

  const loadTickets = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data: Ticket[] = await getTickets();
      setTickets(data);
    } catch (error) {
      console.error("Error loading tickets:", error);
      setError("Unable to load tickets. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const statusOptions = useMemo(
    () => ["All Status", ...Array.from(new Set(tickets.map((ticket) => ticket.status)))],
    [tickets],
  );

  const priorityOptions = useMemo(
    () => [
      "All Priority",
      ...Array.from(new Set(tickets.map((ticket) => ticket.priority))),
    ],
    [tickets],
  );

  const assigneeOptions = useMemo(
    () => [
      "All Assignees",
      ...Array.from(new Set(tickets.map((ticket) => ticket.assignee))),
    ],
    [tickets],
  );

  const filteredTickets = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return tickets.filter((ticket) => {
      const matchesSearch =
        !normalizedSearch ||
        ticket.id.toLowerCase().includes(normalizedSearch) ||
        ticket.title.toLowerCase().includes(normalizedSearch) ||
        ticket.assignee.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "All Status" || ticket.status === statusFilter;
      const matchesPriority =
        priorityFilter === "All Priority" || ticket.priority === priorityFilter;
      const matchesAssignee =
        assigneeFilter === "All Assignees" || ticket.assignee === assigneeFilter;

      return matchesSearch && matchesStatus && matchesPriority && matchesAssignee;
    });
  }, [assigneeFilter, priorityFilter, search, statusFilter, tickets]);

  return (
    <MainLayout>
      <header className="mb-6 flex flex-row flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="min-w-0">
            <p className="text-sm text-slate-500">Tickets</p>
            <h1 className="text-2xl font-bold text-slate-900">
              Ticket Backlog
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage and orchestrate operational requests across departments.
            </p>
          </div>
        </div>

        <Link
          to="/tickets/create"
          className="rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white shadow hover:bg-violet-700"
        >
          + Create Ticket
        </Link>
      </header>

      {loading && <LoadingState message="Loading tickets..." />}

      {!loading && error && (
        <ErrorState message={error} actionLabel="Retry" onAction={loadTickets} />
      )}

      {!loading && !error && (
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5">
          <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:flex">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search tickets, IDs, or assignees..."
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500 sm:col-span-2 xl:col-span-1 xl:flex-1"
            />
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <select
              value={priorityFilter}
              onChange={(event) => setPriorityFilter(event.target.value)}
              className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
            >
              {priorityOptions.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
            <select
              value={assigneeFilter}
              onChange={(event) => setAssigneeFilter(event.target.value)}
              className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 sm:col-span-2 xl:col-span-1"
            >
              {assigneeOptions.map((assignee) => (
                <option key={assignee} value={assignee}>
                  {assignee}
                </option>
              ))}
            </select>
          </div>

          {filteredTickets.length === 0 ? (
            <EmptyState
              title="No tickets found"
              description="Try changing the filters or create a new ticket."
              action={
                <Link
                  to="/tickets/create"
                  className="inline-flex rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700"
                >
                  + Create Ticket
                </Link>
              }
            />
          ) : (
            <>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {filteredTickets.map((ticket) => (
                  <article
                    key={ticket.id}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 h-auto overflow-visible flex flex-col gap-3"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                              {ticket.id}
                            </p>
                          </div>
                          <div>
                            <span
                              className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                                statusClasses[ticket.status] ??
                                "bg-slate-100 text-slate-600"
                              }`}
                              >
                              {ticket.status}
                            </span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/tickets/${ticket.id}`}
                          className="mt-1 block break-words text-base font-semibold text-slate-900 hover:text-violet-600 hover:underline"
                        >
                          {ticket.title}
                        </Link>
                        <p
                          className={`mt-1 flex items-center gap-2 font-medium text-xs ${
                            priorityClasses[ticket.priority] ?? "text-slate-500"
                          }`}
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-current"></span>
                          <span>{ticket.priority}</span>
                        </p>
                        <p className=" line-clamp-1 mt-2 break-words text-sm leading-6 text-slate-500">
                          {ticket.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 gap-3 font-medium ">
                      <div className=" text-slate-400 text-xs">
                        <p> IMAGES & ATTACHMENTS</p>
                        {ticket.attachments && ticket.attachments.length > 0 ? (
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {ticket.attachments.slice(0, 3).map((attachment) => (
                            <div
                              key={attachment.id}
                              className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white"
                            >
                              {attachment.type === "image" ? (
                                <img
                                  src={attachment.url}
                                  alt={attachment.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex flex-col items-center text-slate-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-.99-2.386l-4.999-4.999a3.375 3.375 0 0 0-2.386-.99H8.25A2.25 2.25 0 0 0 6 5.25v13.5A2.25 2.25 0 0 0 8.25 21h7.5A2.25 2.25 0 0 0 18 18.75v-4.5"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 3v6.75A2.25 2.25 0 0 0 14.25 12H21"
                                    />
                                  </svg>

                                  <span className="mt-1 text-[10px] font-semibold">File</span>
                                </div>
                              )}
                            </div>
                          ))}

                          {ticket.attachments.length > 3 && (
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white text-xs font-semibold text-slate-500">
                              +{ticket.attachments.length - 3}
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="mt-2 text-xs text-slate-400">No attachments</p>
                      )}
                      </div>
                      <div className="flex items-start justify-between mt-1 col sm:flex-row text-xs">
                        <div className="mt-1 flex col sm:justify-between gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-400 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                          <p className=" mt-1 font-medium text-slate-400">
                            {ticket.assignee}
                          </p>
                        </div>
                        <div className="mt-1 flex col sm:justify-between gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-400 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                          </svg>
                          <p className="mt-1 font-medium text-slate-400">
                            {ticket.created}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 border-t border-slate-200 pt-3 flex items-start justify-between gap-3">
                        <div className="border-slate-200  flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-400 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                          </svg>
                          <p className=" mt-1 text-xs text-violet-600 font-bold">+ 3 comments</p>
                        </div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-400 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                <p>
                  Showing {filteredTickets.length} of {tickets.length} tickets
                </p>
              </div>
            </>
          )}
        </section>
      )}
    </MainLayout>
  );
};

export default TicketsPage;
