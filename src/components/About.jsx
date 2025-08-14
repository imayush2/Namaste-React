import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About FoodieHub</h1>
      
      <p className="max-w-2xl text-gray-700 text-center mb-4">
        Welcome to <span className="font-semibold text-green-600">FoodieHub</span>!  
        We connect you to the best restaurants in your city and bring delicious meals 
        straight to your door.
      </p>

      <p className="max-w-2xl text-gray-700 text-center mb-4">
        Our mission is simple: make food ordering fast, reliable, and fun.  
        We partner with top restaurants and ensure a smooth experience with live order tracking 
        and secure payments.
      </p>

      <p className="max-w-2xl text-gray-700 text-center">
        Thank you for choosing <span className="font-semibold text-green-600">FoodieHub</span>.  
        Let’s make every meal a memorable one! 🍽️
      </p>
    </div>
  );
};

export default About;
