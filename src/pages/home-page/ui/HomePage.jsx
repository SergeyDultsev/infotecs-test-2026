import { observer } from 'mobx-react-lite';
import { Fragment } from "react";
import styles from "./HomePage.module.scss";
import { USER_COLUMNS } from "@pages/home-page/model/homePage.config.js";
import { TableDefault } from "@shared/index.js";
import { SearchBar } from "@features/users/search-users/ui/search-bar/SearchBar.jsx";
import { useHomePage } from "@pages/home-page/hooks/useHomePage.jsx";
import { useSearchQuery } from "@pages/home-page/hooks/useSearchQuery.js";
import { userStore } from "@entities/users/model/userStore.js";
import { Pagination } from "@shared/ui/ui-pagination/ui/Pagination.jsx";

export const HomePage = observer(() => {
    const paginatedUsers = userStore.paginatedUsers;

    const {
        isLoading,
        error,
        handleOpenUserModal,
    } = useHomePage();

    const {
        query,
        setQuery,
        isLoadingSearch,
        errorSearch,
        handleSearch,
    } = useSearchQuery();

    const e = error || errorSearch;
    const isLoader = isLoading || isLoadingSearch;

    if (isLoader) return <Fragment>Загрузка...</Fragment>;
    if (e) return <Fragment>Ошибка: {e}</Fragment>;

    return (
        <div className={styles['home-page']}>
            <SearchBar
                query={query}
                onSearch={handleSearch}
                setQuery={setQuery}
            />

            <TableDefault
                columns={USER_COLUMNS}
                data={paginatedUsers}
                onClick={handleOpenUserModal}
            />

            <Pagination
                currentPage={userStore.currentPage}
                totalPages={userStore.totalPages}
                onPageChange={(page) => userStore.setCurrentPage(page)}
                onPrev={() => userStore.prevPage()}
                onNext={() => userStore.nextPage()}
            />
        </div>
    );
});
