export const fetchUsers = async (
    {
        limit,
        skip,
        filterKey,
        sortBy,
        order,
        signal
    }) =>
{
    const apiUrl = import.meta.env.VITE_API_URL;
    const params = new URLSearchParams();

    if (limit != null) params.set('limit', limit);
    if (skip != null) params.set('skip', skip);
    if (sortBy) params.set('sortBy', sortBy);
    if (order) params.set('order', order);

    let url;
    if (filterKey) {
        params.set('key', 'gender');
        params.set('value', filterKey);
        url = `${apiUrl}users/filter?${params.toString()}`;
    } else {
        url = `${apiUrl}users?${params.toString()}`;
    }

    const response = await fetch(url, { signal });

    if (!response.ok) {
        throw new Error(`HTTP ошибка! статус: ${response.status}`);
    }

    return response.json();
};
