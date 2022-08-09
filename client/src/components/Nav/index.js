import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex-row">
      <h1 className="hover_1">
        <Link to="/">THAT GROCERY STORE</Link>
      </h1>

      <ul className="flex-row">
        <li className="navItem">
          <Link to="/login">Login</Link>
        </li>
        <li className="navItem">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
