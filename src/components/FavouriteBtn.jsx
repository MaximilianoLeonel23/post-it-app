import React, { useState, useRef } from "react";
import { usePostIt } from "../contexts/postitContext";
import starFill from "../assets/icons/star-fill.svg";
import starEmpty from "../assets/icons/star-empty.svg";

const FavouriteBtn = ({ post }) => {
  const { updatePostit } = usePostIt();
  const [isFavourite, setIsFavourite] = useState(post.favourite);
  const isFavouriteRef = useRef(isFavourite);

  const handleFavourite = async () => {
    setIsFavourite((prevFavourite) => !prevFavourite);
    isFavouriteRef.current = !isFavouriteRef.current;

    const newPost = { ...post, favourite: isFavouriteRef.current };
    await updatePostit(post._id, newPost);
  };
  return (
    <button
      className={isFavourite ? "text-purple-500" : "text-neutral-800"}
      onClick={handleFavourite}
    >
      <img src={isFavourite ? starFill : starEmpty} />
    </button>
  );
};

export default FavouriteBtn;
