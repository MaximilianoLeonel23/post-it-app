import React from "react";
import Total from "../components/Total";
import FavouritesCount from "../components/FavouritesCount";
import TagsCount from "../components/TagsCount";

const Statistics = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-lg font-medium text-neutral-800">Statistics</h4>
      <div className="flex items-center gap-x-4 text-neutral-800">
        <Total />
        <FavouritesCount />
        <TagsCount />
      </div>
    </div>
  );
};

export default Statistics;
