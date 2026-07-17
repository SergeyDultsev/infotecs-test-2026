import styles from "./Pagination.module.scss";
import { ButtonDefault, LeftIcon, RightIcon, PAGINATION_VISIBLE_COUNT } from "@shared";
import { useVisiblePages} from "@shared/ui/ui-pagination/utils/useVisiblePages.js";

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    onPrev,
    onNext,
}) => {
    const { start, end, pages } = useVisiblePages(
        currentPage,
        totalPages,
        PAGINATION_VISIBLE_COUNT
    );

    return (
        <div className={styles['pagination-list']}>
            <ButtonDefault
                icon={<LeftIcon />}
                onClick={onPrev}
                disabled={currentPage <= 1}
            />

            {start > 1 && (
                <>
                    <div
                        className={styles['pagination-item']}
                        onClick={() => onPageChange(1)}
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
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </div>
            ))}

            {end < totalPages && (
                <>
                    {end < totalPages - 1 && <span className={styles['pagination-ellipsis']}>...</span>}
                    <div
                        className={styles['pagination-item']}
                        onClick={() => onPageChange(totalPages)}
                    >
                        {totalPages}
                    </div>
                </>
            )}

            <ButtonDefault
                icon={<RightIcon />}
                onClick={onNext}
                disabled={currentPage >= totalPages}
            />
        </div>
    );
};
