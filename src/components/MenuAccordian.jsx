import { useState } from "react";
import AccordionItem from "./AccordianItem";

const MenuAccordion = ({ sections, restaurantName }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle open/close
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-10 mt-10 text-center">
        {restaurantName}
      </h1>
      {sections.map((section, i) => (
        <AccordionItem
          key={section.title}
          section={section}
          isOpen={openIndex === i}   // pass boolean
          handleToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
};

export default MenuAccordion;
