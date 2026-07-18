import style from './FilterUserModal.module.scss';
import { useMemo } from "react";
import { filterUsers, sortedUsers } from "@features/users/filter-users/config/filter-user.config.js";
import { ButtonDefault } from "@shared";
import { userStore } from "@entities/users/model/userStore.js";

export const FilterUserModal = () => {
    const onSortChange = (sortBy, order) => userStore.setSort(sortBy, order);
    const onFilterChange = (filterKey) => userStore.setFilter(filterKey);

    const filterItems = useMemo(() => [...filterUsers({ onFilterChange })], [onFilterChange]);
    const sortedItems = useMemo(() => [...sortedUsers({ onSortChange })], [onSortChange]);

    return (
        <section className={style['filter-bar']}>

            <div className={style['filter-bar__block']}>
                <p className={style['filter-bar__title']}>Фильтрация</p>
                <div className={style['filter-bar__list']}>
                    {filterItems.map((item) => (
                        <ButtonDefault
                            key={item.name}
                            text={item.name}
                            onClick={item.onClick}
                        />
                    ))}
                </div>
            </div>

            <div className={style['filter-bar__block']}>
                <p className={style['filter-bar__title']}>Сортировка</p>
                <div className={style['filter-bar__list']}>
                    {sortedItems.map((item) => (
                        <ButtonDefault
                            key={item.name}
                            text={item.name}
                            onClick={item.onClick}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}