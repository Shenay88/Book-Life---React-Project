import { Link } from "react-router-dom";

export default function BookList({
    _id,
    title,
    type,
    img
}) {
    return (
        <div className='bookLi'>
            <h3>{title} </h3>
            <p>Type: {type}</p>
            <p className='img'><img className="bookLiImg" src={img} alt={title} /></p>
            <Link to={`/books/details/${_id}`} className='button'>Details</Link>
        </div>
    )
}