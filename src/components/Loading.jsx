import React from "react";

const Loading = () => {
  return (
    <div className="px-4 py-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gray-300"></div>

            {/* Text placeholders */}
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Loading;
