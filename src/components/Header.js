import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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
        {user?.email && <span>Welcome {user.email}</span>}
        {user?.email ? (
          <button onClick={handleLogOut} className="btn btn-sm">
            Sign Out
          </button>
        ) : (
          <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
