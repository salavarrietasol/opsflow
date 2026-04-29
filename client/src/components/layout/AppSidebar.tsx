import { NavLink, Link } from "react-router-dom";

const linkBaseClass = "block w-full rounded-xl px-4 py-3 text-left text-sm transition";

const getNavClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBaseClass} ${
    isActive
      ? "bg-violet-50 font-semibold text-violet-700"
      : "text-slate-600 hover:bg-slate-50"
    }`
;

const AppSidebar = () => {
  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <Link 
        to = "/"
        className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-500/30">
              ⚡
            </div>
          <span className="text-xl font-bold">OpsFlow</span>
        </div>
      </Link>

      <nav className="flex-1 space-y-2 px-4 py-6">
        <NavLink to="/dashboard" className={getNavClass}>
          Overview
        </NavLink>

        <NavLink to="/tickets" className={getNavClass}>
          Tickets
        </NavLink>

        <button className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
          Inventory
        </button>

        <button className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
          Reports
        </button>

        <button className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
          Settings
        </button>
      </nav>

      <div className="p-4">
        <button className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700">
          + New Workflow
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;