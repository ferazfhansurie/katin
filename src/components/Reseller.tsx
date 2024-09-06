import React, { useState } from 'react';
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import rs1 from '../assets/rs1.png'; // Make sure this path is correct

export const Reseller: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hi Katin Life, I want to be a reseller\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}`);
    window.open(`https://api.whatsapp.com/send?phone=60167447938&text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-['Playfair_Display',serif]">
      <h1 className="text-4xl font-bold text-[#2e4c79] mb-4 text-center">Sign Up Today!</h1>
      <p className="text-center text-gray-700 mb-8">
        Turn your love for cozy bedding into cash! Join our reseller program — no setup, just earnings. Stylish, top-quality bedding for your customers. Ready to start? Join now!
      </p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone *</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Phone"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2e4c79] text-white font-bold py-2 px-4 rounded hover:bg-[#1e3c69] transition-colors"
          >
            Sign Up
          </button>
        </form>
      ) : (
        <p className="text-center text-green-600 font-bold mb-12">
          Thank you for taking the time to complete this form.
        </p>
      )}

      <div className="mb-16">
        <img src={rs1} alt="Why Join Katin Life as a Reseller" className="w-full h-auto" />
      </div>

  
    </div>
  );
};