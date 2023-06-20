import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-neutral-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Logo />
        {isAuthenticated ? (
          <>
            <Navbar />
            <Link to="/" onClick={logout}>
              <button className="btn-solid">Logout</button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <button className="btn-solid">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
