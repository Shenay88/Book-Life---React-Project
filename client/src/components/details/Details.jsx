import { Link, useNavigate, useParams } from 'react-router-dom'
import './details.css'
import { useEffect, useState } from 'react'
import { deleteBook, getBookById, getBooksCount, likeBook } from '../../services/bookService'
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import Path from '../../paths';
// import { sendLike } from '../../services/likeService';

export default function Details() {
    const [book, setBook] = useState({});
    const { id } = useContext(AuthContext);
    const { bookId } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getBookById(bookId)
            .then(bookById => setBook(bookById))

    }, [bookId]);

    const deleteBtnHandler = async () => {

        const hasConfirmed = confirm(`Are you sure you want to delete "${book.title}"`)

        if (hasConfirmed) {

            await deleteBook(bookId);
            navigate(Path.Catalog);
        }
    }

    const likeBtnHandler = async () => {
        try {
            // Check if the user has already liked the book
            if (!book.likes.includes(id)) {
                // If not, update the likes array and the likes count
                const updatedBook = await likeBook(bookId, id);
                setBook(updatedBook);
            } else {
                console.log("User already liked the book");
            }
        } catch (error) {
            console.error("Error liking the book:", error);
        }
    };



    return (
        <section className="detailsPage">
            <div className="wrapper">
                <div className="bookImage">
                    <img src={book.img} alt={book.title} />
                </div>
                <div className="bookInfo">
                    <div className="bookDetails">

                        <h1 className='detailsTitle'>{book.title}</h1>
                        <h3>Type: {book.type}</h3>
                        <h4>Year: {book.year}</h4>
                        <p><span>Description:</span> {book.description}</p>
                    </div>

                    {id === book._ownerId && (
                        <div className="actionBtn">
                            <Link to={`/books/edit/${bookId}`} className="edit">Edit</Link>
                            <button className="remove" onClick={deleteBtnHandler}>Delete</button>
                        </div>
                    )}

                    {id !== book._ownerId && (
                        <div>
                            <button className='likeBtn'  onClick={likeBtnHandler}>
                                <i className="fas fa-heart"></i>
                            </button>
                            <span className='likes'>Likes:</span>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}