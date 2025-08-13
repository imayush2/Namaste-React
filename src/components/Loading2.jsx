import React from "react";

const Loading2 = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start border border-gray-200 rounded-lg overflow-hidden animate-pulse"
        >
          {/* Image placeholder */}
          <div className="bg-gray-300 w-full md:w-48 h-48 rounded-t-lg md:rounded-l-lg md:rounded-tr-none" />

          {/* Text placeholder */}
          <div className="flex-1 p-4 space-y-3 w-full">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading2;
