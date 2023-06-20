import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-4 items-center">
        <li>
          <Link to="/postits">Post Its</Link>
        </li>
        <li>
          <Link to="/add-postit">Agregar</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
