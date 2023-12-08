import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import { getLatestBooks } from "../../services/bookService";
import LatestBook from "./latestBook/latestBook";

import './home.css'

export default function Home() {

    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {

        getLatestBooks()
            .then(result => setLatestBooks(result));

    }, [latestBooks]);

    return (

        <>
            <section className='home'>
                <div className='booksHomeList'>

                    {latestBooks.map(book => <LatestBook key={book._id} {...book} />)}

                </div>
            </section>

            {
                latestBooks.length === 0 && (

                    <p className='noBooks'>No books available!</p>

                )
            }
        </>

    );
}