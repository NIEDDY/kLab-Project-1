import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <h2 className="font-bold text-lg mb-4">Dashboard Menu</h2>

      {/* Close button (only visible on mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden mb-4 text-gray-600 hover:text-gray-900"
      >
        ✖ Close
      </button>

      {/* Main */}
      <div className="mb-6">
        <h3 className="font-semibold text-md mb-2">Main</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">📊</span>Dashboard / Overview
            </Link>
          </li>
        </ul>
      </div>

      {/* Sales */}
      <div className="mb-6">
        <h3 className="font-semibold text-md mb-2">Sales</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard/orders" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">📦</span>Orders
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reports" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">📈</span>Reports / Analytics
            </Link>
          </li>
        </ul>
      </div>

      {/* Products */}
      <div className="mb-6">
        <h3 className="font-semibold text-md mb-2">Products</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard/products" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">🛍️</span>Products
            </Link>
          </li>
          <li>
            <Link to="/dashboard/categories" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">📂</span>Categories
            </Link>
          </li>
          <li>
            <Link to="/dashboard/inventory" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">📦</span>Inventory
            </Link>
          </li>
        </ul>
      </div>

      {/* Customers */}
      <div className="mb-6">
        <h3 className="font-semibold text-md mb-2">Customers</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard/customers" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">👥</span>Customers / Users
            </Link>
          </li>
        </ul>
      </div>

      {/* Administration */}
      <div className="mb-6">
        <h3 className="font-semibold text-md mb-2">Administration</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard/user-management" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">👤</span>User Management
            </Link>
          </li>

          {/* <li>
            <Link to="/dashboard/logs" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">📋</span>System Logs / Activity
            </Link>
          </li> */}

          <li>
            <Link to="/dashboard/integrations" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">🔗</span>Integrations
            </Link>
          </li>
        </ul>
      </div>

      {/* Settings */}
      <div className="mb-6">
        <h3 className="font-semibold text-md mb-2">Settings</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard/settings" className="hover:text-blue-500 flex items-center">
              <span className="mr-2">⚙️</span>General Preferences
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
