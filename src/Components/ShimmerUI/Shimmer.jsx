import React from "react";
import "./shimmer.css";

// Shimmer.jsx
const Shimmer = () => {
  const placeholders = Array.from({ length: 12 });

  return (
    <div className="px-8 py-10 ">
      <div className="flex justify-between items-center  gap-6 px-10 py-10 mb-10 rounded-2xl border bg-white shadow-md">
        <div className="flex-1 h-12 rounded-full  bg-gray-300 animate-pulse " />

        <div className="w-96 h-12 rounded-full bg-gray-300 animate-pulse" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-32">
        {placeholders.map((_, index) => (
          <div
            key={index}
            className="w-[360px] h-[360px] rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden"
          >
            <div className="h-52 bg-gray-300 animate-pulse" />
          <div className=" mt-10">
            <div className="flex items-baseline p-4 space-y-3 ">
              <div className="h-4 bg-gray-300 rounded animate-pulse" />
              <div className="h-3 bg-gray-300 rounded w-4/5 animate-pulse" />
            </div>

            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-10 bg-gray-400 rounded animate-pulse" />
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
