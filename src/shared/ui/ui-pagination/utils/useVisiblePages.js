export const useVisiblePages = (currentPage, totalPages, visibleCount) => {
    let start = Math.max(1, currentPage - Math.floor(visibleCount / 2));
    let end = Math.min(totalPages, start + visibleCount - 1);
    if (end - start + 1 < visibleCount) {
        start = Math.max(1, end - visibleCount + 1);
    }

    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return {
        start,
        end,
        pages
    };
}