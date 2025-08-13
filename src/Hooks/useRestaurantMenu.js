import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);

  const extractItems = (cards) => {
    let items = [];
    cards.forEach((card) => {
      if (card?.card?.card?.itemCards) {
        card.card.card.itemCards.forEach((i) => items.push(i.card.info));
      }
      if (card?.groupedCard?.cardGroupMap) {
        const nestedCards = Object.values(
          card.groupedCard.cardGroupMap
        ).flatMap((group) => group?.cards || []);
        items.push(...extractItems(nestedCards));
      }
    });
    return items;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&submitAction=ENTER`
      );
      const jsonData = await response.json();
      const allCards = jsonData?.data?.cards || [];
      const items = extractItems(allCards);
      setMenuItems(items);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return menuItems;
};

export default useRestaurantMenu;
