import { useEffect, useState } from "react";
import { userStore } from "@entities/users/model/userStore.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearch } from "@features/users/index.js";

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

    return {
        query,
        setQuery,
        data,
        isLoadingSearch,
        errorSearch,
        onSearch,
    };
}