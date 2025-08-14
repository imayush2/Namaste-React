import React from "react";

const Grocery = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Online Grocery Store</h1>

      <p className="max-w-2xl text-gray-700 text-center mb-4">
        Welcome to our <span className="font-semibold text-green-600">Grocery Store</span>!  
        Here, you can find fresh fruits, vegetables, snacks, beverages, and daily essentials—all in one place.
      </p>

      <p className="max-w-2xl text-gray-700 text-center mb-4">
        Shop from the comfort of your home and get your groceries delivered fast and safely.
      </p>

      <p className="max-w-2xl text-gray-700 text-center">
        Enjoy easy browsing, secure payments, and timely delivery. 🛒
      </p>
    </div>
  );
};

export default Grocery;
