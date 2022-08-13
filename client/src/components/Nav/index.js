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
              <Link to="/addproducts">SELL YOUR GREENS</Link>
            </li>
            <li className="navItem">
              <Link to="/market">BUY YOUR GREENS</Link>
            </li>
            {/* <li className="navItem">
              <Link to="/profile">View Profile</Link>
            </li> */}
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
            <Link to="/login">SELL YOUR GREENS</Link>
          </li>
          <li className="navItem">
            <Link to="/login">BUY YOUR GREENS</Link>
          </li>
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

          <Link to="/">        <h1 className="hover_1 form_title_bg">THAT GROCERY STORE        </h1></Link>

        <nav>{showNavigation()}</nav>
      </header>
  );
}

export default Nav;
