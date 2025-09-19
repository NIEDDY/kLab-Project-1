import React, { useState } from "react";
import { Search, User, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-6 shadow-md bg-white-800">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold cursor-pointer">
        kapee.
      </Link>

      {/* Search Bar */}
      <div className="hidden md:flex w-1/2">
        <input
          type="text"
          placeholder="Search for products, categories, brands..."
          className="flex-1 border border-gray-300 px-3 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 px-4 rounded-r hover:bg-blue-600 transition">
          <Search className="text-white" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Sign In & Sign Up */}
        <div className="flex items-center space-x-3">
          <div
            className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition"
            onClick={() => setShowSignIn(true)}
          >
            <User />
            <span className="text-sm font-semibold">Sign In</span>
          </div>
          <button
            className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded hover:bg-blue-600 transition"
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </button>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition">
          <ShoppingCart />
          <span className="text-sm">$0.00</span>
        </div>
      </div>

      {/* ---------- Sign In Modal ---------- */}
      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setShowSignIn(false)}
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-600">Sign In</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 transition">
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ---------- Sign Up Modal ---------- */}
      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setShowSignUp(false)}
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4 text-blue-600">Sign Up</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-black py-2 rounded font-semibold hover:bg-blue-600 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
