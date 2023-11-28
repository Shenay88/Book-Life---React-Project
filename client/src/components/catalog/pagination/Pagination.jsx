import { Link } from 'react-router-dom';
import './pagination.css';

export default function Pagination({ booksPerPage, allBooksLength, currentPage, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allBooksLength / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="navPagination">
            <ul className='pagination'> 
                {pageNumbers.map(page => (
                    <li key={page} className='page' onClick={() => paginate(page)}>
                        <Link to="/" className='currentPage'> {page} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}