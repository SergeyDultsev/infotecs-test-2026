import { useEffect, useState } from 'react';
import { fetchUsers } from '@entities/users';

export const useUsers = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchUsers();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    return { data, error, isLoading };
};