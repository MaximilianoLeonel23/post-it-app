import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import menu from "../assets/icons/menu.svg";
const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className="flex justify-between items-center py-4 container">
        <Logo />
        {isAuthenticated ? (
          <>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <Link className="hidden sm:block" to="/" onClick={logout}>
              <button className="btn-solid">Logout</button>
            </Link>
            <button
              className="block sm:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img src={menu} />
            </button>
          </>
        ) : (
          <div className="hidden sm:flex items-center gap-x-4">
            <Link to="/register">
              <button className="btn-ghost">Get started</button>
            </Link>
            <Link to="/login">
              <button className="btn-solid">Login</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
