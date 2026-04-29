import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070817] text-white">
      <header className="flex items-center justify-between px-6 py-6 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-500/30">
            ⚡
          </div>
          <span className="text-xl font-bold">OpsFlow</span>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 lg:flex">
          <a className="text-violet-400" href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </nav>

        <button className="hidden rounded-xl border border-violet-500 px-5 py-2 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/10 lg:block">
          Download CV
        </button>
      </header>

      <main className="relative grid min-h-[calc(100vh-210px)] grid-cols-1 items-center gap-10 px-6 py-8 lg:grid-cols-2 lg:px-16">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />

        <section className="relative z-10">
          <span className="rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
            Featured Project
          </span>

          <h1 className="mt-8 max-w-2xl text-5xl font-extrabold leading-tight md:text-6xl">
            Ticket Management{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            A web platform to create, assign, prioritize and track support
            tickets from one operational workspace.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Create and manage tickets",
              "Assign agents and priorities",
              "Track status changes",
              "Add comments and history",
              "Visual dashboard for operations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-400 text-sm text-violet-400">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/login"
              className="rounded-xl bg-violet-600 px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-700"
            >
              View Project ↗
            </Link>

            <a
              href="#"
              className="rounded-xl border border-white/20 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Code
            </a>
          </div>
        </section>

        <section className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-md animate-[float_5s_ease-in-out_infinite] rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-violet-950/50 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-900">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
                    Ticket
                  </p>
                  <h3 className="text-2xl font-extrabold">#1024</h3>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                  High priority
                </span>
              </div>

              <div className="space-y-4">
                <TicketRow label="Status" value="In Progress" />
                <TicketRow label="Assigned to" value="Support Agent" />
                <TicketRow label="Category" value="Technical Support" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <MiniStat value="24" label="Open" />
                <MiniStat value="12" label="Active" />
                <MiniStat value="08" label="Closed" />
              </div>
            </div>

            <div className="absolute -left-6 top-10 rounded-2xl bg-violet-600 p-4 shadow-lg shadow-violet-600/40">
              ✅
            </div>

            <div className="absolute -right-5 bottom-16 rounded-2xl bg-fuchsia-600 p-4 shadow-lg shadow-fuchsia-600/40">
              🔔
            </div>

            <div className="absolute right-8 -top-6 rounded-2xl bg-indigo-600 p-4 shadow-lg shadow-indigo-600/40">
              📊
            </div>
          </div>
        </section>
      </main>

      <footer className="hidden border-t border-white/10 px-16 py-4 lg:block">
        <div className="grid grid-cols-4 gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <FooterItem title="Create tickets" text="Fast and simple flow." />
          <FooterItem title="Assign agents" text="Organize team work." />
          <FooterItem title="Track progress" text="Monitor every status." />
          <FooterItem title="Close tasks" text="Resolve with control." />
        </div>
      </footer>
    </div>
  );
};

const TicketRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
      <span className="text-sm font-medium text-slate-500">{label}</span>
      <span className="text-sm font-bold text-slate-900">{value}</span>
    </div>
  );
};

const MiniStat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="rounded-xl bg-slate-100 p-3 text-center">
      <p className="text-lg font-extrabold text-slate-900">{value}</p>
      <p className="text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
};

const FooterItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-400">{text}</p>
    </div>
  );
};

export default HomePage;