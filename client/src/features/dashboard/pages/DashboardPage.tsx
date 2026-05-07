import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "../../../components/feedback/RequestState";

type Metric = {
  title: string;
  value: string;
  change: string;
};

const dashboardMetrics: Metric[] = [
  { title: "Active Workflows", value: "1,284", change: "+12.5%" },
  { title: "Throughput", value: "94.2k", change: "stable" },
  { title: "Open Tickets", value: "142", change: "-8.2%" },
  { title: "Avg Response", value: "2.4m", change: "-1.6%" },
];

const ticketTrend = [30, 50, 80, 95, 75, 55, 45];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const recentActivity = [
  "Server cluster alignment deployed successfully",
  "Anomaly detected in workflow latency",
  "New team access granted",
  "Weekly report ready",
];

const DashboardPage = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [activities, setActivities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = useCallback(() => {
    try {
      setLoading(true);
      setError("");
      setMetrics(dashboardMetrics);
      setActivities(recentActivity);
    } catch (error) {
      console.error("Error loading dashboard:", error);
      setError("Unable to load dashboard data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  return (
    <MainLayout>
      <header className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">Dashboard</p>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            System Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Real-time operational health and performance metrics.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:flex md:items-center">
          <Link
            to="/tickets"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-center text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
          >
            View Tickets
          </Link>

          <Link
            to="/tickets/create"
            className="rounded-xl bg-violet-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            Create Ticket
          </Link>
        </div>
      </header>

      {loading && <LoadingState message="Loading dashboard..." />}

      {!loading && error && (
        <ErrorState message={error} actionLabel="Retry" onAction={loadDashboard} />
      )}

      {!loading && !error && metrics.length === 0 && (
        <EmptyState
          title="No dashboard data"
          description="Metrics will appear here once data is available."
        />
      )}

      {!loading && !error && metrics.length > 0 && (
        <>
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5"
              >
                <p className="text-sm text-slate-500">{metric.title}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {metric.value}
                </h3>
                <p className="mt-2 text-sm text-violet-600">{metric.change}</p>
              </div>
            ))}
          </section>

          <section className="mt-5 grid gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 xl:col-span-2">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-slate-900">
                  Tickets Trend
                </h2>
                <p className="text-sm text-slate-500">
                  Volume analysis for the current period
                </p>
              </div>

              <div className="flex h-56 items-end justify-between gap-2 overflow-x-auto rounded-xl bg-slate-50 p-4 sm:h-72 sm:gap-3 sm:p-6">
                {ticketTrend.map((height, index) => (
                  <div
                    key={weekDays[index]}
                    className="flex min-w-9 flex-1 flex-col items-center gap-3"
                  >
                    <div
                      className="w-full max-w-[42px] rounded-t-xl bg-violet-500/80"
                      style={{ height: `${height * 2}px` }}
                    />
                    <span className="text-xs text-slate-400">
                      {weekDays[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  Recent Activity
                </h2>
                <button type="button" className="text-sm text-violet-600">
                  View all
                </button>
              </div>

              {activities.length === 0 ? (
                <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                  No recent activity available.
                </p>
              ) : (
                <div className="space-y-4">
                  {activities.map((item) => (
                    <div key={item} className="rounded-xl bg-slate-50 p-4">
                      <p className="text-sm font-medium text-slate-800">{item}</p>
                      <p className="mt-1 text-xs text-slate-400">2h ago</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </MainLayout>
  );
};

export default DashboardPage;
