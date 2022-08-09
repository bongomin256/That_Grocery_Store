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
    <div className='d-flex row justify-content-center align-items-center'>
      <h2>THIS IS THE SIGNUP PAGE</h2>

      <div className='col-md-6 form_container container'>
        <form onSubmit={form_Handler} className='container row align-items-center'>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="email">First Name:</label>
              <input
                placeholder="John"
                name="firstName"
                type="firstName"
                id="firstName"
                className='form-control'
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="password">Last Name:</label>
              <input
                placeholder="Doe"
                name="lastName"
                type="lastName"
                id="lastName"
                className='form-control'
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="email">Email Address:</label>
              <input
                placeholder="email"
                name="email"
                type="email"
                id="email"
                className='form-control'
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="password">Password:</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                id="password"
                className='form-control'
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor="gardenAddress">Garden Address:</label>
              <input
                placeholder="1234 Jane Doe Lane"
                name="gardenAddress"
                type="gardenAddress"
                id="gardenAddress"
                className='form-control'
                onChange={formChange_Handler}
              />
            </div>
          </div>
          <div className='row justify-content-center'>
            <button type="submit" className='fakeButton_2'>SUBMIT</button>
          </div>
        </form>
        </div>
    </div>
  );
}

export default Signup;
