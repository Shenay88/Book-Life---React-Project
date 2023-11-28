import { Link, Outlet } from 'react-router-dom';
import './pagination.css';

export default function Pagination({ booksPerPage, allBooksLength, currentPage, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allBooksLength / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav className="navPagination">
                <div className='pagination'>
                    {pageNumbers.map(page => (
                        <Link
                            key={page}
                            className='page'
                            onClick={() => paginate(page)}
                            to={`books?page=${page}`}
                        >
                            {page}
                        </Link>
                    ))}
                </div>
            </nav>

            <Outlet />
        </>
    );
}