import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const form_Handler = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        gardenAddress: formState.gardenAddress,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={formChange_Handler}
          />
        </div>
        <div>
          <label htmlFor="password">Last Name:</label>
          <input
            placeholder="Doe"
            name="lastName"
            type="lastName"
            id="lastName"
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
