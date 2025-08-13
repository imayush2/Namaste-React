import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-green-600">FoodieHub</span>!  
          We connect you to the best restaurants in your city, bringing delicious meals
          right to your doorstep. Whether you’re craving a quick snack or a gourmet feast,
          we’ve got you covered.
        </p>

        {/* Mission Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our mission is simple — make food ordering fast, reliable, and fun.  
          We work with top-rated restaurants and ensure a smooth ordering
          experience with real-time tracking and secure payment options.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>🍔 Wide variety of cuisines and restaurants.</li>
          <li>⚡ Fast delivery with live order tracking.</li>
          <li>💳 Easy and secure payment options.</li>
          <li>🌱 Eco-friendly packaging initiatives.</li>
        </ul>

        {/* Closing Message */}
        <p className="text-gray-600 mt-8">
          Thank you for choosing <span className="font-semibold text-green-600">FoodieHub</span>.  
          We’re here to make every meal a memorable one. 🍽️
        </p>
      </div>
    </div>
  );
};

export default About;
