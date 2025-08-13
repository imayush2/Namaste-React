import React from "react";
import {CDN_URL} from "../utils/constants.js";

const RestaurantCard = ({restaurant}) => {
    
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Restaurant Image */}
      <img
        src={CDN_URL + restaurant.info.cloudinaryImageId }
        alt="Meghana Foods"
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">{restaurant.info.name}</h1>
        <p className="text-sm text-gray-600">{restaurant.info.cuisines.join(",")}</p>

        {/* Ratings & Other Info */}
        <div className="flex items-center justify-between mt-3">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            ⭐ {restaurant.info.avgRating}
          </span> 
          <span className="text-sm text-gray-500">{restaurant.info.costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
