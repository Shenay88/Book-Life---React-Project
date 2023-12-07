import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import { getLatestBooks } from "../../services/bookService";
import LatestBook from "./latestBook/latestBook";
import AuthContext from "../../contexts/authContext";

export default function Home() {

    const [latestBooks, setLatestBooks] = useState([]);
    const { isUser } = useContext(AuthContext);

    console.log(isUser)

    useEffect(() => {

        getLatestBooks()
            .then(result => setLatestBooks(result))

    }, []);

    return (


        <section className='dashboard'>
            <div className='booksList'>

                {latestBooks.map(book => <LatestBook key={book._id} {...book} />)}

            </div>
        </section>


    )
}