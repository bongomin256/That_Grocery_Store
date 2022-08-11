import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

import background_JPG from "../images/LOGIN.jpg";

function Login() {

    const [formState, setFormState] = useState({email: '', password: ''});
    const [login, {error}] = useMutation(LOGIN);

    const form_Handler = async (event) => {
        event.preventDefault();
        try {
            const response = await login({
                variables: {email: formState.email, password: formState.password},
            });
            const token = response.data.login.token;
            auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const formChange_Handler = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='d-flex row justify-content-center align-items-center div_img' style={{
            backgroundImage: `url(${background_JPG})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>

            <div className='col-md-4 form_container container no_padding'>
                <div className='form_title'>LOGIN</div>
                <hr></hr>
                <form onSubmit={form_Handler} className='container row align-items-center'>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label htmlFor="email">Email Address:</label>
                            <input 
                                placeholder='email'
                                name='email'
                                type='email'
                                id='email'
                                className='form-control'
                                onChange={formChange_Handler}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">Password:</label>
                            <input 
                                placeholder='Password'
                                name='password'
                                type='password'
                                id='password'
                                className='form-control'
                                onChange={formChange_Handler}
                            />
                        </div>
                    
                        {error ? (
                            <div>
                                <p>Incorrect Login Information</p>
                            </div>
                        ): null}
                    </div>
                    <div className='row justify-content-center'>
                        <button type='submit' className='fakeButton_2'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;