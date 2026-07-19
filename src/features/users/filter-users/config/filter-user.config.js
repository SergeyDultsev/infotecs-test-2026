export const filterUsers = (fn, filterKey) => [
    {
        name: 'По умолчанию',
        key: null,
        onClick: () => fn.onFilterChange(null),
        isActive: filterKey === null,
    },
    {
        name: 'Мужчины',
        key: 'male',
        onClick: () => fn.onFilterChange('male'),
        isActive: filterKey === 'male',
    },
    {
        name: 'Женщины',
        key: 'female',
        onClick: () => fn.onFilterChange('female'),
        isActive: filterKey === 'female',
    },
];

export const sortedUsers = (fn, sortBy, order) => [
    {
        name: 'По умолчанию',
        onClick: () => fn.onSortChange(null, null),
        isActive: sortBy === null && order === null,
    },
    {
        name: 'По имени (Возрастание)',
        onClick: () => fn.onSortChange('firstName', 'asc'),
        isActive: sortBy === 'firstName' && order === 'asc',
    },
    {
        name: 'По имени (Убывание)',
        onClick: () => fn.onSortChange('firstName', 'desc'),
        isActive: sortBy === 'firstName' && order === 'desc',
    },
    {
        name: 'По возрасту (Возрастание)',
        onClick: () => fn.onSortChange('age', 'asc'),
        isActive: sortBy === 'age' && order === 'asc',
    },
    {
        name: 'По возрасту (Убывание)',
        onClick: () => fn.onSortChange('age', 'desc'),
        isActive: sortBy === 'age' && order === 'desc',
    },
];