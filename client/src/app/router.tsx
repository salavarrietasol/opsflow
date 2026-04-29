import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import TicketsPage from "../features/tickets/pages/TicketsPage";
import CreateTicketPage from "../features/tickets/pages/CreateTicketPage";
import TicketDetailPage from "../features/tickets/pages/TicketDetailPage";
import EditTicketPage from "../features/tickets/pages/EditTicketPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/tickets",
    element: <TicketsPage />,
  },
  {
    path: "/tickets/create",
    element: <CreateTicketPage />,
  },
  {
    path: "/tickets/:id",
    element: <TicketDetailPage />,
  },
  {
    path: "/tickets/:id/edit",
    element: <EditTicketPage />,
  },
], {
  basename: import.meta.env.BASE_URL,
});
