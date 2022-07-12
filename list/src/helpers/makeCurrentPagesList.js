// по номеру открытой страницы определяется список страниц, номера которых отобразятся на экране
export const makeCurrentPageslist = (currentPage) => {
    const numPages = 42;
    let currentPages = [];
    //fisrt
    currentPages.push(1, 2);
    if (currentPage >= 3 & (!(currentPages.includes(currentPage - 2)))) {
        currentPages.push(currentPage - 2)
    };
    //previous
    if (currentPage >= 2 & (!(currentPages.includes(currentPage - 1)))) {
        currentPages.push(currentPage - 1)
    };
    //current
    if (!(currentPages.includes(currentPage))) {
        currentPages.push(currentPage)
    };
    //next
    if ((currentPage <= numPages - 1) & (!(currentPages.includes(currentPage + 1)))) {
        currentPages.push(currentPage + 1)
    };
    if ((currentPage <= numPages - 2) & (!(currentPages.includes(currentPage + 2)))) {
        currentPages.push(currentPage + 2)
    };
    //last
    if (!(currentPages.includes(numPages - 1))) {
        currentPages.push(numPages - 1)
    }
    if (!(currentPages.includes(numPages))) {
        currentPages.push(numPages)
    };
    return currentPages
}