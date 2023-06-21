import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../assets/icons/edit.svg";
const EditBtn = ({ post }) => {
  return (
    <Link to={`/postits/${post._id}`} className="flex items-center">
      <button>
        <img src={editIcon} />
      </button>
    </Link>
  );
};

export default EditBtn;
