import React from "react";
import { Link } from "react-router-dom";

import homeImg from "../assets/images/home-img.svg";
import { useAuth } from "../contexts/authContext";
const HomePage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="container flex flex-col items-center sm:pt-4 gap-y-8">
      <section className="flex flex-col items-center gap-y-8 text-center sm:w-2/3 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-neutral-800 font-medium leading-normal">
          <span className="text-primary-red">Organize</span> your routine with
          <span className="text-primary-green"> post its</span> everywhere
        </h1>
        <p className="text-xs sm:text-sm text-neutral-800 font-light leading-relaxed">
          In today's fast-paced world,{" "}
          <span className="font-medium">staying organized is crucial</span>. And
          what better way to keep track of your tasks and priorities than with
          <span className="font-medium px-1">vibrant post-it notes?</span>
          Imagine a world where your routine is beautifully arranged with these
          small yet powerful adhesive squares. Each color represents a different
          aspect of your life, whether it's work, personal goals, or important
          reminders.
        </p>
      </section>
      {isAuthenticated ? null : (
        <div className="flex items-center gap-x-4 sm:hidden">
          <Link to="/register">
            <button className="btn-ghost">Get started</button>
          </Link>
          <Link to="/login">
            <button className="btn-solid">Login</button>
          </Link>
        </div>
      )}
      <img src={homeImg} className="container w-full" />
    </div>
  );
};

export default HomePage;
