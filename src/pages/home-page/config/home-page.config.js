export const USER_COLUMNS = [
    { key: 'name', label: 'ФИО', render: (user) => `${user.firstName} ${user.lastName} ${user.maidenName}` },
    { key: 'age', label: 'Возраст', render: (user) => user.age },
    { key: 'gender', label: 'Пол', render: (user) => user.gender },
    { key: 'phone', label: 'Номер телефона', render: (user) => user.phone },
    { key: 'address', label: 'Адрес', render: (user) => `${user.address.address}, ${user.address.city}` },
];