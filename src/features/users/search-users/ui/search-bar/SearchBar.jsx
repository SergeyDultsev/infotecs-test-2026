import { InputDefault, ButtonDefault, SearchIcon, FilterIcon } from '@/shared';
import style from './SearchBar.module.scss';

export const SearchBar = ({
    query,
    setQuery,
    onSearch,
}) => {

    const handleKayEnter = (e) => {
      if (e.key === 'Enter') {
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
                    onSearch(value);
                }}
                onKeyPress={handleKayEnter}
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