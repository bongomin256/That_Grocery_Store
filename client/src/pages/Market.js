import React from "react";
import { Link } from "react-router-dom";
import OnSale from '../components/OnSale';

const Market = () => {
  return (
    <div className="row ">
      <hr></hr>
      <hr></hr>
        <h1 className="row justify-content-center form_title">PRODUCE ON SALE</h1>
      <hr></hr>
      <hr></hr>
        <OnSale/>
    </div>
  );
};

export default Market;
