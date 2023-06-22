import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-12 items-center text-neutral-800 text-base">
        <li className="nav-link">
          <Link to="/postits">Post Its</Link>
        </li>
        <li className="nav-link">
          <Link to="/add-postit">Add</Link>
        </li>
        <li className="nav-link">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
