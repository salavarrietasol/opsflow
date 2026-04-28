import axios from "axios";

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

