import { Link } from 'react-router-dom'

import useForm from '../../hooks/useForm';

import './login.css'
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

// 1 -> Make input fields controllable
// values - key will be the name in the input tag
// In useForm we give default values 

const LoginKeys = {
    Email: 'email',
    Password: 'password'
}

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);

    // values --> an object key(name): value
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginKeys.Email]: '',
        [LoginKeys.Password]: ''
    });


    return (
        <div className="loginContainer">
            <div className="login">
                <div className="loginTitle"><span>Login Form</span></div>
                <form className='loginForm' onSubmit={onSubmit}>
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input
                            type="email"
                            id='email'
                            name={LoginKeys.Email}
                            placeholder="Email"
                            onChange={onChange}
                            value={values[LoginKeys.Email]}
                        />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            id='password' 
                            name={LoginKeys.Password}
                            placeholder="Password"
                            onChange={onChange}
                            value={values[LoginKeys.Password]}
                        />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="signup">Not a member? <Link to={Path.Register}>Signup in</Link></div>
                </form>
            </div>
        </div>
    );
}