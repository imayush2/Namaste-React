import React from "react";
import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-75 flex flex-col">
      {/* Restaurant Image with shadow at bottom */}
      <div className="relative w-full h-40">
        <img
          src={CDN_URL + restaurant.info.cloudinaryImageId}
          alt={restaurant.info.name}
          className="w-full h-40 object-cover"
        />
        {/* Darker Shadow Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-black/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 truncate">
            {restaurant.info.name}
          </h1>
          <p className="text-sm text-gray-600 truncate">
            {restaurant.info.cuisines.join(", ")}
          </p>
        </div>

        {/* Ratings & Other Info */}
        <div className="flex items-center justify-between mt-3">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            ⭐ {restaurant.info.avgRating}
          </span>
          <span className="text-sm text-gray-500">
            {restaurant.info.costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
