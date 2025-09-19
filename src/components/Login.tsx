import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[20rem] p-6 border border-gray-300 rounded">
        <input type="email" placeholder="Username" className="p-2 border border-gray-300 rounded" required />
        <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
      </form>
      <span className="mt-4">If you do not have an account, <a href="/register" className="text-blue-500">Register</a></span>
    </div>
  );
};

export default LoginForm;