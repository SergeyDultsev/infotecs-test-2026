import { observer } from "mobx-react-lite";
import { userStore } from "@entities/users/model/userStore.js";
import styles from "./Pagination.module.scss";
import { ButtonDefault } from "@shared";

export const Pagination = observer(() => {
    const { currentPage, total, limit } = userStore;
    const totalPages = Math.ceil((total ?? 0) / limit);

    if (totalPages <= 1) return null;

    const handlePrev = () => {
        if (currentPage > 1) userStore.setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) userStore.setCurrentPage(currentPage + 1);
    };

    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return (
        <div className={styles['pagination-list']}>
            <ButtonDefault
                text={'<'}
                onClick={handlePrev}
                disabled={currentPage <= 1}
            />

            {start > 1 && (
                <>
                    <div
                        className={styles['pagination-item']}
                        onClick={() => userStore.setCurrentPage(1)}
                    >
                        1
                    </div>
                    {start > 2 && <span className={styles['pagination-ellipsis']}>...</span>}
                </>
            )}

            {pages.map((page) => (
                <div
                    key={page}
                    className={
                        currentPage === page
                            ? `${styles['pagination-item']} ${styles['pagination-item__active']}`
                            : styles['pagination-item']
                    }
                    onClick={() => userStore.setCurrentPage(page)}
                >
                    {page}
                </div>
            ))}

            {end < totalPages && (
                <>
                    {end < totalPages - 1 && <span className={styles['pagination-ellipsis']}>...</span>}
                    <div
                        className={styles['pagination-item']}
                        onClick={() => userStore.setCurrentPage(totalPages)}
                    >
                        {totalPages}
                    </div>
                </>
            )}

            <ButtonDefault
                text={'>'}
                onClick={handleNext}
                disabled={currentPage >= totalPages}
            />
        </div>
    );
});
