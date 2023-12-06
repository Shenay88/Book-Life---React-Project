import { Link } from "react-router-dom";

export default function Home() {

    return (

        <section className='dashboard'>

            <div className='booksList'>

                <div className='bookLi'>
                    <h3>Charlie and the Chocolate Factory </h3>
                    <p>Type: Fiction </p>
                    <p className='img'><img className="bookLiImg" src='https://m.media-amazon.com/images/I/51hxjozCakL._SY445_SX342_.jpg' alt='Charlie and the Chocolate Factory' /></p>
                    <Link to='#' className='button'>Details</Link>
                </div>

            </div>

        </section>

    )
}