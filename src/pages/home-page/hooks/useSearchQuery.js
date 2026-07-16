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

    const { data, errorSearch, isLoadingSearch } = useSearch(q);

    useEffect(() => {
        if (data) {
            userStore.setUsers(data);
        }
    }, [data]);

    const onSearch = (query) => {
        navigate(`/?q=${query}`);
    };

    const handleSearch = useDebounce((searchQuery) => {
        onSearch(searchQuery);
    });

    return {
        query,
        setQuery,
        data,
        isLoadingSearch,
        errorSearch,
        onSearch,
        handleSearch,
    };
}