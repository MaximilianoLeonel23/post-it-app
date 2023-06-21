import React from "react";
import { usePostIt } from "../contexts/postitContext";

const Total = () => {
  const { postits } = usePostIt();
  return (
    <p className="px-6 py-2 rounded bg-neutral-100 text-neutral-800">
      <span className="font-extrabold text-2xl pr-2">
        {postits ? postits.length : 0}
      </span>
      Total
    </p>
  );
};

export default Total;
