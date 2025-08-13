import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Loading from "./Loading";
import { apiData } from "../utils/apiData";
import { Link } from "react-router";

const Body = () => {
  console.log(
    apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  );
  const restaurantList =
    apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const [filterList, setFilterList] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  if (restaurantList.length == 0) {
    return <Loading />;
  }

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <div className="px-4 py-6">
      {/* Search Section */}
      <div className="flex justify-center mb-6 gap-10">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value.toLowerCase());
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg "
          onClick={() => {
            setFilterList(
              restaurantList.filter((res) => {
                return res?.info?.avgRating > 4.0;
              })
            );
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterList
          .filter((item) => {
            return item?.info?.name?.toLowerCase().includes(searchText);
          })
          .map((res) => {
            return (
              <Link key={res?.info?.id} to={"restaurants/" + res?.info?.id}>
                <RestaurantCard restaurant={res} />
              </Link>
            );
          })}
      </div>
    </div> 
  );
};

export default Body;
