import React from 'react';
import { FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00a9a0]">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out to us through any of these channels
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#00a9a0]">
            <div className="text-[#00a9a0] mb-4">
              <FaEnvelope className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Email</h3>
            <p className="text-gray-600 mb-6">For official communications</p>
            <a 
              href="mailto:contact@yourdomain.com" 
              className="text-lg font-medium text-[#00a9a0] hover:text-teal-800 transition-colors"
            >
              contact@yourdomain.com
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#00a9a0]">
            <div className="text-[#00a9a0] mb-4">
              <FaInstagram className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Instagram</h3>
            <p className="text-gray-600 mb-6">Follow us for updates</p>
            <a 
              href="https://instagram.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium text-[#00a9a0] hover:text-teal-800 transition-colors"
            >
              @yourprofile
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#00a9a0]">
            <div className="text-[#00a9a0] mb-4">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Phone</h3>
            <p className="text-gray-600 mb-6">Available during business hours</p>
            <div className="text-lg font-medium text-gray-800">
              +1 (555) 123-4567
            </div>
          </div>
        </div>

        {/* Custom Solutions CTA */}
        <div className="bg-[#00a9a0] text-white rounded-xl p-8 mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Solutions</h2>
          <p className="text-xl mb-6 opacity-90">
            We offer tailored services to meet your specific needs
          </p>
          <button className="px-6 py-3 bg-white text-[#00a9a0] font-semibold rounded-lg hover:bg-opacity-90 transition">
            Request a Quote
          </button>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-[#00a9a0]">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a9a0]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a9a0]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a9a0]"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-[#00a9a0] text-white font-medium rounded-md hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

