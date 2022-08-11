import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import auth from "../../utils/auth";
// import { ADD_ORDER } from "../../utils/mutations";
import { ADD_PRODUCT } from "../../utils/mutations";

function AddProducts() {
  const [formState, setFormState] = useState({});
  const [addProduct] = useMutation(ADD_PRODUCT);

  const form_Handler = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await addProduct({
      variables: {
        name: formState.name,
        expirationDate: formState.expirationDate,
        price: formState.price,
        quantity: formState.quantity,
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
    <div className="d-flex row justify-content-center align-items-center">
      <div className="col-md-4 form_container container">
        <div className="form_title">SELLING GREENS</div>
        <hr></hr>
        <form
          onSubmit={form_Handler}
          className="container row align-items-center"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="product">PRODUCT NAME:</label>
              <input
                placeholder="Product Name"
                name="name"
                type="product"
                id="product"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expirationDate">EXPIRATION DATE:</label>
              <input
                placeholder="Expiration Date"
                name="expirationDate"
                type="expirationDate"
                id="expirationDate"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">QUANTITY:</label>
              <input
                placeholder="quantity"
                name="quantity"
                type="quantity"
                id="quantity"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">PRICE:</label>
              <input
                placeholder="price"
                name="price"
                type="price"
                id="price"
                className="form-control"
                onChange={formChange_Handler}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <button type="submit" className="fakeButton_2">
              POST GREEN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
