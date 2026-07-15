export const searchUsers = async (value) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}users/search?q=${value}`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! статус: ${response.status}`);
    }

    return response.json();
};