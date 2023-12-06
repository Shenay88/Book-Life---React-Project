import { useNavigate, useParams } from 'react-router-dom';
import './edit.css';
import { useEffect, useState } from 'react';
import { getBookById, updateBook } from '../../services/bookService';
import Path from '../../paths';

export default function Edit() {

    const navigate = useNavigate()
    const { bookId } = useParams();

    // old values are in book
    // we need values by default, otherwise it will be uncontrolled form
    const [book, setBook] = useState({
        title: '',
        img: '',
        year: '',
        type: '',
        description: ''
    });

    console.log(book)

    useEffect(() => {
        getBookById(bookId)
            .then(bookResult => {
                setBook(bookResult);
            })
    }, [bookId]);


    const editBookSubmitHandler = async (e) => {
        e.preventDefault();

        const bookValues = Object.fromEntries(new FormData(e.currentTarget));

        console.log(bookValues)

        try {

            const updatedBook = await updateBook(bookId, bookValues);

            navigate(`/books/details/${bookId}`);

        } catch (error) {

            alert(error.message)
        }
    }

    const onChange = (e) => {
        setBook(oldBook => ({
            ...oldBook,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className='editForm'  onSubmit={editBookSubmitHandler}>
            <h1 className='editTitle'>Edit Book</h1>
            <div className="container">

                <input type="text" name="title" className="title" value={book.title} onChange={onChange} placeholder="Title" />
                <input type="text" name="img" className="img" value={book.img} onChange={onChange} placeholder="Image URL" />

                <div className="row">
                    <div className="half">
                        <input type="number" name="year" className="year" value={book.year} onChange={onChange} placeholder='Year' />
                    </div>

                    <div className="half">
                        <select name="type" className="type" value={book.type} onChange={onChange}>
                            <option value="">Choose one</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="fiction">Fiction</option>
                            <option value="motivational">Motivational</option>
                            <option value="mystery">Mystery</option>
                            <option value="nonFiction">Non-Fiction</option>
                            <option value="romance">Romance</option>
                        </select>
                    </div>
                </div>

                <input name="description" className="description" value={book.description} onChange={onChange} placeholder='Description'></input>

                <input type="submit" value="Edit Book" />

            </div>
        </form>
    );
}
