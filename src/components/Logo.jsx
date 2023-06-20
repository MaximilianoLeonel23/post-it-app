import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h4 className="text-2xl font-extrabold text-neutral-800">Post It App</h4>
    </Link>
  );
};

export default Logo;
