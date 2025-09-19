
import React from "react";
import { useNavigate } from "react-router-dom";

interface DashboardNavbarProps {
  toggleSidebar?: () => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session / auth if needed
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to landing page
  };

  return (
    <nav className="w-full bg-white shadow px-4 py-3 flex items-center justify-between">
      {/* Left - Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-700 hover:text-black"
      >
        ☰
      </button>

      {/* Center */}
      <h1 className="font-bold text-lg">Admin Dashboard</h1>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Hello, Admin</span>
        <button
          onClick={handleLogout}
          className="bg-cyan-500 text-white px-3 py-1 rounded hover:bg-red-300 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
