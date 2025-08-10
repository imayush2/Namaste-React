import React from "react";

const RestaurantCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Restaurant Image */}
      <img
        src="https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill"
        alt="Meghana Foods"
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">Meghana Foods</h1>
        <p className="text-sm text-gray-600">Biryani, North Indian, Chinese</p>

        {/* Ratings & Other Info */}
        <div className="flex items-center justify-between mt-3">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            ⭐ 4.5
          </span> 
          <span className="text-sm text-gray-500">₹300 for two</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
