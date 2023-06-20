import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
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
    <div className="w-1/2">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-2">
          <label>Full Name</label>
          <input type="text" {...register("fullname")} />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Password</label>
          <input type="password" {...register("password")} />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Username</label>
          <input type="text" {...register("username")} />
        </div>
        <div className="flex items-center gap-x-4">
          <button className="btn-solid">Registrarse</button>
          <p>
            Tiene una cuenta? <Link to="/login">Ingresa</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
