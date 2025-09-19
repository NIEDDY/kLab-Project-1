import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[20rem] p-6 border border-gray-300 rounded">
        <input type="text" placeholder="Full Name" className="p-2 border border-gray-300 rounded" required />
        <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" required />
        <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
