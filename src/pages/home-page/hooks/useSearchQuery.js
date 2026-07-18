import { useEffect, useState } from "react";
import { userStore } from "@entities/users/model/userStore.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearch } from "@features/users/index.js";
import { useDebounce } from "@shared";

export const useSearchQuery = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');

    const { data, error: errorSearch, isLoading: isLoadingSearch } = useSearch(q);

    useEffect(() => {
        if (data) {
            userStore.setUsers(data.users);
            userStore.setTotal(data.total);
            userStore.setCurrentPage(1);
        }
    }, [data]);

    const onSearch = (query) => {
        if (!query) return;
        navigate(`/?q=${query}`);
    };

    const onSearchDebounce = useDebounce((searchQuery) => {
        if (searchQuery.length >= 3) onSearch(searchQuery);
    });

    return {
        query,
        setQuery,
        data,
        isLoadingSearch,
        errorSearch,
        onSearch,
        onSearchDebounce,
    };
}
