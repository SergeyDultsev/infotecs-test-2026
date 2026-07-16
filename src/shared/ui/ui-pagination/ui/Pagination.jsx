import { observer } from "mobx-react-lite";
import styles from "./Pagination.module.scss";
import { userStore } from "@entities/users/model/userStore.js";
import { ButtonDefault, PAGINATION_VISIBLE_COUNT } from "@shared";
import { useVisiblePages} from "@shared/ui/ui-pagination/utils/useVisiblePages.js";

export const Pagination = observer(() => {
    const { start, end, pages } = useVisiblePages(
        userStore.currentPage,
        userStore.totalPages,
        PAGINATION_VISIBLE_COUNT
    );

    return (
        <div className={styles['pagination-list']}>
            <ButtonDefault
                text={'<'}
                onClick={userStore.prevPage}
                disabled={userStore.currentPage <= 1}
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
                        userStore.currentPage === page
                            ? `${styles['pagination-item']} ${styles['pagination-item__active']}`
                            : styles['pagination-item']
                    }
                    onClick={() => userStore.setCurrentPage(page)}
                >
                    {page}
                </div>
            ))}

            {end < userStore.totalPages && (
                <>
                    {end < userStore.totalPages - 1 && <span className={styles['pagination-ellipsis']}>...</span>}
                    <div
                        className={styles['pagination-item']}
                        onClick={() => userStore.setCurrentPage(userStore.totalPages)}
                    >
                        {userStore.totalPages}
                    </div>
                </>
            )}

            <ButtonDefault
                text={'>'}
                onClick={userStore.nextPage}
                disabled={userStore.currentPage >= userStore.totalPages}
            />
        </div>
    );
});
