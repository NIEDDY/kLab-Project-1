// src/pages/Reports.tsx
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample sales data
const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3200 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 3000 },
  { month: "May", sales: 5200 },
  { month: "Jun", sales: 6100 },
];

// Sample top products data
const topProducts = [
  { name: "Laptop", sales: 150 },
  { name: "Printer", sales: 90 },
  { name: "Wireless Mouse", sales: 200 },
  { name: "Monitor", sales: 120 },
];

const Reports: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Reports & Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-gray-500">Total Sales</h2>
          <p className="text-2xl font-bold">$18,600</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-2xl font-bold">345</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-gray-500">Total Customers</h2>
          <p className="text-2xl font-bold">128</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart - Sales Over Time */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Top Products */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topProducts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Report ID</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">RPT-001</td>
              <td className="p-3">Sales Summary</td>
              <td className="p-3">2025-09-12</td>
              <td className="p-3 text-green-600">Completed</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">RPT-002</td>
              <td className="p-3">Inventory Check</td>
              <td className="p-3">2025-09-10</td>
              <td className="p-3 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
