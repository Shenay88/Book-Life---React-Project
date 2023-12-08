import { useContext } from 'react';
import './register.css'
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Path from '../../paths';


const RegisterKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    Repass: 'repass'
}


export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterKeys.Username]: '',
        [RegisterKeys.Email]: '',
        [RegisterKeys.Password]: '',
    });


    return (
        <div className="registerContainer">
            <div className="register">
                <div className="registerTitle"><span>Register Form</span></div>
                <form onSubmit={onSubmit} className='registerForm'>
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input
                            type="username"
                            id='username'
                            name={RegisterKeys.Username}
                            placeholder="Username"
                            onChange={onChange}
                            value={values[RegisterKeys.Username]}
                        />
                    </div>
                    <div className="row">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            id='email'
                            name={RegisterKeys.Email}
                            placeholder="example@gmail.com"
                            onChange={onChange}
                            value={values[RegisterKeys.Email]}
                        />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            id='password'
                            name={RegisterKeys.Password}
                            placeholder="Password"
                            onChange={onChange}
                            value={values[RegisterKeys.Password]}
                        />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Register" />
                    </div>
                    <div className="signIn">Already have an account? <Link to={Path.Login}>Sign in</Link></div>
                </form>
            </div>
        </div>
    );
}