import style from './FilterUserModal.module.scss';
import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { filterUsers, sortedUsers } from "@features/users/filter-users/config/filter-user.config.js";
import { ButtonDefault } from "@shared";
import { userStore } from "@entities/users/model/userStore.js";

export const FilterUserModal = observer(() => {
    const { filterKey, sortBy, order } = userStore;

    const onSortChange = (sortBy, order) => userStore.setSort(sortBy, order);
    const onFilterChange = (filterKey) => userStore.setFilter(filterKey);

    const filterItems = useMemo(
        () => [...filterUsers({ onFilterChange }, filterKey)],
        [onFilterChange, filterKey]
    );
    const sortedItems = useMemo(
        () => [...sortedUsers({ onSortChange }, sortBy, order)],
        [onSortChange, sortBy, order]
    );

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
                            isActive={item.isActive}
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
                            isActive={item.isActive}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
})