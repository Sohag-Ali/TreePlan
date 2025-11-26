import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';

const Contact = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thanks for reaching out! 🌿 We will get back to you soon.");
  };
    return (
        
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 px-6 ">
      {/* Heading */}
          <div><Navbar></Navbar></div>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
          Contact <span className="text-green-600">GreenNest</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Have a question about plants, orders, or anything else? We’re here to
          help you grow your green space.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[2fr,1.3fr]">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-3xl p-8 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-700 mb-4">
            🌱 Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg border border-emerald-200 
                           focus:outline-none focus:ring-2 focus:ring-emerald-300 
                           focus:border-emerald-500 bg-green-50/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-emerald-200 
                           focus:outline-none focus:ring-2 focus:ring-emerald-300 
                           focus:border-emerald-500 bg-green-50/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-2 rounded-lg border border-emerald-200 
                           focus:outline-none focus:ring-2 focus:ring-emerald-300 
                           focus:border-emerald-500 bg-green-50/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-lg border border-emerald-200 
                           focus:outline-none focus:ring-2 focus:ring-emerald-300 
                           focus:border-emerald-500 bg-green-50/40 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 
                         text-white font-semibold py-2.5 rounded-lg shadow-md 
                         transition"
            >
              ✉️ Send Message
            </button>
          </form>
        </div>

        {/* Info Card */}
        <div className="bg-white shadow-lg rounded-3xl p-8 border border-emerald-100">
          <h2 className="text-xl font-semibold text-emerald-700 mb-4">
            🌿 Contact Information
          </h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p>support@greennest.com</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p>+880 1700-000000</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p>
                GreenNest Plant Studio,<br />
                Dhaka, Bangladesh
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Working Hours</p>
              <p>Sat - Thu: 10:00 AM – 8:00 PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 text-sm mb-2">
              You can also reach us on social media:
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700">
                Instagram
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700">
                Facebook
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700">
                Pinterest
              </span>
            </div>
          </div>
        </div>
      </div>
       <ToastContainer position="top-center" />
    </div>
  );
};

export default Contact;