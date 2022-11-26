import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Auth App
        </Link>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to={"/login"} className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        <Link to={"/register"} className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        {user?.displayName && <span>Welcome {user.displayName}</span>}
      </div>
    </div>
  );
};

export default Header;
