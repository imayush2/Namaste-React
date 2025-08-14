import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName , setRestaurantName] = useState("");

//   const extractItems = (cards) => {
//     let items = [];
//     cards.forEach((card) => {
//       if (card?.card?.card?.itemCards) {
//         card.card.card.itemCards.forEach((i) => items.push(i.card.info));
//       }
//       if (card?.groupedCard?.cardGroupMap) {
//         const nestedCards = Object.values(
//           card.groupedCard.cardGroupMap
//         ).flatMap((group) => group?.cards || []);
//         items.push(...extractItems(nestedCards));
//       }
//     });
//     return items;
//   };

const extractSections = (cards) => {
    let sections = [];
  
    cards.forEach((cardWrapper) => {
      const card = cardWrapper?.card?.card;
  
      // If there are categories, treat each category as its own section
      if (card?.categories) {
        card.categories.forEach((category) => {
          sections.push({
            title: category.title,
            items: category.itemCards || []
          });
        });
      }
  
      // If there are direct itemCards, treat this card as a section
      if (card?.itemCards) {
        sections.push({
          title: card.title || "Untitled Section",
          items: card.itemCards
        });
      }
    });

    console.log(sections);
  
    return sections;
  };
  

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&submitAction=ENTER`
      );
      const jsonData = await response.json();
      const allCards = jsonData?.data?.cards || [];
      console.log(allCards);
      const restaurantName = jsonData?.data?.cards[0]?.card?.card.text;
      setRestaurantName(restaurantName);

      const items = extractSections(allCards[5].groupedCard.cardGroupMap.REGULAR.cards);
      setMenuItems(items);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return {menuItems , restaurantName };
};

export default useRestaurantMenu;
