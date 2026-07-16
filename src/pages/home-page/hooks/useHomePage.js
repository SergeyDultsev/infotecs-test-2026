import { useUsers } from "@features/users/index.js";
import { useEffect } from "react";
import { userStore } from "@entities/users/model/userStore.js";

export const useHomePage = () => {
    const { data, error, isLoading} = useUsers();

    useEffect(() => {
        if (!data) return;
        userStore.setCurrentPage(1);
        userStore.setUsers(data.users);
        userStore.setTotal(data.total);
    }, [data]);

    return {
        isLoading,
        error,
    };
}