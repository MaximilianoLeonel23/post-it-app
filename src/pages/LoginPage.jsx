import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login.jpg";
import Logo from "../components/Logo";

const LoginPage = () => {
  const { signIn, isAuthenticated } = useAuth();
  const { register, handleSubmit, errors: loginErrors } = useForm();
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
    <div className="flex sm:flex-row flex-col-reverse gap-y-4 bg-neutral-100 pb-24 lg:pb-0">
      <section className="w-full sm:w-1/2 flex justify-center items-center">
        <div className="container flex flex-col gap-y-8 w-full">
          <Logo />
          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-2xl sm:text-3xl text-neutral-800">
              Log in to your account
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base">
              Welcome back!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 text-neutral-500"
          >
            <div className="flex flex-col gap-y-2 ">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="input-form"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                className="input-form"
                id="password"
              />
            </div>
            {loginErrors &&
              loginErrors.slice(0, 1).map((error, i) => (
                <p
                  key={i}
                  className="text-primary-red text-sm border border-primary-red px-2 py-px"
                >
                  {error}
                </p>
              ))}
            <div className="flex items-center flex-wrap gap-4">
              <button className="btn-solid">Sign In</button>
              <p className="text-neutral-600 text-sm">
                Don't have an account?
                <Link
                  to="/register"
                  className="transition hover:text-primary-purple px-1"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <div className="w-full sm:w-1/2 h-[10rem] sm:h-screen p-4">
        <img
          src={loginImage}
          className="w-full h-full object-cover rounded"
          alt="Login image"
        />
      </div>
    </div>
  );
};

export default LoginPage;
