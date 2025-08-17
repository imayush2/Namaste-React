import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Loading2 from "./Loading2";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import MenuAccordion from "./MenuAccordian";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const { menuItems, restaurantName } = useRestaurantMenu(resId);

  console.log("menuItems", menuItems);

  if (menuItems.length === 0) return <Loading2 />;
  return (
    <>
      <MenuAccordion sections={menuItems} restaurantName={restaurantName} />
    </>
  );
};

export default RestaurantsMenu;
