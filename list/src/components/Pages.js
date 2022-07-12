import { Link } from 'react-router-dom';
import { makeCurrentPageslist } from '../helpers/makeCurrentPagesList';

const numPages = 42;


export const Pages = ({ currentPage }) => {
    const currentPages = makeCurrentPageslist(currentPage);
    let pagesList = [];
    const back = "<";
    const next = ">";
    if (currentPage > 1) {
        pagesList.push([<Link to={`/${currentPage - 1}`} className="page-link" onClick={refresh}>{back}</Link>]);
    };
    pagesList.push([<PageNum page={currentPages[0]} currentPage={currentPage} />]);

    for (let i = 1; i < currentPages.length; i++) {
        if (currentPages[i] - currentPages[i - 1] > 1) {
            pagesList.push(<span className="dots">...</span>,
                <PageNum page={currentPages[i]} currentPage={currentPage} />
            )
        }
        else {
            pagesList.push(<PageNum page={currentPages[i]} currentPage={currentPage} />)
        }
    };

    if (currentPage < numPages) {
        pagesList.push([<Link to={`/${currentPage + 1}`} className="page-link" onClick={refresh}>{next}</Link>]);
    };

    return (
        <div id="page-nums">{pagesList}</div>
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
            className={pageClassName}
            onClick={refresh}>{page}
        </Link>)
}

const refresh = () => {
    setTimeout(() => {
        window.location.reload(false);
    }, 500);
}