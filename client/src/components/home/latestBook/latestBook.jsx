import { Link } from "react-router-dom";


export default function LatestBook(book) {

    return (
        <div className='bookLi'>
            <h3>{book.title}</h3>
            <p>Type: {book.type} </p>
            <p className='img'><img className="bookLiImg" src={book.img} alt={book.title} /></p>
            <Link to={`/books/details/${book._id}`} className='button'>Details</Link>
        </div>
    )
}