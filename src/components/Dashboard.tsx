import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useNavigate } from "react-router-dom"; // ✅ Import router navigation

const summaryData = [
  { id: 1, label: "ORDER RECEIVED", value: 5390, icon: "🛒" },
  { id: 2, label: "TOTAL CHARGES", value: 2390, icon: "💳" },
  { id: 3, label: "TOTAL EARNINGS", value: 2947, icon: "💰" },
];

const salesData = {
  Month: [
    { name: "1st", sales: 2000 },
    { name: "2nd", sales: 4000 },
    { name: "3rd", sales: 3000 },
    { name: "4th", sales: 5000 },
    { name: "5th", sales: 4000 },
    { name: "6th", sales: 6000 },
    { name: "7th", sales: 7000 },
  ],
  Week: [
    { name: "Mon", sales: 1500 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 2500 },
    { name: "Thu", sales: 3500 },
    { name: "Fri", sales: 4000 },
    { name: "Sat", sales: 4500 },
    { name: "Sun", sales: 5000 },
  ],
  Day: [
    { name: "0-4h", sales: 500 },
    { name: "4-8h", sales: 1000 },
    { name: "8-12h", sales: 1500 },
    { name: "12-16h", sales: 2000 },
    { name: "16-20h", sales: 2500 },
    { name: "20-24h", sales: 3000 },
  ],
};

const orderStatusData = [
  { name: "Orders", value: 60, color: "#3b82f6" }, // Blue
  { name: "Pending", value: 40, color: "#f97316" }, // Orange
  { name: "Delivered", value: 20, color: "#10b981" }, // Green
];

const productTableData = [
  {
    product: "Leisure Suit Casual",
    customer: "Msadour Rahman",
    location: "Australia",
    quantity: 2,
    status: "Paid",
  },
  {
    product: "Cotton Fleece Casual",
    customer: "Subash Chandra",
    location: "Indian, Kolkata",
    quantity: 2,
    status: "Pending",
  },
  {
    product: "Formal Slim Fit Casual",
    customer: "Razz Dass",
    location: "United States",
    quantity: 2,
    status: "Paid",
  },
  {
    product: "Velvet Patchwork Casual",
    customer: "Saidur Rahman Munna",
    location: "San Francisco",
    quantity: 2,
    status: "Failed",
  },
];

const statusColors = {
  Paid: "bg-blue-500",
  Pending: "bg-yellow-500",
  Failed: "bg-red-500",
};

type SalesPeriod = "Month" | "Week" | "Day";

const Dashboard = () => {
  const [selectedSalesPeriod, setSelectedSalesPeriod] =
    useState<SalesPeriod>("Day");

  const navigate = useNavigate(); // ✅ hook to navigate

  const handleLogout = () => {
    // Optionally clear auth/session storage here
    navigate("/"); // Redirect to landing page
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow relative">
      {/* ✅ Logout button */}
      <div className="absolute top-4 right-4">
        {/* <button
          onClick={handleLogout}
          className="px-4 py-2 bg-green-200 text-white rounded-lg shadow hover:bg-blue-800 transition"
        >
          Logout
        </button> */}
      </div>

      {/* Summary Cards */}
      <div className="flex space-x-6 mb-6 mt-10">
        {summaryData.map(({ id, label, value, icon }) => (
          <div
            key={id}
            className="flex-1 bg-gray-50 p-4 rounded-lg shadow flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-semibold">${value}</p>
            </div>
            <div className="text-3xl">{icon}</div>
          </div>
        ))}
      </div>

      {/* Sales Line Chart */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-6">
        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-4 mb-4">
            {["Month", "Week", "Day"].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedSalesPeriod(period as SalesPeriod)}
                className={`px-3 py-1 rounded ${
                  selectedSalesPeriod === period
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600"
                } border border-blue-500`}
              >
                {period}
              </button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData[selectedSalesPeriod]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Order Status Pie Chart */}
        <div className="w-64 bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Order Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={orderStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around mt-4">
            {orderStatusData.map(({ name, color }) => (
              <div key={name} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Sales Table */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Table Format / User Data</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 px-3">Product</th>
              <th className="py-2 px-3">Customer</th>
              <th className="py-2 px-3">Location</th>
              <th className="py-2 px-3">Quantity</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {productTableData.map(
              ({ product, customer, location, quantity, status }, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-2 px-3">{product}</td>
                  <td className="py-2 px-3">{customer}</td>
                  <td className="py-2 px-3">{location}</td>
                  <td className="py-2 px-3">{quantity}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`text-white px-2 py-1 rounded ${
                        statusColors[status as keyof typeof statusColors] ||
                        "bg-gray-400"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button className="text-gray-500 hover:text-gray-700">
                      ⋮
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
