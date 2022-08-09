import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import auth from "../../utils/auth";
import { ADD_ORDER } from "../../utils/mutations";

function ProductDetails() {
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

  //   const formChange_Handler = (event) => {
  //     const { name, value } = event.target;
  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     });
  //   };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="product">PRODUCT NAME:</label>
          <input
            placeholder="Product Name"
            name="product"
            type="product"
            id="product"
          />
        </div>
        <div>
          <label htmlFor="expirationDate">EXPIRATION DATE:</label>
          <input
            placeholder="Expiration Date"
            name="expirationDate"
            type="expirationDate"
            id="expirationDate"
          />
        </div>
        <div>
          <label htmlFor="quantity">QUANTITY:</label>
          <input
            placeholder="quantity"
            name="quantity"
            type="quantity"
            id="quantity"
          />
        </div>
      </form>
    </div>
  );
}

export default ProductDetails;
