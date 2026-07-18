import { InputDefault, ButtonDefault, SearchIcon, FilterIcon, useModal } from '@/shared';
import style from './SearchBar.module.scss';
import { FilterUserModal } from "@features/users/filter-users/index.js";;

export const SearchBar = ({
    query,
    setQuery,
    onSearch,
    onSearchDebounce,
}) => {
    const { openModal } = useModal();

    const handleKeyEnter = (e) => {
      if (e.key === 'Enter' && query) {
          onSearch(query);
      }
    }

    const handleFilterModal = () => {
        openModal(<FilterUserModal />);
    }

    return (
        <div className={style['search-bar']}>
            <InputDefault
                value={query}
                variant={'search'}
                onChange={(event) => {
                    const value = event.target.value;
                    setQuery(value);
                    onSearchDebounce(value);
                }}
                onKeyDown={handleKeyEnter}
                type="text"
                placeholder="Поиск пользователей"
            />
            <ButtonDefault
                onClick={() => onSearch(query)}
                icon={<SearchIcon />}
            />
            <ButtonDefault
                onClick={handleFilterModal}
                icon={<FilterIcon />}
            />
        </div>
    );
}