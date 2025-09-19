import React from "react";
import image from "../assets/visa.png";

const Footer2: React.FC = () => {
  return (
    <footer className="bg-white border-t py-4 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Left side - copyright */}
      <p className="text-sm text-blue-900">
        © 2025 by <span className="font-medium">PressLayouts</span>. All Rights Reserved.
      </p>

      {/* Right side - payment icons */}
      <div className="flex space-x-3 mt-3 md:mt-0">
        <img src={image} alt="Visa" className="h-6" />
      </div>
    </footer>
  );
};

export default Footer2;
