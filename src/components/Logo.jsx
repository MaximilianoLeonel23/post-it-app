import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className={`w-6 h-6 bg-primary-purple`}></div>
      <h4 className="text-xl font-extrabold text-neutral-800">Post It App</h4>
    </Link>
  );
};

export default Logo;
