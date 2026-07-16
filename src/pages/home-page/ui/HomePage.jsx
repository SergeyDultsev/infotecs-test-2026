import { observer } from 'mobx-react-lite';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { USER_COLUMNS } from "@pages/home-page/model/homePage.config.js";
import { TableDefault } from "@shared/index.js";
import { SearchBar } from "@features/users/search-users/ui/search-bar/SearchBar.jsx";
import { useHomePage } from "@pages/home-page/hooks/useHomePage.js";
import { useSearchQuery } from "@pages/home-page/hooks/useSearchQuery.js";
import { userStore } from "@entities/users/model/userStore.js";
import { Pagination } from "@shared/ui/ui-pagination/Pagination.jsx";

export const HomePage = observer(() => {
    const users = userStore.getUsers;
    const { currentPage, limit } = userStore;
    const offset = (currentPage - 1) * limit;
    const paginatedUsers = users.slice(offset, offset + limit);

    const {
        isLoading,
        error,
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
    if (e) return <Fragment>Ошибка: {e.message} <Link className="link" to={'/'}>На главную</Link></Fragment>;

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
            />

            <Pagination />
        </div>
    );
});
