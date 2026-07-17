import { useEffect, useState} from 'react';
import { searchUsers, fetchUsers } from '@entities/users';
import { useNavigate } from "react-router-dom";

export const useSearch = (queryValue) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError(null);

            try {
                if (!queryValue) {
                    navigate('/');

                    const response = await fetchUsers();
                    setData(response.users);
                } else {
                    const response = await searchUsers(queryValue);
                    setData(response.users);
                }
            } catch (e) {
                setError(e?.message || 'Неизвестная ошибка');
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [queryValue]);

    return {
        data,
        error,
        isLoading,
        queryValue,
    };
};
