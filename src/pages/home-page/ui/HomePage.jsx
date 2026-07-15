import { observer } from 'mobx-react-lite';
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { useUsers } from "@features/users/get-users/index.js";
import { userStore } from "@entities/users/model/userStore.js";
import { USER_COLUMNS } from "@pages/home-page/model/homePage.config.js";
import { TableDefault } from "@shared/ui/ui-table/ui/TableDefault.jsx";

export const HomePage = observer(() => {
    const { data, error, isLoading } = useUsers();

    useEffect(() => {
        if (data?.users) {
            userStore.setUsers(data.users);
        }
    }, [data]);

    const users = userStore.getUsers;

    if (isLoading) return <Fragment>Загрузка...</Fragment>;
    if (error) return <Fragment>Ошибка: {error.message} <Link className="link" to={'/'}>На главную</Link></Fragment>;

    return (
        <div className={styles['home-page']}>
            <TableDefault
                columns={USER_COLUMNS}
                data={users}
            />
        </div>
    );
});