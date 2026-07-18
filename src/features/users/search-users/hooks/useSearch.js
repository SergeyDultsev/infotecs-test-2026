import { useEffect, useState } from 'react';
import { searchUsers } from '@entities/users';
import { useNavigate } from "react-router-dom";

export const useSearch = (queryValue) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(!!queryValue);

    const navigate = useNavigate();

    useEffect(() => {
        if (!queryValue) {
            navigate('/');
            return;
        }

        const controller = new AbortController();

        const load = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await searchUsers(queryValue, { signal: controller.signal });
                setData(response);
            } catch (e) {
                if (e.name !== 'AbortError') {
                    setError(e?.message || 'Неизвестная ошибка');
                }
            } finally {
                setLoading(false);
            }
        };

        load();

        return () => {
            controller.abort();
        };
    }, [queryValue, navigate]);

    return {
        data,
        error,
        isLoading,
        queryValue,
    };
};
