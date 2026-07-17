import { useUsers } from "@features/users/index.js";
import { useEffect } from "react";
import { userStore } from "@entities/users/model/userStore.js";
import { useModal } from "@shared";
import { UserModal } from "@features/users/get-user/index.js";

export const useHomePage = () => {
    const { data, error, isLoading} = useUsers();
    const { openModal } = useModal();

    useEffect(() => {
        if (!data) return;
        userStore.setCurrentPage(1);
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
    };
}