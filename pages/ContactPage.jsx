import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We’ll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 md:p-12 lg:p-16">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        Have questions, feedback, or partnership inquiries? We’d love to hear from you. Reach out to the{" "}
        <span className="font-semibold text-blue-600">TurfMate</span> team anytime.
      </p>

      {/* Contact Form + Info Side-by-Side */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Booking Issue"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-6 w-full">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">📍 Address</h4>
                <p className="text-gray-600">123 Sports Avenue, Cityville, ST 12345</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">📞 Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">✉️ Email</h4>
                <p className="text-gray-600">support@turfmate.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">🕒 Hours</h4>
                <p className="text-gray-600">
                  Mon-Fri: 9AM - 6PM <br />
                  Sat: 10AM - 4PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              {[
                { name: "Facebook", icon: "f", color: "bg-blue-600" },
                { name: "Twitter", icon: "t", color: "bg-blue-400" },
                { name: "Instagram", icon: "i", color: "bg-pink-600" },
                { name: "LinkedIn", icon: "in", color: "bg-blue-700" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com/turfmate`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;