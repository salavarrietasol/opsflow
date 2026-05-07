import type { ReactNode } from "react";
import AppSidebar from "./AppSidebar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="min-h-screen lg:flex">
        <AppSidebar />
        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
