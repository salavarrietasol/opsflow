export const tickets = [
  {
    id: "OPS-4915",
    title: "Database Migration for APAC Region",
    status: "IN PROGRESS",
    priority: "Urgent",
    assignee: "Sarah Chen",
    created: "Oct 12, 2023",
  },
  {
    id: "OPS-4819",
    title: "Security Patch v4.2 Deployment",
    status: "OPEN",
    priority: "High",
    assignee: "Marcus K.",
    created: "Oct 11, 2023",
  },
  {
    id: "OPS-4792",
    title: "Webhook Latency Investigation",
    status: "RESOLVED",
    priority: "Medium",
    assignee: "Alex Rivera",
    created: "Oct 09, 2023",
  },
  {
    id: "OPS-4788",
    title: "UI Refresh Dashboard Widgets",
    status: "CLOSED",
    priority: "Low",
    assignee: "Lila Thorne",
    created: "Oct 05, 2023",
  },
];
export const ticketDetail = {
  id: "OPS-4915",
  title: "Database Migration for APAC Region",
  status: "IN PROGRESS",
  priority: "Urgent",
  assignee: "Sarah Chen",
  reporter: "Marcus K.",
  created: "Oct 12, 2023",
  dueDate: "Oct 18, 2023",
  description:
    "This ticket covers the database migration workflow for the APAC region. The operation includes schema alignment, replication validation, and service continuity checks before the final cutover window.",
  comments: [
    {
      author: "Sarah Chen",
      time: "2h ago",
      content:
        "Initial migration checks completed. Waiting on final replication report.",
    },
    {
      author: "Alex Rivera",
      time: "5h ago",
      content:
        "Monitoring latency during sync. No major anomalies so far.",
    },
    {
      author: "Marcus K.",
      time: "1d ago",
      content:
        "Ticket created to track regional migration and release coordination.",
    },
  ],
  activity: [
    {
      title: "Status changed to In Progress",
      time: "Today · 09:24 AM",
    },
    {
      title: "Assignee updated to Sarah Chen",
      time: "Today · 08:10 AM",
    },
    {
      title: "Ticket created",
      time: "Yesterday · 05:42 PM",
    },
  ],
};