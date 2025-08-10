import React from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="px-4 py-6">
      {/* Search Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
