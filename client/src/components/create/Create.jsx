import { createBook } from '../../services/bookService';
import {useNavigate} from 'react-router-dom';
import './create.css';

export default function Create() {

    const navigate = useNavigate()

    // Uncontrolled form
    const createBookSubmitHandler = async (e) => {
        e.preventDefault();

        // We get an object with all input values.
        const bookData = Object.fromEntries(new FormData(e.currentTarget));

        try {

            // We get an object with all the data from the server, _id included
            const newBook = await createBook(bookData);
            navigate('/');

        } catch (error) {

            console.log(error)

        }

    }

    return (
        <form className='createForm' onSubmit={createBookSubmitHandler}>
            <h1>Add Book</h1>
            <div className="container">

                <input type="text" name="title" className="title" placeholder="Title" />
                <input type="text" name="img" className="img" placeholder="Image URL" />

                <div className="row">
                    <div className="half">
                        <input type="number" name="year" className="year" placeholder='Year' />
                    </div>

                    <div className="half">
                        <select name="type" className="type">
                            <option value="">Choose one</option>
                            <option value="motivational">Motivational</option>
                            <option value="fiction">Fiction</option>
                        </select>
                    </div>
                </div>

                <textarea name="text" className="description" placeholder='Description'></textarea>

                <input type="submit" value="Add Book" />

            </div>
        </form>
    );
}
