// по номеру открытой страницы определяется список страниц, номера которых отобразятся на экране
export const makeCurrentPageslist = (currentPage) => {
    const numPages = 42;
    // закидываем в массив первые, последние, предыдущие и следующие страницы
    let currentPages = [1, 2, currentPage - 1, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, numPages - 1, numPages];
    currentPages = currentPages.filter(pageNum => (pageNum > 0) && (pageNum <= numPages));
    // удаляем дубли
    currentPages = [...new Set(currentPages)];
    // ставим точки между несоседними номерами
    currentPages = currentPages.map((page, index, currentPages) => {
        return (
            [(page - currentPages[index - 1] > 1 && '...'), page])
    });
    currentPages = currentPages.flat().filter(item => item);
    return currentPages
}