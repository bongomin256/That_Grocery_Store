import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
      <div className="flex-row banner_1 align-self-center banner_padding">
        <Link to="/addproducts">
          <h3 className="fakeButton">SELL YOUR GREENS</h3>
        </Link>

        <Link to="/login">
          <h3 className="fakeButton">BUY YOUR GREENS</h3>
        </Link>

        <Link to="/market">
          <h3 className="fakeButton">VIEW ALL GREENS</h3>
        </Link>
      </div>
      <div className="row justify-content-center">
        <h3 className= 'col-3'>WHO WE ARE:</h3>
        <p className="col-5">
        HELLO! We are 'That Grocery Store', a local Co-op that lets growers
        (like you) buy and sell local produce!
      </p>
      </div>
    </div>
  );
};

export default Home;
