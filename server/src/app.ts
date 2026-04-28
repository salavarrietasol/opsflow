import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "OpsFlow API is running" });
});

app.get("/tickets", async (_req, res) => {
  const tickets = await prisma.ticket.findMany();
  res.json(tickets);
});

app.get("/tickets/:id", async (req, res) => {
  const { id } = req.params;
  const ticket = await prisma.ticket.findUnique({
    where: { id },
  });

  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  res.json(ticket);
});

app.post("/tickets", async (req, res) => {
  const { title, description, priority, assignee, created } = req.body;
  const newTicket = await prisma.ticket.create ({
    data: {
    id: `OPS-${Date.now()}`,
    title, 
    description,
    status: "OPEN",
    priority,
    assignee,
    created
  },
});

  res.status(201).json(newTicket);
  
});

export default app;