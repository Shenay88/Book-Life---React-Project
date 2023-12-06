import { useContext } from 'react'
import { Link } from 'react-router-dom'

import style from './Navigation.module.css'

import AuthContext from '../../contexts/authContext'
import Path from '../../paths'


export default function Navigation() {

    const { isUser } = useContext(AuthContext);

    return (

        <nav className={style.mainNav}>
            <input type="checkbox" className={style.checkbox} id="check"></input>
            <label htmlFor="check" className={style.checkbtn}>
                <i className="fas fa-bars"></i>
            </label>
            <Link className={style.title} to={Path.Home}>Book Life</Link>
            <ul>
                <li><Link className={style.home} to={Path.Catalog}>Catalog</Link></li>
                {isUser && (
                    <>
                        <li><Link className={style.myBooks} to="/myBook">My Books</Link></li>
                        <li><Link className={style.addBook} to={Path.AddBook}>Add Book</Link></li>
                        <li><Link className={style.logout} to={Path.Logout}>Logout</Link></li>
                    </>
                )}

                {!isUser && (
                    <>
                        <li><Link className={style.login} to={Path.Login}>Login</Link></li>
                        <li><Link className={style.register} to={Path.Register}>Register</Link></li>
                    </>
                )}
            </ul>
        </nav>

    )
}