import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex justify-center py-20">
      <section className="flex flex-col items-center gap-y-8 text-center w-2/3 ">
        <h1 className="text-5xl text-neutral-800 font-medium leading-normal">
          <span className="title-after">Organiza</span> tu vida con los mejores
          post
          <span className="bg-primary-green px-2 mx-2">its</span>
        </h1>
        <p className="text-sm text-neutral-800 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
          interdum mauris. Vivamus blandit sed ex quis porttitor. Mauris
          lobortis ex porta venenatis rutrum. Cras bibendum dolor at nisl
          vehicula, vitae accumsan sem tempor. Quisque rhoncus ligula eget nisl
          hendrerit scelerisque.
        </p>

        {!isAuthenticated && (
          <Link to="/register">
            <button className="btn-solid">Regístrate</button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default HomePage;
