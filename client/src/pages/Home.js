import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex-row">
        <Link to="/login">
          <h3 className="fakeButton">SELL YOUR GREENS</h3>
        </Link>

        <Link to="/login">
          <h3 className="fakeButton">BUY YOUR GREENS</h3>
        </Link>

        <Link to="/market">
          <h3 className="fakeButton">VIEW ALL GREENS</h3>
        </Link>
      </div>
      <h3>WHO WE ARE:</h3>
      <p>
        HELLO! We are 'That Grocery Store', a local Co-op that lets growers
        (like you) buy and sell local produce!
      </p>
    </div>
  );
};

export default Home;
