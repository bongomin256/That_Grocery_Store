import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="NAV_COMPONENT" className="flex-row justify-content-between">
      <h1 className="hover_1 col-7 text-center">
        <Link to="/">THAT GROCERY STORE</Link>
      </h1>

      <ul className="flex-row col-3">
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
