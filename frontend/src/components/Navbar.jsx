import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { login, setLogin } = useContext(AppContext);
  return (
    <div className="nav">
      <div className="nav_right">
        <ul>
          <NavLink to="/">
            <li>Todo</li>
          </NavLink>
        </ul>
      </div>
      <div className="nav_left">
        <ul>
          {!login && (
            <NavLink to="/login">
              <li>Login</li>
            </NavLink>
          )}

          {!login && (
            <NavLink to="/signup">
              <li>SignUp</li>
            </NavLink>
          )}

          {login && (
            <NavLink to="/dashboard">
              <li>Dashboard</li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
