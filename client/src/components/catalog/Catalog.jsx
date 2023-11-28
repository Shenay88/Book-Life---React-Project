import { useEffect, useState } from 'react';
import './catalog.css'
import { getAllBooks } from '../../services/bookService';
import BookList from './book-list-item/BookList';
import Pagination from './pagination/Pagination';

const BOOKS_PER_PAGE = 5

export default function Catalog() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        getAllBooks()
            .then(allBooks => setBooks(allBooks));
    }, []);

    const indexOfLastBook = currentPage * BOOKS_PER_PAGE; //1 * 5
    const indexOfFirstBook = indexOfLastBook - BOOKS_PER_PAGE; // 5 - 5
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook); // 0, 5

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className='dashboard'>
            <div className='booksList'>

                {currentBooks.map(book => <BookList key={book._id} {...book} />)}

            </div>

            {books.length === 0 && (

                <p className='noBooks'>No books available!</p>

            )}
            <Pagination
                booksPerPage={BOOKS_PER_PAGE}
                allBooksLength={books.length}
                currentPage={currentPage}
                paginate={paginate}
            />

        </section>
    );
}