import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import postits from "../assets/icons/navbar/postits.svg";
import logoutIcon from "../assets/icons/navbar/logout.svg";
import add from "../assets/icons/navbar/add.svg";
import profile from "../assets/icons/navbar/profile.svg";

const Navbar = ({ showMenu, setShowMenu }) => {
  const { logout } = useAuth();
  return (
    <>
      <nav className="hidden sm:flex">
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
      <nav
        className={`${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } absolute top-24 left-0 w-full sm:hidden z-30 transition duration-300`}
      >
        <ul className="flex flex-col items-start gap-y-2 pt-4 pb-8 px-4 mx-4 text-neutral-800 text-sm bg-primary-purple border border-neutral-800">
          <li
            className="flex items-center gap-x-4 py-2  text-sm w-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={postits} />
            <Link to="/postits" className="w-full">
              Post Its
            </Link>
          </li>
          <li
            className="flex items-center gap-x-4 py-2  text-sm w-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={add} />

            <Link to="/add-postit" className="w-full">
              Add
            </Link>
          </li>
          <li
            className="flex items-center gap-x-4 py-2  text-sm w-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={profile} />

            <Link to="/profile" className="w-full">
              Profile
            </Link>
          </li>
          <li
            className="flex items-center gap-x-4 py-2  text-sm w-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={logoutIcon} />

            <Link to="/" onClick={logout} className="w-full">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
