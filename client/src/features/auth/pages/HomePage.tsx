import { Link } from "react-router-dom";
import SplineScene from "./SplineScene";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070817] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-16">
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

      <main className="relative mx-auto grid min-h-[calc(100vh-210px)] max-w-7xl grid-cols-1 items-center justify-items-center gap-10 px-6 py-8 lg:grid-cols-2 lg:px-16">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-[85%] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-[15%] rounded-full bg-fuchsia-600/20 blur-3xl" />

        <section className="relative z-10 flex max-w-2xl flex-col items-center text-center">
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

          <div className="mt-8 grid max-w-md gap-4 text-left">
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

        </section>

        <section className="relative z-10 flex w-full flex-col items-center justify-center">
          <SplineScene />

          <div className="mt-6 flex w-full max-w-md flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/login"
              className="flex-1 rounded-xl bg-violet-600 px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-700"
            >
              View Project ↗
            </Link>

            <a
              href="https://github.com/salavarrietasol/opsflow.git"
              className="flex-1 rounded-xl border border-white/20 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Code
            </a>
          </div>
        </section>
        
      </main>

      <footer className="mx-auto hidden max-w-7xl border-t border-white/10 px-16 py-4 lg:block">
        <div className="grid grid-cols-4 gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
          <FooterItem title="Create tickets" text="Fast and simple flow." />
          <FooterItem title="Assign agents" text="Organize team work." />
          <FooterItem title="Track progress" text="Monitor every status." />
          <FooterItem title="Close tasks" text="Resolve with control." />
        </div>
      </footer>
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
