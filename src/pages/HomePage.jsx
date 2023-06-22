import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex flex-col items-center py-20 relative">
      <section className="flex flex-col items-center gap-y-8 text-center w-2/3 ">
        <h1 className="text-5xl text-neutral-800 font-medium leading-normal">
          <span className="text-primary-red">Organize</span> your routine with
          post
          <span className="bg-primary-green px-2 mx-3">its</span> everywhere
        </h1>
        <p className="text-sm text-neutral-800 font-light leading-relaxed">
          In today's fast-paced world, staying organized is crucial. And what
          better way to keep track of your tasks and priorities than with
          vibrant post-it notes? Imagine a world where your routine is
          beautifully arranged with these small yet powerful adhesive squares.
          Each color represents a different aspect of your life, whether it's
          work, personal goals, or important reminders.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
