import React from 'react';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/signup">
                        Signup
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;