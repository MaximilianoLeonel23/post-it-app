import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";

const FavouritesCount = () => {
  const { postits } = usePostIt();
  const [favouritePostits, setFavouritePostits] = useState();

  useEffect(() => {
    const favourites = postits.filter((post) => post.favourite);
    setFavouritePostits(favourites);
  }, [postits]);

  return (
    <p className="px-4 sm:px-6 py-1 sm:py-2 rounded bg-neutral-100 text-neutral-800 text-sm sm:text-base">
      <span className="font-extrabold text-xl sm:text-2xl pr-2">
        {favouritePostits ? favouritePostits.length : 0}
      </span>
      Favourites
    </p>
  );
};

export default FavouritesCount;
