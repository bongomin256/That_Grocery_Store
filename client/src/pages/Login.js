import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import auth from '../utils/auth';
// import { LOGIN } from '../utils/mutations';

function Login() {

    const [formState, setFormState] = useState({email: '', password: ''});
    // const [login, {error}] = useMutation(LOGIN);

    // const form_Handler = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await login({
    //             variables: {email: formState.email, password: formState.password},
    //         });
    //         const token = response.data.login.token;
    //         auth.login(token);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const formChange_Handler = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>THIS IS THE LOGIN PAGE</h2>

            <form>
            {/* <form onSubmit={form_Handler}> */}
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

export default Login;