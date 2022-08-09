import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import auth from "../../utils/auth";
import { ADD_ORDER } from "../../utils/mutations";

function AddProducts() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addOrder] = useMutation(ADD_ORDER);

  const form_Handler = async (event) => {
    event.preventDefault();
    const mutationResponse = await addOrder({
      variables: {
        name: formState.name,
        expirationDate: formState.expirationDate,
        price: formState.price,
        quantity: formState.quantity,
      },
    });
    // const token = mutationResponse.data.addUser.token;
    // auth.login(token);
  };

  const formChange_Handler = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="col-md-6 form_container container">
      <h2 className="d-flex row justify-content-center align-items-center">
        SELLING GREENS:
      </h2>
      <form onSubmit={form_Handler}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="product">PRODUCT NAME: </label>
            <input
              placeholder="Product Name"
              name="product"
              type="product"
              id="product"
              onChange={formChange_Handler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expirationDate">EXPIRATION DATE: </label>
            <input
              placeholder="Expiration Date"
              name="expirationDate"
              type="expirationDate"
              id="expirationDate"
              onChange={formChange_Handler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">QUANTITY: </label>
            <input
              placeholder="quantity"
              name="quantity"
              type="quantity"
              id="quantity"
              onChange={formChange_Handler}
            />
          </div>

          <div className="row justify-content-center m-2">
            <button type="submit">POST GREEN</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
