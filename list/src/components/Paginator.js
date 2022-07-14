import { Link } from 'react-router-dom';
import { makeCurrentPageslist } from '../helpers/makeCurrentPagesList';

const numPages = 42;


export const Paginator = ({ currentPage }) => {
    const currentPages = makeCurrentPageslist(currentPage);
    const pagesList = currentPages.map(page => {
        if (typeof page === "number") {
            return <PageNum page={page} currentPage={currentPage} />
        }
        else {
            return <span className="dots">...</span>
        }
    })


    return (
        <div id="page-nums">
            {currentPage > 1 &&
                <Link to={`/${currentPage - 1}`} className="page-link">{'<'}</Link>}
            {pagesList}
            {currentPage < numPages &&
                <Link to={`/${currentPage + 1}`} className="page-link">{'>'}</Link>
            }
        </div>
    )
}

const PageNum = ({ page, currentPage }) => {
    const getPageClassName = (page, currentPage) => {
        if (page === currentPage) {
            return "page-link current"
        }
        return "page-link"
    };
    const pageClassName = getPageClassName(page, currentPage);


    return (
        <Link to={`/${page}`}
            className={pageClassName}>
            {page}
        </Link>)
}
