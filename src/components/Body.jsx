import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Loading from "./Loading";
import { apiData } from "../utils/apiData";
import { Link } from "react-router";

const Body = () => {
  const OfferRestaurant = WrapperHOC(RestaurantCard);

  console.log(
    apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants[0].info.aggregatedDiscountInfoV2
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
                {res?.info?.aggregatedDiscountInfoV3 ? (
                  <OfferRestaurant restaurant={res} />
                ) : (
                  <RestaurantCard restaurant={res} />
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export const WrapperHOC = (RestaurantCard) => {
  return (props) => {
    const header = props.restaurant.info.aggregatedDiscountInfoV3?.header;
    const subHeader = props.restaurant.info.aggregatedDiscountInfoV3?.subHeader;

    return (
      <div className="relative rounded-lg bg-white h-75 shadow-lg overflow-hidden">
        {/* Offer Badge and Subheader in flex */}
        <div className="absolute top-32 left-2 flex  gap-1 z-20">
          <div className=" text-white  font-bold text-xl">{header}</div>
          <div className=" text-white font-bold  text-xl ">{subHeader}</div>
        </div>

        {/* Restaurant Card filling the parent */}
        <div className="w-full h-full">
          <RestaurantCard {...props} className="w-full h-full" />
        </div>
      </div>
    );
  };
};

export default Body;
