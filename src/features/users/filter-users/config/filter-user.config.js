export const filterUsers = (fn) => [
    {
        name: 'По умолчанию',
        onClick: () => fn.onFilterChange(null),
    },
    {
        name: 'Мужчины',
        onClick: () => fn.onFilterChange('male'),
    },
    {
        name: 'Женщины',
        onClick: () => fn.onFilterChange('female'),
    },
];

export const sortedUsers = (fn) => [
    {
        name: 'По умолчанию',
        onClick: () => fn.onSortChange(null, null),
    },
    {
        name: 'По имени (Возрастание)',
        onClick: () => fn.onSortChange('firstName', 'asc'),
    },
    {
        name: 'По имени (Убывание)',
        onClick: () => fn.onSortChange('firstName', 'desc'),
    },
    {
        name: 'По возрасту (Возрастание)',
        onClick: () => fn.onSortChange('age', 'asc'),
    },
    {
        name: 'По возрасту (Убывание)',
        onClick: () => fn.onSortChange('age', 'desc'),
    },
];