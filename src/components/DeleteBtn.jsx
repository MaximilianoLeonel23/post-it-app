import React from "react";
import deleteIcon from "../assets/icons/delete.svg";
import { usePostIt } from "../contexts/postitContext";

const DeleteBtn = ({ post }) => {
  const { deletePostit } = usePostIt();
  const handleDelete = async () => {
    console.log(post._id);
    const deletedPostit = await deletePostit(post._id);
    console.log(deletedPostit);
  };

  return (
    <button className="text-neutral-800" onClick={handleDelete}>
      <img src={deleteIcon} />
    </button>
  );
};

export default DeleteBtn;
