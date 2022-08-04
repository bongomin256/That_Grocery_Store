import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import auth from '../utils/auth';
// import { LOGIN } from '../utils/mutations';

function Signup() {

    const [formState, setFormState] = useState({email: '', password: ''});

    const formChange_Handler = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>THIS IS THE SIGNUP PAGE</h2>

            <form>
            {/* <form onSubmit={form_Handler}> */}
                <div>
                    <label htmlFor="email">First Name:</label>
                    <input 
                        placeholder='John'
                        name='f_name'
                        type='f_name'
                        id='f_name'
                        onChange={formChange_Handler}
                    />
                </div>
                <div>
                <label htmlFor="password">Last Name:</label>
                    <input 
                        placeholder='Doe'
                        name='l_name'
                        type='l_name'
                        id='l_name'
                        onChange={formChange_Handler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input 
                        placeholder='email'
                        name='email'
                        type='email'
                        id='email'
                        onChange={formChange_Handler}
                    />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                    <input 
                        placeholder='Password'
                        name='password'
                        type='password'
                        id='password'
                        onChange={formChange_Handler}
                    />
                </div>
                <div>
                <label htmlFor="c_password">Password:</label>
                    <input 
                        placeholder='Confirm Password...'
                        name='c_password'
                        type='password'
                        id='c_password'
                        onChange={formChange_Handler}
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