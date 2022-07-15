import { makeCurrentPageslist } from '../helpers/makeCurrentPagesList';

const numPages = 42;

export const Paginator = ({ currentPage }) => {
    const currentPages = makeCurrentPageslist(currentPage);
    const pagesList = currentPages.map(page => {
        if (typeof page === "number") {
            return <PageNum page={page} currentPage={currentPage} />
        }
        return <span className="dots">...</span>
    })

    return (
        <div className="page-nums">
            {currentPage > 1 &&
                <a href={`/${currentPage - 1}`} className="page-link">{'<'}</a>}
            {pagesList}
            {currentPage < numPages &&
                <a href={`/${currentPage + 1}`} className="page-link">{'>'}</a>
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
        <a href={`/${page}`}
            className={pageClassName}>
            {page}
        </a>)
}