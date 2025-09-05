import React from "react";
import { Search, User, ShoppingCart } from "lucide-react"; // Install lucide-react

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 shadow-md">
      <h1 className="text-2xl font-bold">kapee.</h1>
      <div className="flex w-1/2">
        <input
          type="text"
          placeholder="Search for products, categories, brands..."
          className="flex-1 border border-gray-300 px-3 py-2 rounded-l"
        />
        <button className="bg-yellow-400 px-4 rounded-r">
          <Search />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-1 cursor-pointer">
          <User />
          <span className="text-sm">Hello, <span className="font-semibold">Sign In</span></span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <ShoppingCart />
          <span className="text-sm">$0.00</span>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;