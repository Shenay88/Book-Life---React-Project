import { useEffect, useState } from 'react';
import './catalog.css'
import { getAllBooks } from '../../services/bookService';
import BookList from './book-list-item/BookList';
// import Pagination from './pagination/Pagination';

const BOOKS_PER_PAGE = 4;

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



    // const indexOfLastBook = currentPage * BOOKS_PER_PAGE; //1 * 5
    // const indexOfFirstBook = indexOfLastBook - BOOKS_PER_PAGE; // 5 - 5
    // const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook); // 0, 5

    // const paginate = pageNumber => setCurrentPage(pageNumber);

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