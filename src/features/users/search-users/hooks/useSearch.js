import { useEffect, useState} from 'react';
import { searchUsers } from '@entities/users';

export const useSearch = (queryValue) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!queryValue) {
            setData(null);
            return;
        }

        const load = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await searchUsers(queryValue);
                setData(response.users);
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
        queryValue,
    };
};
