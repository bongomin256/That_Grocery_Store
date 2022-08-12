import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import auth from "../../utils/auth";
// import { ADD_ORDER } from "../../utils/mutations";
import { ADD_PRODUCT } from "../../utils/mutations";

import background_JPG from "../../images/ADD_PRODUCTS.jpg";

function AddProducts() {
  const [formState, setFormState] = useState({});
  const [addProduct] = useMutation(ADD_PRODUCT);

  const form_Handler = async (event) => {
    event.preventDefault();
    const mutationResponse = await addProduct({
      variables: {
        name: formState.name,
        expirationDate: formState.expirationDate,
        price: parseInt(12),
        quantity: parseInt(formState.quantity),
        description: "test description",
        user: "62f59673390910e8beacc0fa",
        category: "62f59673390910e8beacc0f5",
      },
    });
    const token = mutationResponse.data.addUser.token;
    auth.login(token);
  };

  const formChange_Handler = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div
      className="d-flex row justify-content-center align-items-center div_img"
      style={{
        backgroundImage: `url(${background_JPG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="col-md-4 form_container container no_padding">
        <div className="form_title">SELLING GREENS! (Produce)</div>
        <hr></hr>
        <form
          onSubmit={form_Handler}
          className="container row align-items-center"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="product" className="form_label">
                Produce Name:{" "}
              </label>
              <input
                placeholder="Product Name"
                name="product"
                type="product"
                id="product"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate" className="form_label">
                Produce Expiration Date:{" "}
              </label>

              <input
                placeholder="Expiration Date"
                name="expirationDate"
                type="expirationDate"
                id="expirationDate"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity" className="form_label">
                Quantity to Sell:{" "}
              </label>

              <input
                placeholder="quantity"
                name="quantity"
                type="quantity"
                id="quantity"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity" className="form_label">
                Price:{" "}
              </label>

              <input
                placeholder="price"
                name="price"
                type="price"
                id="price"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>

            <div className="row justify-content-center m-2">
              <button type="submit" className="fakeButton_2">
                SELL MY GREEN!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
