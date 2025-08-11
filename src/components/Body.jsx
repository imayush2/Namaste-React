import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constants";

const Body = () => {
  const [filterList, setFilterList] = useState(restaurantList);

  const handleTopRated = () => {
    setFilterList(
      restaurantList.filter((res) => res?.info?.avgRating > 4.0)
    );
  };

  useEffect(()=>{console.log("useEffect called");},[]);

  return (
    <div className="px-4 py-6">
      {/* Search Section */}
      <div className="flex justify-center mb-6 gap-10">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={handleTopRated}
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterList.map((res) => (
          <RestaurantCard key={res?.info?.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
