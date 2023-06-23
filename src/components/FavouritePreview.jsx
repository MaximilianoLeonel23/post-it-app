import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";
import Fav from "./Fav";

const FavouritePreview = () => {
  const { postits } = usePostIt();
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const favourites = postits.filter((post) => post.favourite);
    setFavourites(favourites);
  }, [postits]);
  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-base sm:text-lg font-medium text-neutral-800">
        Favourites
      </h4>
      {favourites < 1 ? (
        <div className="border border-neutral-200 rounded text-center py-2 sm:py-4 text-neutral-500">
          There is no favourites now
        </div>
      ) : (
        <div className="flex flex-col gap-y-2">
          {favourites.slice(0, 5).map((fav, i) => (
            <Fav fav={fav} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePreview;
