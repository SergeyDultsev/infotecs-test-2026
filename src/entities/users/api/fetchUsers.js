export const fetchUsers = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}users`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! статус: ${response.status}`);
    }

    return response.json();
};