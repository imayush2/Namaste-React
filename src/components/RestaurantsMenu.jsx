import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Loading2 from "./Loading2";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import MenuAccordion from "./MenuAccordian";

const RestaurantsMenu = () => {
  // const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();

  const { menuItems, restaurantName } = useRestaurantMenu(resId);

  console.log("menuItems", menuItems);

  if (menuItems.length === 0) return <Loading2 />;
  return (
    <>
      {/* <div className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">{restaurantName}</h1>

      <div className="flex flex-col space-y-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            {item.imageId && (
              <img
                src={CDN_URL + item.imageId}
                alt={item.name}
                className="w-full md:w-48 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              />
            )}
            <div className="p-4 flex-1">
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              {item.category && (
                <p className="text-gray-500 mb-1">
                  <strong>Category:</strong> {item.category}
                </p>
              )}
              {item.description && <p className="mb-2">{item.description}</p>}
              {item.price && (
                <p className="font-bold text-gray-700">Price: ₹{item.price / 100}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div> */}

      <MenuAccordion sections={menuItems} restaurantName={restaurantName} />
    </>
  );
};

export default RestaurantsMenu;
