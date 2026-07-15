import { useEffect, useState } from 'react';
import { searchUsers } from '@entities/users';

export const useSearch = (queryValue) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!queryValue) {
            return;
        }

        const load = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await searchUsers(queryValue);
                setData(data);
            } catch (e) {
                setError(e);
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
    };
};
