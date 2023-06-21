import React from "react";
import { usePostIt } from "../contexts/postitContext";

const Total = () => {
  const { postits } = usePostIt();
  return (
    <p>
      <span className="font-extrabold text-2xl pr-2">
        {postits ? postits.length : 0}
      </span>
      Total
    </p>
  );
};

export default Total;
