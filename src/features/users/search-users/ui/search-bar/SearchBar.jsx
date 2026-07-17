import { InputDefault, ButtonDefault, SearchIcon, FilterIcon } from '@/shared';
import style from './SearchBar.module.scss';

export const SearchBar = ({
    query,
    setQuery,
    onSearch,
    onSearchDebounce,
}) => {

    const handleKeyEnter = (e) => {
      if (e.key === 'Enter' && query) {
          onSearch(query);
      }
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
                placeholder="Поиск"
            />
            <ButtonDefault
                onClick={() => onSearch(query)}
                icon={<SearchIcon />}
            />
            <ButtonDefault
                icon={<FilterIcon />}
            />
        </div>
    );
}