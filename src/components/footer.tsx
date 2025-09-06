import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-900 py-8 px-6"> {/* ✅ Dark Blue Background */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
        
        {/* Information Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">INFORMATION</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-400">Store Location</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-yellow-400">Latest News</a></li>
            <li><a href="#" className="hover:text-yellow-400">Our Sitemap</a></li>
          </ul>
        </div>

        {/* Our Service Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">OUR SERVICE</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms of Sale</a></li>
            <li><a href="#" className="hover:text-yellow-400">Customer Service</a></li>
            <li><a href="#" className="hover:text-yellow-400">Payments</a></li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">MY ACCOUNT</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-400">My Account</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Shop</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Cart</a></li>
            <li><a href="#" className="hover:text-yellow-400">My Wishlist</a></li>
            <li><a href="#" className="hover:text-yellow-400">Tracking Order</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">NEWSLETTER</h3>
          <p className="mb-4">Subscribe to our mailing list to get the new updates!</p>
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 p-2 w-full mb-2 rounded text-black"
          />
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-6 text-gray-300">
        <p>Lorim ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>576-245-2478 | info@kapee.com</p>
        <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-4 text-white">
        <a href="#" className="hover:text-yellow-400">Facebook</a>
        <a href="#" className="hover:text-yellow-400">Twitter</a>
        <a href="#" className="hover:text-yellow-400">Instagram</a>
        <a href="#" className="hover:text-yellow-400">LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;
