import React from "react";

const Contact = () => {
  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <p className="mb-6 text-gray-600 text-center">
        Have any questions? We'd love to hear from you. Fill out the form below or reach us directly:
      </p>

      {/* Contact Form */}
      <form className="space-y-6 bg-white shadow-lg rounded-2xl p-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 space-y-3 text-center text-gray-700">
        <p className="text-lg">
          📞 <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="text-lg">
          📧 <strong>Email:</strong> support@example.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
