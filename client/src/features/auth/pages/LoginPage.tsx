import { Link } from "react-router-dom";

const LoginPage = () => {
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
          <a className="text-violet-400" href="#">Inicio</a>
          <a href="#">Proyectos</a>
          <a href="#">Sobre mí</a>
          <a href="#">Habilidades</a>
          <a href="#">Contacto</a>
        </nav>

        <button className="hidden rounded-xl border border-violet-500 px-5 py-2 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/10 lg:block">
          Descargar CV
        </button>
      </header>

        <main className="grid min-h-[calc(100vh-220px)] grid-cols-1 items-center gap-8 px-6 py-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-16">        <section className="relative hidden lg:block">
          <div className="absolute left-24 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative z-10">
            <span className="rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
              Proyecto destacado
            </span>

            <h1 className="mt-8 max-w-2xl text-6xl font-extrabold leading-tight">
              Plataforma de Gestión de{" "}
              <span className="text-violet-500">Tickets</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Sistema para crear, asignar y dar seguimiento a tickets de soporte
              de manera eficiente.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Gestión de estados y prioridades",
                "Asignación de agentes",
                "Historial y comentarios",
                "Notificaciones en tiempo real",
                "Dashboard con métricas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-400 text-sm text-violet-400">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <Link
                to="/dashboard"
                className="rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-700"
              >
                Ver proyecto ↗
              </Link>

              <a
                href="#"
                className="rounded-xl border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Ver código
              </a>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-white/10 bg-white/95 p-8 text-slate-900 shadow-2xl shadow-violet-950/40 backdrop-blur">
            <div className="mb-8 flex flex-col items-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-2xl shadow-lg shadow-violet-600/40">
                ⚡
              </div>

              <h1 className="text-4xl font-extrabold text-slate-950">
                OpsFlow
              </h1>

              <p className="mt-3 text-sm font-semibold text-slate-500">
                Welcome back
              </p>
              <p className="text-sm text-slate-400">
                Access your operational workspace
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs font-bold text-violet-600 hover:text-violet-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              <Link
                to="/dashboard"
                className="block w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 text-center text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:scale-[1.01] hover:shadow-violet-600/50"
              >
                Sign in
              </Link>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                or continue with
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <span className="text-lg">G</span>
              Google Account
            </button>

            <p className="mt-7 text-center text-sm font-medium text-slate-400">
              Don’t have an account?{" "}
              <span className="font-bold text-violet-600">Request access</span>
            </p>
          </div>
        </section>
      </main>

        <footer className="hidden border-t border-white/10 px-16 py-4 lg:block">        
        <div className="grid grid-cols-4 gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <FooterItem title="Crear tickets" text="De forma rápida y sencilla." />
          <FooterItem title="Asignar y gestionar" text="A miembros del equipo." />
          <FooterItem title="Dar seguimiento" text="En tiempo real." />
          <FooterItem title="Resolver y cerrar" text="Mantén todo bajo control." />
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

export default LoginPage;