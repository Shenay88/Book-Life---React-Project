import { useParams } from 'react-router-dom'
import './details.css'
import { useEffect, useState } from 'react'
import { getBookById } from '../../services/bookService'

export default function Details() {
    const [book, setBook] = useState({});

    const {bookId} = useParams()

    useEffect(() => {
       getBookById(bookId)
       .then(bookById => setBook(bookById))
        
    },[bookId]);

    return (
        <section className="detailsPage">
            <div className="wrapper">
                <div className="bookImage">
                    <img src={book.img} alt={book.title}/>
                </div>
                <div className="bookInfo">
                    <div className="bookDetails">

                        <h1 className='detailsTitle'>{book.title}</h1>
                        <h3>Type: {book.type}</h3>
                        <h4>Year: {book.year}</h4>
                        <p><span>Description:</span> {book.description}</p>
                    </div>

                    {/* <!-- Only for registered user and creator of the album--> */}
                    <div className="actionBtn">
                        <a href="#" className="edit">Edit</a>
                        <a href="#" className="remove">Delete</a>
                    </div>
                </div>
            </div>
        </section>
    )
}