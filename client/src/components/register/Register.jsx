import { useContext } from 'react';
import './register.css'
import AuthContext from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';


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
        [RegisterKeys.Repass]: '',
    });


    return (
        <div className="registerContainer">
            <div className="register">
                <div className="registerTitle"><span>Register Form</span></div>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input
                            type="username"
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
                            name={RegisterKeys.Email}
                            placeholder="Email"
                            onChange={onChange}
                            value={values[RegisterKeys.Email]}
                        />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            name={RegisterKeys.Password}
                            placeholder="Password"
                            onChange={onChange}
                            value={values[RegisterKeys.Password]}
                        />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            name={RegisterKeys.Repass}
                            placeholder="Repeat password"
                            onChange={onChange}
                            value={values[RegisterKeys.Repass]}
                        />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Register" />
                    </div>
                    <div className="signin">Already have an account? <a href="#">Signup now</a></div>
                </form>
            </div>
        </div>
    );
}