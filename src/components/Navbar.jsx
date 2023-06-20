import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-12 items-center text-neutral-800">
        <li>
          <Link to="/postits">Post Its</Link>
        </li>
        <li>
          <Link to="/add-postit">Add</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
