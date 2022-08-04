import React, { useState } from 'react';

function Signup() {
    return (
        <div>
            <h2>THIS IS THE SIGNUP PAGE</h2>

            <form>
            {/* <form onSubmit={form_Handler}> */}
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input 
                        placeholder='email'
                        name='email'
                        type='email'
                        id='email'
                        // onChange={formChange_Handler}
                    />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                    <input 
                        placeholder='Password'
                        name='password'
                        type='password'
                        id='password'
                        // onChange={formChange_Handler}
                    />
                </div>
                {/* {error ? (
                    <div>
                        <p>Incorrect Login Information</p>
                    </div>
                ): null} */}
                <div>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;