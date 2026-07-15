import { observer } from 'mobx-react-lite';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { USER_COLUMNS } from "@pages/home-page/model/homePage.config.js";
import { TableDefault } from "@shared/index.js";
import { SearchBar } from "@features/users/search-users/ui/search-bar/SearchBar.jsx";
import {useHomePage} from "@pages/home-page/hooks/useHomePage.js";

export const HomePage = observer(() => {
    const {
        users,
        isLoading,
        error,
        onSearch
    } = useHomePage();

    if (isLoading) return <Fragment>Загрузка...</Fragment>;
    if (error) return <Fragment>Ошибка: {error.message} <Link className="link" to={'/'}>На главную</Link></Fragment>;

    return (
        <div className={styles['home-page']}>
            <SearchBar
                onSearch={onSearch}
            />
            <TableDefault
                columns={USER_COLUMNS}
                data={users}
            />
        </div>
    );
});
