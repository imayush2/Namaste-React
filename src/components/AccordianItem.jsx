import { CDN_URL } from "../utils/constants";

const AccordionItem = ({ section, isOpen, handleToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-sm overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center py-4 px-4 text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
      >
        <span className="mx-auto">{section.title}</span>
        <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="px-6 py-3 bg-white">
          {section.items?.map((item, idx) => {
            const info = item.card.info;
            return (
              <div
                key={idx}
                className="py-4 border-b border-gray-100 flex justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full border ${
                        info.isVeg
                          ? "bg-green-600 border-green-600"
                          : "bg-red-600 border-red-600"
                      }`}
                    ></span>
                    <p className="font-medium">{info.name}</p>
                  </div>
                  {info.price && (
                    <p className="text-gray-600 text-sm">₹{info.price / 100}</p>
                  )}
                  {info.description && (
                    <p className="text-gray-500 text-sm mt-1">
                      {info.description}
                    </p>
                  )}
                </div>

                {info.imageId && (
                  <div className="relative w-20 h-20">
                    <img
                      src={CDN_URL + info.imageId}
                      alt={info.name}
                      className="w-20 h-20 object-cover rounded-lg shadow-md"
                    />
                    <button
                      className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-green-600 border border-green-600 px-3 py-1 text-xs font-semibold rounded shadow-sm hover:bg-green-50"
                    >
                      ADD
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
