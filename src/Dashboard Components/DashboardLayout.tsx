import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navbar (Dashboard specific) */}
      <DashboardNavbar toggleSidebar={toggleSidebar} />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <DashboardSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content (shifted right on desktop) */}
        <main className="flex-1 p-6 overflow-y-auto md:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
