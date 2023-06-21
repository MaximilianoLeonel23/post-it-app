import React, { useEffect, useState } from "react";
import { usePostIt } from "../contexts/postitContext";

const Favourites = () => {
  const { postits } = usePostIt();
  const [favouritePostits, setFavouritePostits] = useState();

  useEffect(() => {
    const favourites = postits.filter((post) => post.favourite);
    setFavouritePostits(favourites);
  }, [postits]);

  return (
    <p>
      <span className="font-extrabold text-2xl pr-2">
        {favouritePostits ? favouritePostits.length : 0}
      </span>
      Favourites
    </p>
  );
};

export default Favourites;
