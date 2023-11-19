import './login.css'

export default function Login() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="title"><span>Login Form</span></div>
                <form action="#">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Email"  />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"  />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
                </form>
            </div>
        </div>
    );
}