import { useState } from 'react';
import { InputDefault, ButtonDefault } from '@/shared';
import style from './SearchBar.module.scss';

export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    // TODO: Необходим дебаунс

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className={style['search-bar']}>
            <InputDefault
                value={query}
                variant={'search'}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Поиск"
            />
            <ButtonDefault
                onClick={handleSearch}
                text={'Поиск'}
            />
        </div>
    );
}