import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

const tickets = [
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

app.get("/", (_req, res) => {
  res.json({ message: "OpsFlow API is running" });
});

app.get("/tickets", (_req, res) => {
  res.json(tickets);
});

app.get("/tickets/:id", (req, res) => {
  const { id } = req.params;
  const ticket = tickets.find((ticket) => ticket.id === id);
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  res.json(ticket);
});

app.post("/tickets", (req, res) => {
  const { title, description, priority, assignee, created } = req.body;
  const newTicket = {
    id: `OPS-${Date.now()}`,
    title, 
    description,
    status: "OPEN",
    priority,
    assignee,
    created
  };
  tickets.push(newTicket);

  console.log("Nuevo ticket creado:", newTicket);
  console.log("Tickets actuales:", tickets);
  
  res.status(201).json(newTicket);
  
});

export default app;