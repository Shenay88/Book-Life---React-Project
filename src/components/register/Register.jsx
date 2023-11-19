import './register.css'


export default function Register() {

    return (
        <div className="container">
        <div className="wrapper">
            <div className="title"><span>Register Form</span></div>
            <form action="#">
                <div className="row">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="row">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="row">
                    <i className="fas fa-lock"></i>
                    <input type="repass" placeholder="Repeat password"/>
                </div>
                <div className="row button">
                    <input type="submit" value="Register"/>
                </div>
                <div className="signin-link">Already have an account? <a href="#">Signup now</a></div>
            </form>
        </div>
    </div>
    );
}