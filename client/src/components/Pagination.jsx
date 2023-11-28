import { useEffect, useState } from 'react';
import { getAllBooks } from '../services/bookService';
import BookList from './catalog/book-list-item/BookList';


export default function Pagination() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(4); // Adjust the number of books per page as needed

    useEffect(() => {
        getAllBooks()
            .then(allBooks => setBooks(allBooks));
    }, []);

    const indexOfLastBook = currentPage * booksPerPage; //1 * 4
    const indexOfFirstBook = indexOfLastBook - booksPerPage; // 4 - 4
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook); // 0, 4

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className='booksList'>

                {currentBooks.map(book => <BookList key={book._id} {...book} />)}

            </div>

            <div className="pagination">
                {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
            </div>
        </>
    )
}
