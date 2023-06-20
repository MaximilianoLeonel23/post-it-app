import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
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
    <div className="flex bg-neutral-50">
      <section className="w-2/3">
        <header>
          <div className="container mx-auto flex  py-4">
            <Logo />
          </div>
        </header>
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-2">
              <label>Email</label>
              <input type="email" {...register("email")} />
            </div>
            <div className="flex flex-col gap-y-2">
              <label>Password</label>
              <input type="password" {...register("password")} />
            </div>
            <div className="flex items-center gap-x-4">
              <button className="btn-solid">Ingresar</button>
              <p>
                No tienes una cuenta? <Link to="/register">Registrate</Link>
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
