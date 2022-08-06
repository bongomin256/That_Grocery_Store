import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import auth from "../utils/auth";
import { ADD_ORDER } from "../utils/mutations";

function Signup() {
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
    <div>
      <h2>THIS IS THE SIGNUP PAGE</h2>

      <form onSubmit={form_Handler}>
        <div>
          <label htmlFor="email">First Name:</label>
          <input
            placeholder="John"
            name="f_name"
            type="f_name"
            id="f_name"
            onChange={formChange_Handler}
          />
        </div>
        <div>
          <label htmlFor="password">Last Name:</label>
          <input
            placeholder="Doe"
            name="l_name"
            type="l_name"
            id="l_name"
            onChange={formChange_Handler}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            placeholder="email"
            name="email"
            type="email"
            id="email"
            onChange={formChange_Handler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="password"
            onChange={formChange_Handler}
          />
        </div>
        <div>
          <label htmlFor="gardenAddress">Garden Address:</label>
          <input
            placeholder="1234 Jane Doe Lane"
            name="gardenAddress"
            type="gardenAddress"
            id="gardenAddress"
            onChange={formChange_Handler}
          />
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
