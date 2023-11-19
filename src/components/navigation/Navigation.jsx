import style from './Navigation.module.css'


export default function Navigation() {

    return (
        
        <nav>
            <input type="checkbox" className={style.checkbox} id="check"></input>
            <label htmlFor="check" className={style.checkbtn}>
                <i className="fas fa-bars"></i>
            </label>
            <label className={style.title}>Book Life</label>
            <ul>
                <li><a className={style.home} href="#">Home</a></li>
                <li><a className={style.login} href="#">Login</a></li>
                <li><a className={style.register} href="#">Register</a></li>
                <li><a className={style.myBooks} href="#">My Books</a></li>
                <li><a className={style.addBook} href="#">Add Book</a></li>
                <li><a className={style.logout} href="#">Logout</a></li>
            </ul>
        </nav>
    
    )
}