import { createBook } from '../../services/bookService';
import { useNavigate } from 'react-router-dom';
import './create.css';
import Path from '../../paths';
import useForm from '../../hooks/useForm';

export default function Create() {

    const navigate = useNavigate()

    const createBookSubmitHandler = async (bookData) => {
       
        try {

            // We get an object with all the data from the server, _id included
            const newBook = await createBook(bookData);

            console.log(newBook)
            navigate(Path.Home);

        } catch (error) {

            alert(error.message);
        }
    }

    const { values, onChange, onSubmit } = useForm(createBookSubmitHandler, {
        title: '',
        img: '',
        year: '',
        type: '',
        description: '',
    });

    return (
        <form className='createForm' onSubmit={onSubmit}>
            <h1 className='createTitle'>Add Book</h1>
            <div className="container">

                <input type="text" name="title" className="title" value={values.title} onChange={onChange} placeholder="Title" />
                <input type="text" name="img" className="img" value={values.img} onChange={onChange} placeholder="Image URL" />

                <div className="row">
                    <div className="yearInput">
                        <input type="number" name="year" className="year" value={values.year} onChange={onChange} placeholder='Year' />
                    </div>

                    <div className="typeInput">
                        <select name="type" className="type" value={values.type} onChange={onChange}>
                            <option value="">Book Type</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="fiction">Fiction</option>
                            <option value="motivational">Motivational</option>
                            <option value="mystery">Mystery</option>
                            <option value="nonFiction">Non-Fiction</option>
                            <option value="romance">Romance</option>
                        </select>
                    </div>
                </div>

                <textarea name="description" className="description" value={values.description} onChange={onChange} placeholder='Description'></textarea>

                <input type="submit" value="Add Book" />

            </div>
        </form>
    );
}
