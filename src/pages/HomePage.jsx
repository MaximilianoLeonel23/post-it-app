import React from "react";
import { useAuth } from "../contexts/authContext";
import homeImg from "../assets/images/home-img.svg";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center pt-4 gap-y-8">
      <section className="flex flex-col items-center gap-y-8 text-center w-2/3 ">
        <h1 className="text-5xl text-neutral-800 font-medium leading-normal">
          <span className="text-primary-red">Organize</span> your routine with
          post
          <span className="bg-primary-green px-2 mx-3">its</span> everywhere
        </h1>
        <p className="text-sm text-neutral-800 font-light leading-relaxed">
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
      <img src={homeImg} className="px-16 w-full" />
    </div>
  );
};

export default HomePage;
