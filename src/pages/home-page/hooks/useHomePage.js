import { useNavigate, useSearchParams } from "react-router-dom";
import { useUsers } from "@features/users/get-users/index.js";
import { useSearch } from "@features/users/index.js";
import { useEffect } from "react";
import { userStore } from "@entities/users/model/userStore.js";

export const useHomePage = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');

    const { data: allData, error: allError, isLoading: allLoading } = useUsers();
    const { data: searchData, error: searchError, isLoading: searchLoading } = useSearch(q);

    const navigate = useNavigate();

    useEffect(() => {
        if (q && searchData?.users) {
            userStore.setUsers(searchData.users);
        } else if (!q && allData?.users) {
            userStore.setUsers(allData.users);
        }
    }, [q, allData, searchData]);

    const users = userStore.getUsers;

    const onSearch = (query) => {
        navigate(`/?q=${query}`);
    };

    const isLoading = q ? searchLoading : allLoading;
    const error = q ? searchError : allError;

    return {
        users,
        isLoading,
        error,
        onSearch,
    };
}