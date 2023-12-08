import { useEffect, useState } from 'react';
import './catalog.css'
import { getAllBooks, getBooksCount } from '../../services/bookService';
import { useNavigate } from 'react-router-dom';
import BookList from './book-list-item/BookList';


export default function Catalog() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksLength, setBooksLength] = useState(0);
    const [isPreviousButtonDisabled, setPreviousButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {

        try {
            getAllBooks(currentPage)
                .then(allBooks => setBooks(allBooks)); //идват само 4 книги, защото заявката е за толкова.

            getBooksCount()
                .then(result => setBooksLength(result));// число с общия брой на книги.

        } catch (error) {

            alert(error.message);
        }

    }, [currentPage]);

    const handlePageChange = (newPage) => {

        if (newPage < 1 || newPage > Math.ceil(booksLength / 4)) {
            return;
        }

        navigate(`?page=${newPage}`);
        setCurrentPage(newPage);
        
        const isPreviousDisabled = newPage===0;
        const isNextDisabled = newPage === Math.ceil(booksLength / 4);
     
        setPreviousButtonDisabled(isPreviousDisabled);
        setNextButtonDisabled(isNextDisabled);
    };

    return (
        <section className='dashboard'>
            <div className='booksList'>

                {books.map(book => <BookList key={book._id} {...book} />)}

            </div>

            {booksLength >= 1 && (

                <div className='pageButtons'>
                    <button className='pageBtn' onClick={() => handlePageChange(currentPage - 1)} disabled={isPreviousButtonDisabled} > Previous Page </button>
                    <button className='pageBtn' onClick={() => handlePageChange(currentPage + 1)} disabled={isNextButtonDisabled}> Next Page</button>
                </div>

            )}


            {booksLength === 0 && (

                <p className='noBooks'>No books available!</p>

            )}

        </section>
    );
}