import axios from "axios";
const API_URL = "http://localhost:3001/tickets";

export const getTickets = async () => {
  const response = await axios.get("http://localhost:3001/tickets");
  return response.data;
};
export const getTicketById = async (id:string) => {
  const response = await axios.get(`http://localhost:3001/tickets/${id}`);
  return response.data;
};
export const createTicket = async (ticketData: {
  title: string;
  description: string;
  priority: string;
  assignee: string;
  created: string;
}) => {
  const response = await axios.post("http://localhost:3001/tickets", ticketData);
  return response.data;
};

export const deleteTicket = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete ticket");
  }
};