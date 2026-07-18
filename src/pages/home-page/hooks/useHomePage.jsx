import { useUsers } from "@features/users/index.js";
import { useEffect } from "react";
import { userStore } from "@entities/users/model/userStore.js";
import { useModal } from "@shared";
import { UserModal } from "@features/users/get-user/index.js";
import { useSearchParams } from "react-router-dom";

export const useHomePage = () => {
    const [searchParams] = useSearchParams();
    const isSearchMode = !!searchParams.get('q');

    const params = isSearchMode ? null : {
        limit: userStore.limit,
        skip: userStore.skip,
        filterKey: userStore.filterKey,
        sortBy: userStore.sortBy,
        order: userStore.order,
    };

    const { data, error, isLoading } = useUsers(params);
    const { openModal } = useModal();

    useEffect(() => {
        if (!data) return;
        userStore.setUsers(data.users);
        userStore.setTotal(data.total);
    }, [data]);

    const handleOpenUserModal = (user) => {
        openModal(<UserModal user={user} />);
    }

    return {
        isLoading,
        error,
        handleOpenUserModal,
        isSearchMode,
    };
}
