import { useUsers } from "@features/users/get-users/index.js";
import { useEffect } from "react";
import { userStore } from "@entities/users/model/userStore.js";

export const useHomePage = () => {
    const { data, error, isLoading} = useUsers();

    useEffect(() => {
        if (!data) return;
        userStore.setUsers(data.users);
    }, [data]);

    return {
        isLoading,
        error,
    };
}