import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../images/VEGGIES_IMG.jpg";

const Home = () => {
  return (
    <div className="row justify-content-around align-items-center">
      {/* <div className="d-flex flex-wrap banner_padding col-11">
        <Link to="/addproducts">
          <div className="fakeButton">SELL YOUR GREENS</div>
        </Link>

        <Link to="/login">
          <div className="fakeButton">BUY YOUR GREENS</div>
        </Link>

        <Link to="/market">
          <div className="fakeButton">VIEW ALL GREENS</div>
        </Link>
      </div> */}
      <br></br>
      <div
        className="d-flex row justify-content-center align-items-center div_img col-12"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Link to="/market" className="row align-items-center justify-content-around">
          <div className="row custom_text col-5 form_title div_hover">
            VIEW ALL GREENS (Seattle)
          </div>
        </Link>
        <div className="row justify-content-center custom_text col-8">
          <h3 className="col-3">WHO WE ARE:</h3>
          <p className="col-9">
            Hello! We are <span className="text_2">"THAT GROCERY STORE"</span>, a local Co-op that lets connects farmers to consumers! 
            <br></br>            <br></br>
            Are you a farmer? Or a hobbyist trying to sell your radishes? We have the platform for you!
            <br></br>            <br></br>
            Are you a consumer? Or just looking for some local lettuce? We have the platform for you!
          </p>
          
        </div>
        <div className="row justify-content-center custom_text col-8">
          <h3 className="col-3">OUR GOAL:</h3>
          <p className="col-9">
            We want to connect local growers to local consumers and spread the love of growing greens around! Everyone wants to eat healthily, and some even want to support their local neighborhood!
            <br></br>            <br></br>
            We wish to grow this website into a service that allows us to do exactly that!
          </p>
        </div>
        <div className="row justify-content-center custom_text col-8">
          <h3 className="col-3">OUR FUTURE GROWTH:</h3>
          <p className="col-9">
            While we are limited to the City of Seattle and the surrounding areas, we hope to <span className="text_3">grow</span> into a sprawling metropolis with <span className="text_3">roots</span> spreading
            to multiple outlying cities. We intend to continue building a safe platform for many more farmers to connect them to consumers like you. We're always on the hunt for more farmers, and would love for you 
            to try us out and sell your goods with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
