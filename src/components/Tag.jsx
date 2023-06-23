import React from "react";

const Tag = ({ tag }) => {
  return (
    <div className="bg-neutral-200 text-neutral-500 text-xs sm:text-sm rounded px-3 sm:px-4 py-1">
      {tag}
    </div>
  );
};

export default Tag;
