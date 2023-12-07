import { useEffect, useState } from 'react';
import './catalog.css'
import { getAllBooks } from '../../services/bookService';
import BookList from './book-list-item/BookList';


export default function Catalog() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        booksPaginate(currentPage);
    }, [currentPage]);

    const booksPaginate = (page) => {
        try {
            getAllBooks(page)
                .then(allBooks => setBooks(allBooks));

        } catch (error) {

            alert(error.message);
        }
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


    return (
        <section className='dashboard'>
            <div className='booksList'>

                {books.map(book => <BookList key={book._id} {...book} />)}

            </div>

            {books.length > 0 && (

                <div className='pageButtons'>
                    <button className='pageBtn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}> Previous Page </button>
                    <button className='pageBtn' onClick={() => handlePageChange(currentPage + 1)}> Next Page</button>
                </div>

            )}


            {books.length === 0 && (

                <p className='noBooks'>No books available!</p>

            )}

        </section>
    );
}