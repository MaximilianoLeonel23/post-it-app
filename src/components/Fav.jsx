import React from "react";

const Fav = ({ fav }) => {
  return (
    <div className="flex items-center py-2 gap-2 sm:gap-4 border-b text-neutral-500 text-xs sm:text-sm">
      <div className={`h-4 w-4 bg-${fav.color}`}></div>
      <p className="">{fav.content.slice(0, 50)}...</p>
    </div>
  );
};

export default Fav;
