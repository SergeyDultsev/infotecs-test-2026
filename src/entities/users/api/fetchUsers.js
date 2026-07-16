export const fetchUsers = async ({ limit = 0, skip = 0 } = {}) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}users?limit=${limit}&skip=${skip}`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! статус: ${response.status}`);
    }

    return response.json();
};