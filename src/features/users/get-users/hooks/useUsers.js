import { useEffect, useState } from 'react';
import { fetchUsers } from '@entities/users';

export const useUsers = (params) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const limit = params?.limit;
    const skip = params?.skip;
    const filterKey = params?.filterKey;
    const sortBy = params?.sortBy;
    const order = params?.order;
    const hasParams = params != null;

    const isLoading = !hasParams ? false : loading;

    useEffect(() => {
        if (!hasParams) return;

        const controller = new AbortController();

        const load = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await fetchUsers({ limit, skip, filterKey, sortBy, order, signal: controller.signal });
                setData(result);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        load();

        return () => {
            controller.abort();
        };
    }, [limit, skip, filterKey, sortBy, order, hasParams]);

    return {
        data,
        error,
        isLoading
    };
};
