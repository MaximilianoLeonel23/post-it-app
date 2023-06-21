import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import login from "../assets/images/login.png";
const LoginPage = () => {
  const { signIn, isAuthenticated } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await signIn(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex bg-neutral-100">
      <section className="w-2/3 flex justify-center items-center">
        <div className="flex flex-col gap-y-8 w-full px-32">
          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-3xl text-neutral-800">
              Log in to your account
            </h2>
            <p className="text-neutral-500 text-base">Welcome back!</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-6 text-neutral-500"
          >
            <div className="flex flex-col gap-y-2 ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email")}
                className="input-form"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password")}
                className="input-form"
                id="password"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <button className="btn-solid">Sign In</button>
              <p className="text-neutral-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="transition hover:text-primary-purple"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <div className="w-1/3 h-screen p-4">
        <img src={login} className="w-full h-full object-cover rounded" />
      </div>
    </div>
  );
};

export default LoginPage;
