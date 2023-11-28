import { Link } from 'react-router-dom'
import style from './Navigation.module.css'


export default function Navigation() {

    return (
        
        <nav className={style.mainNav}>
            <input type="checkbox" className={style.checkbox} id="check"></input>
            <label htmlFor="check" className={style.checkbtn}>
                <i className="fas fa-bars"></i>
            </label>
            <label className={style.title}>Book Life</label>
            <ul>
                <li><Link className={style.home} to="/">Home</Link></li>
                <li><Link className={style.login} to="/login">Login</Link></li>
                <li><Link className={style.register} to="/register">Register</Link></li>
                <li><Link className={style.myBooks} to="/myBook">My Books</Link></li>
                <li><Link className={style.addBook} to="/addBook">Add Book</Link></li>
                <li><Link className={style.logout} to="/logout">Logout</Link></li>
            </ul>
        </nav>
    
    )
}