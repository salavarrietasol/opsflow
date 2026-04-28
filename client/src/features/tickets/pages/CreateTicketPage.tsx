import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { createTicket } from "../../../api/tickets";
const CreateTicketPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [assignee, setAssignee] = useState("");
    const [created, setCreated] = useState("");
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        title: "",
        description: "",
        priority: "",
        assignee: "",
        created: "",
    });

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newErrors = {
        title: "",
        description: "",
        priority: "",
        assignee: "",
        created: "",
      };

      if (!title.trim()) {
        newErrors.title = "Title is required";
      }

      if (!description.trim()) {
        newErrors.description = "Description is required";
      }

      if (!priority.trim()) {
        newErrors.priority = "Please select a priority";
      }

      if (!assignee.trim()) {
        newErrors.assignee = "Please select an assignee";
      }

      if (!created.trim()) {
        newErrors.created = "Due date is required";
      }

      if (
        newErrors.title ||
        newErrors.description ||
        newErrors.priority ||
        newErrors.assignee ||
        newErrors.created
      ) {
        setErrors(newErrors);
        return;
      }

      setErrors(newErrors);

      try {
        await createTicket({
          title, 
          description,
          priority,
          assignee,
          created,
        });

        navigate ("/tickets");
      } catch (error) {
        console.error("Error creating ticket", error);
      }
    };

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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Ticket title
                </label>
                <input
                  type="text"
                  placeholder="Enter a clear and concise title"
                  value={title}
                  onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);

                    if (value.trim()) {
                      setErrors(prev => ({ ...prev, title: "" }));
                    }
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe the issue, request, or workflow need..."
                  value={description}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);

                    if (value.trim()) {
                      setErrors(prev => ({ ...prev, description: "" }));
                    }
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Priority
                  </label>
                  <select 
                    value = {priority}
                    onChange={(e) => {
                    const value = e.target.value;
                    setPriority(value);

                    if (value.trim()) {
                      setErrors(prev => ({ ...prev, priority: "" }));
                    }
                  }}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-violet-500"
                    >
                    <option value="">Select priority</option>
                    <option>Urgent</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  {errors.priority && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.priority}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Assignee
                  </label>
                  <select 
                    value={assignee}
                    onChange={(e) => {
                    const value = e.target.value;
                    setAssignee(value);

                    if (value.trim()) {
                      setErrors(prev => ({ ...prev, assignee: "" }));
                    }
                  }}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-violet-500">
                    <option value="">Select assignee</option>
                    <option>Sarah Chen</option>
                    <option>Marcus K.</option>
                    <option>Alex Rivera</option>
                    <option>Lila Thorne</option>
                  </select>
                  {errors.assignee && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.assignee}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Due date
                </label>
                <input
                  type="date"
                  value={created}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCreated(value);

                    if (value.trim()) {
                      setErrors(prev => ({ ...prev, created: "" }));
                    }
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
                />
                {errors.created && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.created}
                  </p>
                )}
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