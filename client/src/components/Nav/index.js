import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <div className="flex-row">
          <ul className="flex-row">
            <li className="navItem">
              <Link to="/profile">View Profile</Link>
            </li>
            <li className="navItem">
              <Link to="" onClick={() => Auth.logout()}>
                logout
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="navItem">
            <Link to="/login">Login</Link>
          </li>
          <li className="navItem">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <header className="flex-row">
      <h1 className="hover_1">
        <Link to="/">THAT GROCERY STORE</Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
