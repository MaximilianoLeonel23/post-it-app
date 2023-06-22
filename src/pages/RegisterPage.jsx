import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
import login from "../assets/images/register.jpg";
import Logo from "../components/Logo";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { signUp, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await signUp(data);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);
  return (
    <div className="flex bg-neutral-100">
      <section className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-y-8 w-full px-32">
          <Logo />
          <div className="flex flex-col gap-y-2">
            <h2 className="font-medium text-3xl text-neutral-800">
              Get started
            </h2>
            <p className="text-neutral-500 text-base">
              Create your account now
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 text-neutral-500"
          >
            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                {...register("fullname")}
                className="input-form"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Email</label>
              <input
                type="email"
                {...register("email")}
                className="input-form"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Password</label>
              <input
                type="password"
                {...register("password")}
                className="input-form"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Username</label>
              <input
                type="text"
                {...register("username")}
                className="input-form"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <button className="btn-solid">Sign Up</button>
              <p className="text-neutral-600 text-sm">
                Have an account?{" "}
                <Link
                  to="/login"
                  className="transition hover:text-primary-purple"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <div className="w-1/2 h-screen p-4">
        <img src={login} className="w-full h-full object-cover rounded" />
      </div>
    </div>
  );
};

export default RegisterPage;
